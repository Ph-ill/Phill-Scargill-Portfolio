#!/bin/bash

echo "🚀 Open Graph Image Generator for Phill's Portfolio"
echo "=================================================="
echo ""
echo "This script will help you generate the og-image.png file for social media sharing."
echo ""

# Check if we're in the right directory
if [ ! -f "og-image-generator.html" ]; then
    echo "❌ Error: og-image-generator.html not found in current directory"
    echo "Please run this script from the project root directory"
    exit 1
fi

echo "📋 Steps to generate your Open Graph image:"
echo ""
echo "1. 🌐 Open og-image-generator.html in your web browser"
echo "2. 🖱️  Right-click on the card and select 'Inspect Element'"
echo "3. 🔍 In DevTools, right-click on the .og-card element"
echo "4. 📸 Select 'Capture node screenshot'"
echo "5. 💾 Save the image as 'og-image.png' in your public/ folder"
echo ""

# Check if public directory exists
if [ ! -d "public" ]; then
    echo "📁 Creating public directory..."
    mkdir -p public
fi

echo "📁 The og-image.png should be saved to: $(pwd)/public/og-image.png"
echo ""

# Open the HTML file in default browser
echo "🌐 Opening og-image-generator.html in your default browser..."
if command -v xdg-open > /dev/null; then
    xdg-open og-image-generator.html
elif command -v open > /dev/null; then
    open og-image-generator.html
else
    echo "⚠️  Could not automatically open browser. Please manually open og-image-generator.html"
fi

echo ""
echo "✅ After generating the image, your portfolio will have rich previews on:"
echo "   • WhatsApp"
echo "   • Facebook"
echo "   • Twitter"
echo "   • LinkedIn"
echo "   • Discord"
echo "   • And many other platforms!"
echo ""
echo "🎯 The preview will show:"
echo "   • Your actual profile photo (same as on your site)"
echo "   • Your name and title"
echo "   • Professional description"
echo "   • Key skills"
echo "   • Your website URL"
echo ""
echo "💡 Pro tip: Test your link preview using:"
echo "   https://www.opengraph.xyz/"
echo "   https://cards-dev.twitter.com/validator"
echo "   https://developers.facebook.com/tools/debug/"
