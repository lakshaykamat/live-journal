#!/bin/bash

env_example=".env.example"
env_file=".env"

# Function to install Yarn if not installed
install_yarn() {
    if ! command -v yarn &> /dev/null; then
        echo "Yarn is not installed. Installing Yarn..."
        # Add Yarn repository and install
        curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo gpg --dearmor -o /usr/share/keyrings/yarn-archive-keyring.gpg
        echo "deb [signed-by=/usr/share/keyrings/yarn-archive-keyring.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list.d/yarn.list
        sudo apt update
        sudo apt install yarn
        echo "Yarn installed successfully."
    else
        echo "Yarn is already installed."
    fi
}

# Function to copy .env.example to .env if exists
copy_env_file() {
    if [ -f "$env_example" ]; then
        # Copy content from .env.example to .env
        cp "$env_example" "$env_file"
        echo "Content from $env_example copied to $env_file"
    else
        echo "$env_example does not exist."
    fi
}

# Main script starts here

# Install Yarn
install_yarn

# Install Dependencies using Yarn
yarn install

# Copy .env.example to .env
copy_env_file

echo "Script execution completed."
