@echo off

set "env_example=.env.example"
set "env_file=.env"

:: Function to install Yarn if not installed
:install_yarn
where yarn >nul 2>nul
if %errorlevel% neq 0 (
    echo Yarn is not installed. Installing Yarn...
    :: Download and install Yarn using npm
    npm install -g yarn
    echo Yarn installed successfully.
) else (
    echo Yarn is already installed.
)
goto :eof

:: Function to copy .env.example to .env if exists
:copy_env_file
if exist "%env_example%" (
    copy "%env_example%" "%env_file%"
    echo Content from %env_example% copied to %env_file%
) else (
    echo %env_example% does not exist.
)
goto :eof

:: Main script starts here

:: Install Yarn
call :install_yarn

:: Install Dependencies using Yarn
yarn install

:: Copy .env.example to .env
call :copy_env_file

echo Script execution completed.
