import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";
import AccordionElement from "@/app/components/AccordionElement";


export default function Home() {
    const ICON_SIZE = 150;
    const aboutSection = <div>
        <div className="flex flex-col gap-20">
            <p className="text-3xl">I&apos;m a second year computer science student at the Warsaw University
                of Technology. Passionate about all aspects of computer science, from low-level assembly
                programming, web development, to Artificial Intelligence, in which I plan to specialize during
                my degree, I think of myself as a versatile, all-round developer, ready to take on tasks in any
                /. In my free time I enjoy cooking, fishing and growing my houseplant collection.
            </p>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <h3 className="text-4xl">Some of the technologies I&apos;ve worked with:</h3>
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
    </div>

    const projectsSection = <div className="flex flex-col gap-16">
        <div className="flex gap-16">
            <ProjectCard title="Desktop chess app"
                         description="C++ and Qt"
                         imgPath={"/chess.jpg"}/>
            <ProjectCard title="Course rating website"
                         description="CRA + Spring Boot, I was responsible for the frontend."
                         imgPath={"/courses-2.png"}
            />
            <ProjectCard title="Intro to AI lab work"
                         description="Python implementations of essential AI concepts"
                         imgPath={"/nn.png"}/>
        </div>
        <div className="flex gap-16">
            <ProjectCard imgPath={"/parp.png"} title="Programming paradigms" description="Implementation of the same
                    puzzle game in smalltalk, prolog and haskell"/>
            <ProjectCard imgPath={"/form.png"} title="Formfiller"
                         description="Python utility for quick event registration purposes:)"/>
        </div>
    </div>
    return (
        <main className="mx-64">
            <h1 id="top" className={"text-6xl pt-64 pb-10 text-center "}>Maksym Bieńkowski</h1>
            <AccordionElement title={"ABOUT ME"} content={aboutSection}/>
            <AccordionElement title={"PROJECTS"} content={projectsSection}/>
            <AccordionElement title={"RÉSUMÉ"} content={
                <div className="flex justify-center">
                    <a className={"text-4xl hover:text-on_hover duration-200"} href="/main.pdf">grab a
                        copy</a>
                </div>
            }/>
            {/*<AccordionElement title={"LET'S GET IN TOUCH!"} content={<div>*/}
            {/*    <div className="flex justify-center">*/}
            {/*        <a className={"text-4xl hover:text-on_hover duration-200"}*/}
            {/*           href="mailto:bienkowski.maksym@gmail.com">If you&apos;d like to collaborate or have any*/}
            {/*            questions, feel free to email me:)</a>*/}
            {/*    </div>*/}
            {/*</div>}/>*/}
        </main>
    )
}

