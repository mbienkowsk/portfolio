import Image from "next/image";


export default function ProjectCard({imgPath, title, description}: {
    imgPath: string,
    title: string,
    description: string
}) {
    const PROJECT_CARD_WIDTH = 450;
    const PROJECT_CARD_HEIGHT = Math.floor(.67 * PROJECT_CARD_WIDTH);
    return <div className="relative group">
        <Image src={imgPath}
               alt="Image depicting a chessboard linking to a chess project."
               width={PROJECT_CARD_WIDTH}
               height={PROJECT_CARD_HEIGHT}
               className="rounded-xl border-text_primary border-2 group-hover:scale-110 duration-200 group-hover:opacity-15"></Image>
        <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 delay-200 w-full h-full text-center">
            <h1 className="text-3xl pt-6 bold">{title}</h1>
            <p className="text-xl">{description}</p>
            <button className="mt-10 hover:text-on_hover duration-200 text-2xl">Check it out</button>
        </div>
    </div>
}