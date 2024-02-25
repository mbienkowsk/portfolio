import Link from "next/link";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";

export default function Navbar() {
    const ICON_SIZE = 30
    // return <nav className={"flex justify-between w-full text-gray-400 fixed bg-background"}>
    //     <Link href="https://github.com/mbienkowsk"
    //           className="text-xl p-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover duration-200">github</Link>
    //     <Link href="https://www.linkedin.com/in/m-bienkowski/"
    //           className="text-xl p-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover duration-200">linkedin</Link>
    //     <Link href="mailto:bienkowski.maksym@gmail.com"
    //           className="text-xl p-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover duration-200">mail</Link>
    // </nav>

    return <nav className={"flex gap-8 text-gray-400 fixed bg-background"}>
        <Link href="https://github.com/mbienkowsk"
              className="text-xl px-6 pt-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover duration-200"><FontAwesomeIcon
            icon={faGithub} width={ICON_SIZE}/></Link>
        <Link href="https://www.linkedin.com/in/m-bienkowski/"
              className="text-xl px-6 pt-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover duration-200"><FontAwesomeIcon
            icon={faLinkedin} width={ICON_SIZE}/></Link>
        <Link href="mailto:bienkowski.maksym@gmail.com"
              className="text-xl px-6 pt-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover duration-200 group">
            <FontAwesomeIcon className="group-hover:hidden group-hover:opacity-0" icon={faEnvelope}
                             width={ICON_SIZE + 3}/>
            <FontAwesomeIcon className="hidden group-hover:block" icon={faEnvelopeOpen} width={ICON_SIZE}/>
        </Link>
    </nav>
}
