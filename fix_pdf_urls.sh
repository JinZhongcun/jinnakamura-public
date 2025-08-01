#!/bin/bash

# PDFリンクを修正するスクリプト
# /data/... のパスを /jinnakamura-public/data/... に変更

echo "Fixing PDF URLs in HTML files..."

# バックアップディレクトリを作成
BACKUP_DIR="pdf_url_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# HTMLファイルを検索してバックアップを作成
find . -name "*.html" -type f | while read file; do
    # バックアップを作成
    cp "$file" "$BACKUP_DIR/$(basename "$file").backup"
done

# PDFリンクを修正
# href="/data/..." を href="/jinnakamura-public/data/..." に変更
find . -name "*.html" -type f -exec sed -i 's|href="/data/|href="/jinnakamura-public/data/|g' {} \;

# href="/en/cv.pdf" を href="/jinnakamura-public/en/cv.pdf" に変更
find . -name "*.html" -type f -exec sed -i 's|href="/en/cv\.pdf"|href="/jinnakamura-public/en/cv.pdf"|g' {} \;

# href="/ja/cv.pdf" を href="/jinnakamura-public/ja/cv.pdf" に変更  
find . -name "*.html" -type f -exec sed -i 's|href="/ja/cv\.pdf"|href="/jinnakamura-public/ja/cv.pdf"|g' {} \;

echo "PDF URL fixes completed. Backups saved in $BACKUP_DIR"

# 修正されたファイルの確認
echo -e "\nFiles with PDF links:"
grep -r 'href=".*\.pdf"' --include="*.html" . | head -20