
/**
 * main.tsx - アプリケーションのエントリーポイント
 * 
 * 役割:
 * - Reactアプリケーションを起動する
 * - index.htmlの<div id="root">にReactアプリをマウント（埋め込む）
 * - アプリ全体の初期化処理を行う
 * 
 * 起動の流れ:
 * index.html 
 *   → main.tsx（アプリ起動）
 *   → App.tsx（BrowserRouterでルーティング開始）
 *   → routes/index.tsx（URLに応じたページを選択）
 *   → 各ページコンポーネント（Menu.tsx、List.tsxなど）
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
