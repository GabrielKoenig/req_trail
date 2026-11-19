@echo off
rem Double-click to install what req_trail's tools need. The work is done by setup\install_prerequisites.ps1.
rem Add -check_only to see what is missing without installing anything.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup\install_prerequisites.ps1" %*
set exit_code=%errorlevel%
echo.
pause
exit /b %exit_code%
