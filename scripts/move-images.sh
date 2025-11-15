#!/bin/bash

# 画像移動＆記事作成スクリプト
# 使い方: ./scripts/move-images.sh {記事タイトル}

set -e

# 色付き出力用
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 引数チェック
if [ $# -eq 0 ]; then
    echo -e "${RED}エラー: 記事タイトルを引数で指定してください${NC}"
    echo "使い方: ./scripts/move-images.sh {記事タイトル}"
    exit 1
fi

ARTICLE_SLUG="$1"
SOURCE_DIR="$HOME/Documents/screenshot/article/${ARTICLE_SLUG}"
DEST_DIR="public/images/${ARTICLE_SLUG}"
POST_FILE="posts/${ARTICLE_SLUG}.md"
TEMPLATE_FILE="posts/template.md"
TODAY=$(date +%Y-%m-%d)

echo "======================================"
echo "画像移動＆記事作成スクリプト"
echo "======================================"
echo "記事タイトル: ${ARTICLE_SLUG}"
echo "実行日: ${TODAY}"
echo ""

# ソースディレクトリの存在確認
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}エラー: ${SOURCE_DIR} が見つかりません${NC}"
    exit 1
fi

# 画像ファイルの検索（作成日時の古い順）
IMAGE_FILES=$(find "$SOURCE_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.webp" \) -print0 | xargs -0 ls -tr 2>/dev/null)

if [ -z "$IMAGE_FILES" ]; then
    echo -e "${YELLOW}警告: ${SOURCE_DIR} に画像ファイルが見つかりませんでした${NC}"
    exit 0
fi

IMAGE_COUNT=$(echo "$IMAGE_FILES" | wc -l | tr -d ' ')
echo -e "${GREEN}✓ ${IMAGE_COUNT}個の画像ファイルが見つかりました${NC}"

# 移動先ディレクトリの作成
mkdir -p "$DEST_DIR"
echo -e "${GREEN}✓ ${DEST_DIR} を作成しました${NC}"

# 画像の移動
echo ""
echo "画像を移動しています..."
MOVED_IMAGES=()
while IFS= read -r image_path; do
    if [ -f "$image_path" ]; then
        filename=$(basename "$image_path")
        mv "$image_path" "$DEST_DIR/$filename"
        MOVED_IMAGES+=("$filename")
        echo "  - $filename"
    fi
done <<< "$IMAGE_FILES"

echo -e "${GREEN}✓ ${#MOVED_IMAGES[@]}個の画像を移動しました${NC}"

# 記事ファイルの処理
echo ""
FILE_CREATED=false
if [ -f "$POST_FILE" ]; then
    echo -e "${YELLOW}⊘ ${POST_FILE} は既に存在します${NC}"
    echo "既存ファイルに画像タグを挿入します..."
else
    echo "記事ファイルを作成しています..."

    # テンプレートファイルの存在確認
    if [ ! -f "$TEMPLATE_FILE" ]; then
        echo -e "${RED}エラー: ${TEMPLATE_FILE} が見つかりません${NC}"
        exit 1
    fi

    # テンプレートをコピー
    cp "$TEMPLATE_FILE" "$POST_FILE"

    # タイトル、日付、サムネイルを更新（macOSとLinux両対応）
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/title: \".*\"/title: \"${ARTICLE_SLUG}\"/" "$POST_FILE"
        sed -i '' "s/date: \"[0-9-]*\"/date: \"${TODAY}\"/" "$POST_FILE"
        sed -i '' "s|thumbnail: \"/images/\"|thumbnail: \"/images/${ARTICLE_SLUG}/\"|" "$POST_FILE"
    else
        # Linux
        sed -i "s/title: \".*\"/title: \"${ARTICLE_SLUG}\"/" "$POST_FILE"
        sed -i "s/date: \"[0-9-]*\"/date: \"${TODAY}\"/" "$POST_FILE"
        sed -i "s|thumbnail: \"/images/\"|thumbnail: \"/images/${ARTICLE_SLUG}/\"|" "$POST_FILE"
    fi

    FILE_CREATED=true
    echo -e "${GREEN}✓ ${POST_FILE} を作成しました${NC}"
fi

# 画像タグの挿入（既存ファイルでも新規ファイルでも実行）
if [ ${#MOVED_IMAGES[@]} -gt 0 ]; then
    LINE_NUM=8
    for img in "${MOVED_IMAGES[@]}"; do
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            sed -i '' "${LINE_NUM}i\\
<img src=\"/images/${ARTICLE_SLUG}/${img}\" width=\"600\">\\
" "$POST_FILE"
        else
            # Linux
            sed -i "${LINE_NUM}i <img src=\"/images/${ARTICLE_SLUG}/${img}\" width=\"600\">\n" "$POST_FILE"
        fi
        LINE_NUM=$((LINE_NUM + 2))  # 画像タグ + 空行 = 2行進める
    done

    echo -e "${GREEN}✓ ${#MOVED_IMAGES[@]}個の画像タグを挿入しました${NC}"
fi

echo ""
echo "======================================"
echo -e "${GREEN}完了しました！${NC}"
echo "======================================"
echo "移動した画像: ${#MOVED_IMAGES[@]}個"
echo "保存先: ${DEST_DIR}"
echo "記事ファイル: ${POST_FILE}"
echo ""
