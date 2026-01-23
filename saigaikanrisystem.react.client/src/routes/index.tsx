import { Routes, Route } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import List from '../pages/List/List';
import Detail from '../pages/Detail/Detail';
import BasicInfo from '../pages/Detail/BasicInfo/BasicInfo';
import Flash from '../pages/Detail/Flash/Flash';
import Report from '../pages/Detail/Report/Report';
import Graph from '../pages/Graph/Graph';
import AccessDenied from '../pages/Error/AccessDenied';
import Error from '../pages/Error/Error';

export default function AppRoutes() {
    return (
        <Routes>
            {/* メニュー画面（起動時デフォルト） */}
            <Route path="/" element={<Menu />} />
            
            {/* 検索画面 */}
            <Route path="/list" element={<List />} />
            
            {/* 詳細・入力画面 */}
            <Route path="/detail" element={<Detail />} />
            <Route path="/detail/basicinfo" element={<BasicInfo />} />
            <Route path="/detail/flash" element={<Flash />} />
            <Route path="/detail/report" element={<Report />} />
            
            {/* グラフ画面 */}
            <Route path="/graph" element={<Graph />} />
            
            {/* エラー画面 */}
            <Route path="/access-denied" element={<AccessDenied />} />
            <Route path="/error" element={<Error />} />
        </Routes>
    );
}