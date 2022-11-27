import React from "react";

import "./css/SoundPlaybackElement.css";

export function SoundPlaybackElement(props) {
    const {playbackFunctionsObj, soundTitle} = props;
    return (
        <div className="sound-playback-element" style={{background: "url('./img/metal.jpg')"}}>
            <button className="sound-play-btn" 
                onMouseDown={() => {playbackFunctionsObj.play();}}
                onMouseEnter={(event) => {
                    if(event.nativeEvent.buttons==1) playbackFunctionsObj.play();
                }}
            >{soundTitle}</button>
            <button id="sound-pause-btn" onClick={() => {playbackFunctionsObj.pause();}}>
              <svg version="1.1" baseProfile="full" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="1" width="2" height="8" fill="rgb(189, 183, 107)" />
                <rect x="6" y="1" width="2" height="8" fill="rgb(189, 183, 107)" />
              </svg>
            </button>
            <button id="sound-stop-btn" onClick={() => {playbackFunctionsObj.stop();}}>
              <svg version="1.1" baseProfile="full" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" rx="15%" ry="15%" fill="rgb(189, 183, 107)"/>           
              </svg>
            </button>
        </div>
    );
}