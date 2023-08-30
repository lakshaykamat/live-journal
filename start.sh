#!/bin/bash

REPO_URL=https://github.com/lakshaykamat/live-journal
env_example=".env.example"
env_file=".env"
log_file="script_log.txt"

# Log function
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> "$log_file"
}

# Function to install Yarn if not installed
install_yarn() {
    if ! command -v yarn &> /dev/null; then
        log "Yarn is not installed. Installing Yarn..."
        # Add Yarn repository and install
        curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo gpg --dearmor -o /usr/share/keyrings/yarn-archive-keyring.gpg
        echo "deb [signed-by=/usr/share/keyrings/yarn-archive-keyring.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list.d/yarn.list
        sudo apt update
        sudo apt install yarn
        log "Yarn installed successfully."
    else
        log "Yarn is already installed."
    fi
}

# Function to copy .env.example to .env if exists
copy_env_file() {
    if [ -f "$env_example" ]; then
        # Copy content from .env.example to .env
        cp "$env_example" "$env_file"
        log "Content from $env_example copied to $env_file"
    else
        log "$env_example does not exist."
    fi
}

# Main script starts here
exec &> "$log_file"

log "Script execution started."

# Install Yarn
install_yarn

# Clone repository
log "Cloning repository from $REPO_URL..."
git clone "$REPO_URL"

# Install Dependencies using Yarn
log "Installing client dependencies..."
cd client/ && yarn

log "Installing server dependencies..."
cd ../server && yarn install

# Copy .env.example to .env
copy_env_file

log "Script execution completed."
