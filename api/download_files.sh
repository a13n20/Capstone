#!/bin/bash
echo "Downloading large files from Google Drive..."

python3 -m gdown --id 118HRJ9LYgGDziW8arr9gpU9qyslLTWod -O api/phishing_detection/phish_detect_V1/model.safetensors
python3 -m gdown --id 1hGnNFSVOk3tTe1Xv8T-kpbvbWe84j4yX -O api/password_aid/rockyou.txt 

echo "Download complete"