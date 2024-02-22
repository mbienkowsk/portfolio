import Link from "next/link";

export default function Navbar() {
    return <nav className="flex justify-between w-full text-gray-400 fixed bg-background">
        <Link href="/#about"
              className="text-xl p-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover">ABOUT
            ME</Link>
        <Link href="/#projects"
              className="text-xl p-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover">PROJECTS</Link>
        <Link href="/#resume"
              className="text-xl p-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover">RESUME</Link>
        <Link href="/#contact"
              className="text-xl p-6 hover:bg-gray-700 rounded-b w-full text-center hover:text-on_hover">CONTACT</Link>
    </nav>
}