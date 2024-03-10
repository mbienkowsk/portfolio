import Image from "next/image";
import Link from "next/link";


export default function ProjectCard({ imgPath, title, description, url = "" }: {
    imgPath: string,
    title: string,
    description: string
    url: string
}) {
    const PROJECT_CARD_WIDTH = 355;
    const PROJECT_CARD_HEIGHT = Math.floor(.67 * PROJECT_CARD_WIDTH);
    return <div className="relative group max-w-[355px] max-h-[236px]">
        <Image src={imgPath}
            alt="Image depicting one of my projects" //todo: separate alts for all cards
            width={PROJECT_CARD_WIDTH}
            height={PROJECT_CARD_HEIGHT}
            className="rounded-xl border-text_primary border-2 group-hover:scale-110 duration-200 group-hover:opacity-15">
        </Image>
        <div
            className="absolute top-0 left-0 opacity-0 w-full h-full group-hover:opacity-100 delay-200 text-center">
            <div>
                <h1 className="text-4xl md:text-3xl bold pt-2 pb-2">{title}</h1>
                <p className="text-3xl sm:text-3xl md:text-2xl lg:text-xl">{description}</p>
            </div>
            <Link href={url}
                className="hover:text-on_hover duration-200 text-2xl absolute bottom-0 left-0 text-center w-full">Check
                it out</Link>
        </div>
    </div>
}
