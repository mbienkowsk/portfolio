import Image from "next/image";


export default function Home() {
    const ICON_SIZE = 150;
    return (
        <main className="m-64">
            <h1 id="top" className="text-6xl pb-10 text-center">Hi! I&apos;m Maksym Bieńkowski</h1>
            <div>
                <h2 id="about" className="text-6xl pb-10 pt-24"> About me</h2>
                <div className="flex flex-col gap-20">
                    <p className="text-3xl">I&apos;m a second year computer science student at the Warsaw University
                        of Technology. Passionate about all aspects of computer science, from low-level assembly
                        programming, web development, to Artificial Intelligence, in which I plan to specialize during
                        my degree, I think of myself as a versatile, all-round developer, ready to take on tasks in any
                        /. In my free time I enjoy cooking, fishing and growing my houseplant collection.
                    </p>

                    <div className="flex flex-col">
                        <h3 className="text-4xl">Some of the technologies I&apos;ve worked with</h3>
                        <div className="flex gap-16">
                            <Image src={"/Python-Dark.svg"} alt="python skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/CPP.svg"} alt="CPP skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/React-Dark.svg"} alt="React skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/Bash-Dark.svg"} alt="Bash skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/CSS.svg"} alt="CSS skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                        </div>
                        <div className="flex gap-16">
                            <Image src={"/TypeScript.svg"} alt="TS skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/HTML.svg"} alt="HTML skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/Linux-Dark.svg"} alt="Linux skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/Git.svg"} alt="Git skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                            <Image src={"/NextJS-Dark.svg"} alt="Next skill image" width={ICON_SIZE}
                                   height={ICON_SIZE} className="p-4"/>
                        </div>
                    </div>
                </div>
            </div>
            <h2 id="projects" className="text-6xl pb-10 pt-24">Projects</h2>
            <h2 id="resume" className="text-6xl pb-10 pt-24">Check out my resume!</h2>
            <div className="text-center mb-10">
                <a className="py-8 px-20 m-10 rounded-md bg-secondary text-3xl" href="/main.pdf">Grab a
                    copy</a>
            </div>

            <h2 id="contact" className=" text-6xl pt-24 pb-10">Let&apos;s get in touch!</h2>
        </main>
    )
}

