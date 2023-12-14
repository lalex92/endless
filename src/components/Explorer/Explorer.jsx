import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState } from "react";
import "./explorer.css"
import { NoToneMapping } from "three";


import Content from "./Content";
import InputController from "./InputController";

function Explorer() {
    return (
        <>
            <div id="explorer">
                <Canvas id="canvas" flat linear>
                    <PerspectiveCamera makeDefault position={[0, 0, 1000]}/>
                    <ambientLight intensity={20} />
                    <InputController>
                        <Content />
                    </InputController>
                </Canvas>
            </div>
            <div id="radial-blur-mask" />
        </>
    );
}

export default Explorer;
