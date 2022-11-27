import React from "react";
import useSound from 'use-sound';

import {SoundPlaybackElement} from "./SoundPlaybackElement.jsx";

import "./css/MusicTool.css";

import guitarTune_a from "./sound/tune_a.mp3";
import guitarTune_b from "./sound/tune_b.mp3";
import guitarTune_d from "./sound/tune_d.mp3";
import guitarTune_e from "./sound/tune_e.mp3";
import guitarTune_e6 from "./sound/tune_e6.mp3";
import guitarTune_g from "./sound/tune_g.mp3";

export function MusicTool(props) {
    const guitarSoundsObj = {
        tune_a: {},
        tune_b: {},
        tune_d: {},
        tune_e: {},
        tune_e6: {},
        tune_g: {},
    };

    [guitarSoundsObj.tune_a.play, {pause: guitarSoundsObj.tune_a.pause, stop: guitarSoundsObj.tune_a.stop}] = useSound(guitarTune_a);
    [guitarSoundsObj.tune_b.play, {pause: guitarSoundsObj.tune_b.pause, stop: guitarSoundsObj.tune_b.stop}] = useSound(guitarTune_b);
    [guitarSoundsObj.tune_d.play, {pause: guitarSoundsObj.tune_d.pause, stop: guitarSoundsObj.tune_d.stop}] = useSound(guitarTune_d);
    [guitarSoundsObj.tune_e.play, {pause: guitarSoundsObj.tune_e.pause, stop: guitarSoundsObj.tune_e.stop}] = useSound(guitarTune_e);
    [guitarSoundsObj.tune_e6.play, {pause: guitarSoundsObj.tune_e6.pause, stop: guitarSoundsObj.tune_e6.stop}] = useSound(guitarTune_e6);
    [guitarSoundsObj.tune_g.play, {pause: guitarSoundsObj.tune_g.pause, stop: guitarSoundsObj.tune_g.stop}] = useSound(guitarTune_g);

    return (
        <div className="music-tool" style={{background: "url('./img/tree.jpg')"}}>
            <SoundPlaybackElement playbackFunctionsObj={guitarSoundsObj.tune_e} soundTitle={"Tune E Play"}/>
            <SoundPlaybackElement playbackFunctionsObj = {guitarSoundsObj.tune_a} soundTitle = {"Tune A Play"}/>
            <SoundPlaybackElement playbackFunctionsObj = {guitarSoundsObj.tune_d} soundTitle = {"Tune D Play"}/>
            <SoundPlaybackElement playbackFunctionsObj = {guitarSoundsObj.tune_g} soundTitle = {"Tune G Play"}/>
            <SoundPlaybackElement playbackFunctionsObj = {guitarSoundsObj.tune_b} soundTitle = {"Tune B Play"}/>
            <SoundPlaybackElement playbackFunctionsObj = {guitarSoundsObj.tune_e6} soundTitle = {"Tune E6 Play"}/>
        </div>
    );
}