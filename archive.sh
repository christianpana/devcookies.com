#!/usr/bin/env bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | grep ARCHIVE_PWD | xargs)
else
    echo "Error: .env file not found"
    exit 1
fi

# Check if ARCHIVE_PWD is set
if [ -z "$ARCHIVE_PWD" ]; then
    echo "Error: ARCHIVE_PWD not found in .env file"
    exit 1
fi

# Check command argument
COMMAND="$1"

if [ "$COMMAND" = "encrypt" ] || [ "$COMMAND" = "archive" ]; then
    # Check if src folder exists
    if [ ! -d "src" ]; then
        echo "Error: src folder not found"
        exit 1
    fi

    # Create pack directory if it doesn't exist
    mkdir -p pack

    # Generate timestamp in YYYYMMDDHHMMSS format
    TIMESTAMP=$(date +"%Y%m%d%H%M%S")
    ARCHIVE_NAME="pack/src-${TIMESTAMP}.zip"

    # Create encrypted archive
    echo "Creating encrypted archive: ${ARCHIVE_NAME}"
    zip -r -e -P "$ARCHIVE_PWD" "$ARCHIVE_NAME" src/

    if [ $? -eq 0 ]; then
        echo "Archive created successfully: ${ARCHIVE_NAME}"
    else
        echo "Error: Failed to create archive"
        exit 1
    fi

elif [ "$COMMAND" = "decrypt" ] || [ "$COMMAND" = "extract" ]; then
    # Check if archive file is provided as argument
    if [ -z "$2" ]; then
        echo "Usage: ./archive.sh decrypt <archive-file.zip>"
        exit 1
    fi

    ARCHIVE_FILE="$2"

    # Check if archive file exists (try with and without pack/ prefix)
    if [ ! -f "$ARCHIVE_FILE" ] && [ -f "pack/$ARCHIVE_FILE" ]; then
        ARCHIVE_FILE="pack/$ARCHIVE_FILE"
    fi

    if [ ! -f "$ARCHIVE_FILE" ]; then
        echo "Error: Archive file not found: ${ARCHIVE_FILE}"
        exit 1
    fi

    # Extract encrypted archive
    echo "Decrypting archive: ${ARCHIVE_FILE}"
    unzip -P "$ARCHIVE_PWD" "$ARCHIVE_FILE"

    if [ $? -eq 0 ]; then
        echo "Archive decrypted successfully"
    else
        echo "Error: Failed to decrypt archive (wrong password or corrupted file)"
        exit 1
    fi

else
    echo "Usage:"
    echo "  Archive:  ./archive.sh encrypt"
    echo "  Decrypt:  ./archive.sh decrypt <archive-file.zip>"
    exit 1
fi