import React from "react";
import { MusicTool } from "./MusicTool.jsx";

import "./css/App.css";

export default function App(props) {
    return (
        <div className="music-tool-container" style={{background: "url('./img/bg.jpg')"}}>
            <div className="music-tool-precise-positioner">
                <MusicTool/>
            </div>
        </div>
    );
}