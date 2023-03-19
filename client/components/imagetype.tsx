import React, { useState,useEffect } from 'react';
import { MisdemeanourKind, MISDEMEANOURS } from '../types/misdemeanours.types'

interface ImageTypeProps {
    misdemeanour: MisdemeanourKind;
}

const ImageType: React.FC<ImageTypeProps> = ({ misdemeanour }) => {
    const [path, setPath] = useState<string>("");
    useEffect(() => {
        const src = (misdemeanour) => {
            switch (misdemeanour) {
                case MISDEMEANOURS[0]: setPath("https://picsum.photos/id/100/50/50"); break;
                case MISDEMEANOURS[1]: setPath("https://picsum.photos/id/200/50/50"); break;
                case MISDEMEANOURS[2]: setPath("https://picsum.photos/id/300/50/50"); break;
                case MISDEMEANOURS[3]: setPath("https://picsum.photos/id/400/50/50"); break;
            }
        } 
        src(misdemeanour);
    },[misdemeanour]);
    
    return (
        <img src={path}></img> 
        )

}
export default ImageType;