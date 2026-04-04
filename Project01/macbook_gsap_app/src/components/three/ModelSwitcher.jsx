import { PresentationControls } from "@react-three/drei";
import React from "react";
import { useRef } from "react";
import MacbookModel16 from "../models/Macbook-16";

const ModelSwitcher = ({ scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    return (
        <>
            <PresentationControls>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
                </group>
            </PresentationControls>
            <PresentationControls>
                <group ref={smallMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.03 : 0.06}/>
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher;