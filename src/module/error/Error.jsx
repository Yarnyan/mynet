import React from 'react'
import { Link } from "react-router-dom";
export default function Error() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>4<span>0</span>4</h1>
                </div>
                <p>Страница, которую вы ищете, могла быть удалена, ее название изменилось или она временно недоступна..</p>
                <Link to="/">Главная страница</Link>
            </div>
        </div>
    )
}
