#!/bin/bash

# Build the frontend
npm run build

# Copy build output to dist/public for Vercel
mkdir -p dist/public
cp -r client/dist/* dist/public/