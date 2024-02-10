import Image from "next/image";


export default function Home() {
    const ICON_SIZE = 150;
    return (
        <main>
            <h1 id="top" className="text-6xl">Hi! I&apos;m Maksym Bieńkowski. Welcome to my website!</h1>
            <h2 id="about" className="text-6xl">About me</h2>
            <div>
                <div className="flex gap-20">

                    <p className="text-3xl w-1/2">I&apos;m a second-year Computer Science student
                        at the Warsaw University of Technology. Compsci wise, I&apos;m very keen on AI, frontend
                        development and the theoretical side of things - algorithms, data structures and clever
                        solutions to problems. Apart from that, I love cooking,
                        rock climbing and fishing.
                    </p>

                    <div className="flex flex-col">
                        <h3 className="text-4xl">What I&apos;m good at</h3>
                        <div className="flex">
                            <Image src={"/Python-Dark.svg"} alt="python skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/CPP.svg"} alt="CPP skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/React-Dark.svg"} alt="React skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/Bash-Dark.svg"} alt="Bash skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                        </div>
                        <div className="flex">
                            <Image src={"/TypeScript.svg"} alt="TS skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/HTML.svg"} alt="HTML skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/Linux-Dark.svg"} alt="Linux skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/Git.svg"} alt="Git skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                        </div>
                        <div className="flex">
                            <Image src={"/CSS.svg"} alt="CSS skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/NextJS-Dark.svg"} alt="Next skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                        </div>
                    </div>
                </div>
            </div>
            <h2 id="projects" className="text-6xl">Projects</h2>
            <h2 id="contact" className="text-6xl">Let&apos;s get in touch!</h2>
        </main>
    )
}

