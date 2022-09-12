import React, { ReactElement, useEffect } from 'react'
import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
CSSPlugin.defaultForce3D = false;
interface Props {
    
}

export default function Fallback({}: Props): ReactElement {
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
            console.log("s-trigger gsap refreshed")
        },1000)
      }, []);
    return (
        <div></div>
    )
}
