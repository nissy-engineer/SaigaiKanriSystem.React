## ツリー図

```
SaigaiKanriSystem.React/
├── saigaikanrisystem.react.client/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   │   └── vite.svg
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── index.html
│   ├── CHANGELOG.md
│   └── saigaikanrisystem.react.client.esproj
│
└── SaigaiKanriSystem.React.Server/
    ├── Controllers/
    │   └── WeatherForecastController.cs
    ├── Properties/
    ├── WeatherForecast.cs
    ├── Program.cs
    ├── CHANGELOG.md
    └── SaigaiKanriSystem.React.Server.csproj
```

## Git操作（プッシュ方法）

### 方法1：ターミナルでコマンド実行

VS Codeのターミナルで以下を実行：
```bash
git add .
git commit -m "コミットメッセージ"
git push
```

### 方法2：VS CodeのGUI操作（推奨）

1. 左サイドバーの「ソース管理」アイコンをクリック（または `Ctrl + Shift + G`）
2. 変更されたファイルが表示される
3. 「+」ボタンでファイルをステージング（または「すべての変更をステージ」）
4. 上部のテキストボックスにコミットメッセージを入力
5. 「コミット」をクリック
6. 「...」→「プッシュ」をクリック

### 初回のみ必要な設定
```bash
# Gitのユーザー情報設定（一度だけ）
git config --global user.name "あなたの名前"
git config --global user.email "your-email@example.com"
```