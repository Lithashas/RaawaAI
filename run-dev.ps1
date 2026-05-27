# Run both frontend and backend dev servers in separate PowerShell windows
# Usage: Right-click -> Run with PowerShell, or from an elevated PowerShell session:
#   .\run-dev.ps1

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

# Frontend
$frontendCmd = "cd `"$repoRoot\fronend`"; npm run dev"
Start-Process powershell -ArgumentList "-NoExit","-Command`, `$frontendCmd`"

# Backend (activate the venv and start uvicorn on port 8001)
$venvActivate = "& `"$repoRoot\.venv\Scripts\Activate.ps1`""
$backendCmd = "cd `"$repoRoot\backend`"; $venvActivate; uvicorn app.main:app --reload --port 8001"
Start-Process powershell -ArgumentList "-NoExit","-Command`, `$backendCmd`"

Write-Host "Launched frontend and backend in separate PowerShell windows." -ForegroundColor Green
