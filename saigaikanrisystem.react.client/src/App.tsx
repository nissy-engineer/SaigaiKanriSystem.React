import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index';

/**
 * App.tsx - アプリケーション全体を管理するルートコンポーネント
 * 
 * 役割:
 * - ページ間のルーティング（画面遷移）を設定
 * - 全ページ共通のレイアウトやヘッダー・フッターを配置
 * - 全体で使う状態管理（ログイン情報など）を管理
 * - どのURLでどのページを表示するかを決める
 */

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;