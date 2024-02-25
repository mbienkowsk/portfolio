import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";
import AccordionElement from "@/app/components/AccordionElement";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";


export default function Home() {
    const SKILL_ICON_SIZE = 150;
    const ICON_SIZE = 30;
    const aboutSection = <div>
        <div className="flex flex-col gap-20">
            <p className="text-3xl">I&apos;m a second year computer science student at the Warsaw University
                of Technology. Passionate about all aspects of computer science, from low-level assembly
                programming, web development, to Artificial Intelligence, in which I plan to specialize during
                my degree, I think of myself as a versatile, all-round developer, ready to take on tasks in any
                domain. In my free time I enjoy cooking, fishing and growing my houseplant collection.
            </p>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <h3 className="text-4xl text-center">Some of the technologies I&apos;ve worked with:</h3>
                    <div className="flex gap-16">
                        <Image src={"/Python-Dark.svg"} alt="python skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                        <Image src={"/CPP.svg"} alt="CPP skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                        <Image src={"/React-Dark.svg"} alt="React skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                        <Image src={"/Bash-Dark.svg"} alt="Bash skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                        <Image src={"/CSS.svg"} alt="CSS skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                    </div>
                    <div className="flex gap-16">
                        <Image src={"/TypeScript.svg"} alt="TS skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                        <Image src={"/HTML.svg"} alt="HTML skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                        <Image src={"/Linux-Dark.svg"} alt="Linux skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                        <Image src={"/Git.svg"} alt="Git skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                        <Image src={"/NextJS-Dark.svg"} alt="Next skill image" width={SKILL_ICON_SIZE}
                               height={SKILL_ICON_SIZE} className="p-4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    const projectsSection = <div className="flex flex-col gap-16">
        <div className="flex gap-16 justify-center">
            <ProjectCard title="Desktop chess app"
                         description="C++ and Qt"
                         imgPath={"/chess.jpg"}
                         url="https://github.com/mbienkowsk/proi-chess"
            />
            <ProjectCard title="Course rating website"
                         description="CRA + Spring Boot, I was responsible for the frontend."
                         imgPath={"/courses-2.png"}
                         url="https://github.com/mGarbowski/pap-projekt"
            />
            <ProjectCard title="Intro to AI lab work"
                         description="Python implementations of essential AI concepts"
                         imgPath={"/nn.png"}
                         url={"https://github.com/Intro-to-AI-mbienkowsk"}
            />
        </div>
        <div className="flex gap-16 justify-center">
            <ProjectCard imgPath={"/parp.png"} title="Programming paradigms" description="Implementation of the same
                    puzzle game in smalltalk, prolog and haskell"
                         url="" //todo
            />
            <ProjectCard imgPath={"/form.png"} title="Autoform"
                         description="Python, selenium. Aims to automate registration for debating tournaments and more. In development"
                         url="https://github.com/mbienkowsk/autoform"
            />
            <ProjectCard imgPath={"/checkers.jpg"} title={"Checkers"}
                         description={"My first bigger python project - desktop checkers app with a pretty decent minimax bot"}
                         url="https://github.com/mbienkowsk/pipr-checkers"/>
        </div>
    </div>
    return (
        <main>
            <div className="grid">
                <h1 id="top" className={"text-6xl pt-64 pb-10 text-center "}>Maksym Bieńkowski</h1>
                <div className="flex justify-center">
                    <Link href="https://github.com/mbienkowsk"
                          className="px-6 pt-6 hover:bg-gray-700 rounded-b text-center hover:text-on_hover duration-200"><FontAwesomeIcon
                        icon={faGithub} width={ICON_SIZE}/></Link>
                    <Link href="https://www.linkedin.com/in/m-bienkowski/"
                          className="px-6 pt-6 hover:bg-gray-700 rounded-b text-center hover:text-on_hover duration-200"><FontAwesomeIcon
                        icon={faLinkedin} width={ICON_SIZE}/></Link>
                    <Link href="mailto:bienkowski.maksym@gmail.com"
                          className="px-6 pt-6 hover:bg-gray-700 rounded-b text-center hover:text-on_hover duration-200 group">
                        <FontAwesomeIcon className="group-hover:hidden group-hover:opacity-0" icon={faEnvelope}
                                         width={ICON_SIZE + 3}/>
                        <FontAwesomeIcon className="hidden group-hover:block" icon={faEnvelopeOpen} width={ICON_SIZE}/>
                    </Link>
                </div>
            </div>
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

