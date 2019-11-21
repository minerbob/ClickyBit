import React from "react";

function HelloHeader() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Clicky Game</a></li>
                    <li>Click an image to begin!</li>
                    <li>Score: 0 | Top Score: 0</li>
                </ul>
            </nav>
        </div>
    );
}

export default HelloHeader;
