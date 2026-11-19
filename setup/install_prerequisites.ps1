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

.PARAMETER check_only
    Report what is there and what is missing, and install nothing.

.EXAMPLE
    .\setup\install_prerequisites.ps1 -check_only
#>
[CmdletBinding()]
param(
    [switch]$check_only
)

$ErrorActionPreference = 'Stop'
$repo_root = Split-Path -Parent $PSScriptRoot

# One row per tool. version_pattern finds the major version in the output of "<command> --version". install_folder is
# where the installer puts the tool, used when PATH does not show it yet.
$tools = @(
    @{ name = 'Git';     command = 'git';  winget_id = 'Git.Git';           minimum_major = 2;  version_pattern = 'version (\d+)\.'
       install_folder = Join-Path $env:ProgramFiles 'Git\cmd' },
    @{ name = 'Node.js'; command = 'node'; winget_id = 'OpenJS.NodeJS.LTS'; minimum_major = 22; version_pattern = '^v(\d+)\.'
       install_folder = Join-Path $env:ProgramFiles 'nodejs' }
)

function write_step([string]$text)    { Write-Host "-> $text" }
function write_ok([string]$text)      { Write-Host "   ok: $text" -ForegroundColor Green }
function write_missing([string]$text) { Write-Host "   missing: $text" -ForegroundColor Yellow }
function write_failed([string]$text)  { Write-Host "   failed: $text" -ForegroundColor Red }

function update_path {
    # An installer writes PATH to the registry. Read it again, so this window finds the new tool.
    $machine = [Environment]::GetEnvironmentVariable('Path', 'Machine')
    $user = [Environment]::GetEnvironmentVariable('Path', 'User')
    $env:Path = (@($machine, $user) | Where-Object { $_ }) -join ';'
}

function get_version_text($tool) {
    $found = Get-Command $tool.command -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1
    if (-not $found -and (Test-Path (Join-Path $tool.install_folder "$($tool.command).exe"))) {
        # Installed, but this window's PATH does not show it yet: add the folder for this run.
        $env:Path = "$($tool.install_folder);$env:Path"
        $found = Get-Command $tool.command -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1
    }
    if (-not $found) { return '' }
    return ((& $found.Source --version) 2>$null | Select-Object -First 1)
}

function get_major_version($tool) {
    $text = get_version_text $tool
    if ($text -match $tool.version_pattern) { return [int]$Matches[1] }
    return 0
}

function install_tool($tool) {
    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
        write_failed "winget is not available. Install $($tool.name) by hand, then run this script again."
        return $false
    }
    # Out-Host shows winget's progress without making it part of this function's result, which must be one boolean.
    & winget install --id $tool.winget_id --exact --source winget | Out-Host
    $winget_exit_code = $LASTEXITCODE
    update_path
    $major = get_major_version $tool
    if ($major -ge $tool.minimum_major) {
        write_ok "$($tool.name): $(get_version_text $tool)"
        return $true
    }
    write_failed "$($tool.name) is still missing or too old after winget (exit code $winget_exit_code)."
    return $false
}

$mode = ''
if ($check_only) { $mode = ', check only' }
Write-Host "req_trail: prerequisites$mode"
$complete = $true
update_path   # a window opened before an earlier install sees the tools installed since

foreach ($tool in $tools) {
    write_step "$($tool.name) $($tool.minimum_major) or newer"
    $major = get_major_version $tool
    if ($major -ge $tool.minimum_major) {
        write_ok "$($tool.name): $(get_version_text $tool)"
        continue
    }
    if ($major -gt 0) { write_missing "$($tool.name) $(get_version_text $tool) is too old" }
    else { write_missing "$($tool.name) is not installed" }
    if ($check_only) { $complete = $false; continue }
    $installed = install_tool $tool
    # Only a single $true counts. Anything else, such as stray output mixed into the result, is a failure.
    if (-not ($installed -is [bool] -and $installed)) { $complete = $false }
}

write_step 'npm packages'
$node_ready = (get_major_version $tools[1]) -ge $tools[1].minimum_major
if (-not (Test-Path (Join-Path $repo_root 'package.json'))) {
    write_ok 'none yet: the repo has no package.json'
}
elseif (-not $node_ready) {
    write_missing 'skipped, because Node.js is missing'
    $complete = $false
}
elseif ($check_only) {
    if (Test-Path (Join-Path $repo_root 'node_modules')) { write_ok 'node_modules is there' }
    else { write_missing 'not installed yet'; $complete = $false }
}
else {
    Push-Location $repo_root
    try {
        if (Test-Path (Join-Path $repo_root 'package-lock.json')) { & npm.cmd ci } else { & npm.cmd install }
        if ($LASTEXITCODE -eq 0) { write_ok 'installed' }
        else { write_failed "npm stopped with exit code $LASTEXITCODE"; $complete = $false }
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
if ($check_only) {
    Write-Host 'Something is missing. Run the script without -check_only to install it.' -ForegroundColor Yellow
}
else {
    Write-Host 'Not complete. See the lines above.' -ForegroundColor Red
}
exit 1
