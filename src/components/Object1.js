import React, { useRef, useEffect} from 'react';
import { useFrame } from 'react-three-fiber'

function Object1(props) {
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
    });

    useEffect(() => {
        console.log(mesh);
    },[]);

    return (
        <mesh
        {...props}
        ref={mesh}
        scale={[1, 1, 1]}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={'orange'} />
        </mesh>
    )
}

export default Object1
