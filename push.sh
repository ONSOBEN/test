#!/bin/bash

# Ask the user for a commit message
echo "Enter commit message: "
read commit_message

# Check if the commit message is empty
if [ -z "$commit_message" ]; then
  commit_message="NO MESSAGE"
fi

# Add changes to git
git add .

# Commit changes with the provided or default message
git commit -m "$commit_message"

# Push changes to the remote repository
git push -u origin main

