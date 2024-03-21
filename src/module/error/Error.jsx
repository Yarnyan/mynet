import React from 'react'
import { Link } from "react-router-dom";
export default function Error() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>4<span>0</span>4</h1>
                </div>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/">home page</Link>
            </div>
        </div>
    )
}
