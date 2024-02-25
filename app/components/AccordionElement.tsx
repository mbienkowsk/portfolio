'use client'
import {useState, JSX} from "react";

export default function AccordionElement({title, content}: {
    title: string,
    content: JSX.Element
}) {
    const [showContent, setShowContent] = useState<boolean>(false);

    function toggleContent() {
        setShowContent(!showContent);
    }

    return (
        <div>
            <button className="text-5xl pt-24 pb-10 text-on_hover flex gap-16 hover:text-text_primary transition-opacity duration-200" onClick={toggleContent}>
                <div
                    className={`${showContent ? 'rotate-90' : 'rotate-0'} transition-transform`}>&gt;   </div>
                <div>{title}</div>
            </button>
            <div
                className={`duration-1000 ${showContent ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                {content}
            </div>
        </div>
    );
}
