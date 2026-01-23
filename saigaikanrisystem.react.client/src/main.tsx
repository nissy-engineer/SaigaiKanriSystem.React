
/**
 * main.tsx - アプリケーションのエントリーポイント
 * 
 * 役割:
 * - Reactアプリケーションを起動する
 * - index.htmlの<div id="root">にReactアプリをマウント（埋め込む）
 * - アプリ全体の初期化処理を行う
 * 
 * 起動の流れ:
 * index.html → main.tsx → App.tsx → 各ページコンポーネント
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
