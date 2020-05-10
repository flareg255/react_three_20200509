import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from 'react-three-fiber'
import './App.css';

import Object1 from './components/Object1'

function App() {
    return (
        <Canvas>
            <Camera position={[0, 0, 100]} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Object1 position={[1.2, 0, 0]} />
            <Object1 position={[-1.2, 0, 0]} />
        </Canvas>
    );
}

function Camera(props) {
    const camera = useRef()
    const { setDefaultCamera } = useThree()
    // This makes sure that size-related calculations are proper
    // Every call to useThree will return this camera instead of the default camera
    useEffect(() => void setDefaultCamera(camera.current), [])
    return <perspectiveCamera ref={camera} {...props} />
}

export default App;
