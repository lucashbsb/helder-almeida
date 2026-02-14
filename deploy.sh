#!/bin/bash

# Script de deploy para GitHub Pages
# Uso: ./deploy.sh

set -e

echo "🔨 Building project..."
npm run build

echo "📄 Copying CNAME to dist..."
cp CNAME dist/

echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "✅ Deploy complete! Site will be available at https://helderalmeida.com.br"
