@echo off

setlocal

set "REPO_URL=https://github.com/lakshaykamat/live-journal"
set "env_example=.env.example"
set "env_file=.env"
set "log_file=script_log.txt"

REM Log function
:log
    echo [%DATE% %TIME%] %1 >> "%log_file%"
    exit /b

REM Function to install Yarn if not installed
:install_yarn
    where yarn >nul 2>nul
    if %errorlevel% neq 0 (
        call :log "Yarn is not installed. Installing Yarn..."
        REM Download and install Yarn using npm
        npm install -g yarn
        call :log "Yarn installed successfully."
    ) else (
        call :log "Yarn is already installed."
    )
    exit /b

REM Function to copy .env.example to .env if exists
:copy_env_file
    if exist "%env_example%" (
        copy "%env_example%" "%env_file%"
        call :log "Content from %env_example% copied to %env_file%"
    ) else (
        call :log "%env_example% does not exist."
    )
    exit /b

REM Main script starts here

REM Redirect all output to the log file
if not exist "%log_file%" type nul > "%log_file%"

call :log "Script execution started."

REM Install Yarn
call :install_yarn

REM Clone repository
call :log "Cloning repository from %REPO_URL%..."
git clone "%REPO_URL%"

REM Install Dependencies using Yarn
call :log "Installing client dependencies..."
cd client & call yarn

call :log "Installing server dependencies..."
cd ../server & call yarn install

REM Copy .env.example to .env
call :copy_env_file

call :log "Script execution completed."

endlocal
