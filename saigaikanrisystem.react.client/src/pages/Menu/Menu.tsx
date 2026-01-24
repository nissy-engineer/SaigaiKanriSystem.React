import { Link } from 'react-router-dom';
import { MdFlashOn, MdSearch, MdBarChart, MdCampaign } from 'react-icons/md';
import './Menu.css';

function Menu() {
    return (
        <div className="menu-container">
            {/* タイトル */}
            <header className="menu-header">
                <h1 className="menu-title">災害情報管理システム</h1>
            </header>

            {/* ボタンエリア */}
            <div className="menu-buttons">
                    <Link to="/detail/flash" className="menu-button flash-button">
                        <MdFlashOn className="button-icon" />
                        <span className="button-text">速報</span>
                    </Link>

                    <Link to="/list" className="menu-button search-button">
                        <MdSearch className="button-icon" />
                        <span className="button-text">検索・編集</span>
                    </Link>

                    <Link to="/graph" className="menu-button graph-button">
                        <MdBarChart className="button-icon" />
                        <span className="button-text">グラフ</span>
                    </Link>
                </div>

                {/* お知らせ欄 */}
                <section className="notice-section">
                    <h2 className="notice-title">
                        <MdCampaign className="notice-icon" />
                        お知らせ
                    </h2>
                    <div className="notice-content">
                        <ul className="notice-list">
                            <li className="notice-item">
                                <span className="notice-date">2025/01/24</span>
                                <span className="notice-text">システムのメンテナンスを実施しました</span>
                            </li>
                            <li className="notice-item">
                                <span className="notice-date">2025/01/20</span>
                                <span className="notice-text">新機能「グラフ表示」を追加しました</span>
                            </li>
                            <li className="notice-item">
                                <span className="notice-date">2025/01/15</span>
                                <span className="notice-text">速報入力機能を改善しました</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }

export default Menu;