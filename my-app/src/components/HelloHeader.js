import React from "react";

function HelloHeader(props) {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Clicky Game</a></li>
                    <li>Click an image to begin!</li>
                    <li>Score: {props.score} | Top Score: {props.high}</li>
                </ul>
            </nav>
        </div>
    );
}

export default HelloHeader;
