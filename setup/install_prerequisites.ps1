<#
.SYNOPSIS
    Installs what req_trail's tools need on a Windows PC: Git, Node.js LTS and, once the repo has a package.json,
    its npm packages.

.DESCRIPTION
    Double-click install_prerequisites.cmd in the repo root, or run this script in PowerShell. A tool that is already
    there in a recent enough version is left alone. Missing tools come from winget, the package manager that ships
    with Windows; winget may ask you to accept the package's licence, and the installer may ask for administrator
    rights.

    This script only installs. All of req_trail's checks and tools are JavaScript on Node.

.PARAMETER CheckOnly
    Report what is there and what is missing, and install nothing.

.EXAMPLE
    .\setup\install_prerequisites.ps1 -CheckOnly
#>
[CmdletBinding()]
param(
    [switch]$CheckOnly
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot

# One row per tool. VersionPattern finds the major version in the output of "<Command> --version". InstallFolder is
# where the installer puts the tool, used when PATH does not show it yet.
$tools = @(
    @{ Name = 'Git';     Command = 'git';  WingetId = 'Git.Git';           MinimumMajor = 2;  VersionPattern = 'version (\d+)\.'
       InstallFolder = Join-Path $env:ProgramFiles 'Git\cmd' },
    @{ Name = 'Node.js'; Command = 'node'; WingetId = 'OpenJS.NodeJS.LTS'; MinimumMajor = 22; VersionPattern = '^v(\d+)\.'
       InstallFolder = Join-Path $env:ProgramFiles 'nodejs' }
)

function Write-Step([string]$Text)    { Write-Host "-> $Text" }
function Write-Ok([string]$Text)      { Write-Host "   ok: $Text" -ForegroundColor Green }
function Write-Missing([string]$Text) { Write-Host "   missing: $Text" -ForegroundColor Yellow }
function Write-Failure([string]$Text) { Write-Host "   failed: $Text" -ForegroundColor Red }

function Update-Path {
    # An installer writes PATH to the registry. Read it again, so this window finds the new tool.
    $machine = [Environment]::GetEnvironmentVariable('Path', 'Machine')
    $user = [Environment]::GetEnvironmentVariable('Path', 'User')
    $env:Path = (@($machine, $user) | Where-Object { $_ }) -join ';'
}

function Get-VersionText($Tool) {
    $found = Get-Command $Tool.Command -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1
    if (-not $found -and (Test-Path (Join-Path $Tool.InstallFolder "$($Tool.Command).exe"))) {
        # Installed, but this window's PATH does not show it yet: add the folder for this run.
        $env:Path = "$($Tool.InstallFolder);$env:Path"
        $found = Get-Command $Tool.Command -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1
    }
    if (-not $found) { return '' }
    return ((& $found.Source --version) 2>$null | Select-Object -First 1)
}

function Get-MajorVersion($Tool) {
    $text = Get-VersionText $Tool
    if ($text -match $Tool.VersionPattern) { return [int]$Matches[1] }
    return 0
}

function Install-Tool($Tool) {
    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
        Write-Failure "winget is not available. Install $($Tool.Name) by hand, then run this script again."
        return $false
    }
    # Out-Host shows winget's progress without making it part of this function's result, which must be one boolean.
    & winget install --id $Tool.WingetId --exact --source winget | Out-Host
    $wingetExitCode = $LASTEXITCODE
    Update-Path
    $major = Get-MajorVersion $Tool
    if ($major -ge $Tool.MinimumMajor) {
        Write-Ok "$($Tool.Name): $(Get-VersionText $Tool)"
        return $true
    }
    Write-Failure "$($Tool.Name) is still missing or too old after winget (exit code $wingetExitCode)."
    return $false
}

$mode = ''
if ($CheckOnly) { $mode = ', check only' }
Write-Host "req_trail: prerequisites$mode"
$complete = $true
Update-Path   # a window opened before an earlier install sees the tools installed since

foreach ($tool in $tools) {
    Write-Step "$($tool.Name) $($tool.MinimumMajor) or newer"
    $major = Get-MajorVersion $tool
    if ($major -ge $tool.MinimumMajor) {
        Write-Ok "$($tool.Name): $(Get-VersionText $tool)"
        continue
    }
    if ($major -gt 0) { Write-Missing "$($tool.Name) $(Get-VersionText $tool) is too old" }
    else { Write-Missing "$($tool.Name) is not installed" }
    if ($CheckOnly) { $complete = $false; continue }
    $installed = Install-Tool $tool
    # Only a single $true counts. Anything else, such as stray output mixed into the result, is a failure.
    if (-not ($installed -is [bool] -and $installed)) { $complete = $false }
}

Write-Step 'npm packages'
$nodeReady = (Get-MajorVersion $tools[1]) -ge $tools[1].MinimumMajor
if (-not (Test-Path (Join-Path $repoRoot 'package.json'))) {
    Write-Ok 'none yet: the repo has no package.json'
}
elseif (-not $nodeReady) {
    Write-Missing 'skipped, because Node.js is missing'
    $complete = $false
}
elseif ($CheckOnly) {
    if (Test-Path (Join-Path $repoRoot 'node_modules')) { Write-Ok 'node_modules is there' }
    else { Write-Missing 'not installed yet'; $complete = $false }
}
else {
    Push-Location $repoRoot
    try {
        if (Test-Path (Join-Path $repoRoot 'package-lock.json')) { & npm.cmd ci } else { & npm.cmd install }
        if ($LASTEXITCODE -eq 0) { Write-Ok 'installed' }
        else { Write-Failure "npm stopped with exit code $LASTEXITCODE"; $complete = $false }
    }
    finally {
        Pop-Location
    }
}

Write-Host ''
if ($complete) {
    Write-Host "Done: req_trail's tools can run on this PC." -ForegroundColor Green
    exit 0
}
if ($CheckOnly) {
    Write-Host 'Something is missing. Run the script without -CheckOnly to install it.' -ForegroundColor Yellow
}
else {
    Write-Host 'Not complete. See the lines above.' -ForegroundColor Red
}
exit 1
