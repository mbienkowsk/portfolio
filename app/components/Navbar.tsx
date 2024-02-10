import Link from "next/link";

export default function Navbar() {
    return <nav className="flex pb-10 justify-between w-full text-gray-400">
        <button className="p-6 hover:bg-gray-700 rounded-b w-full"><Link href="/#about" className="text-5xl">About me</Link></button>
        <button className="p-6 hover:bg-gray-700 rounded-b w-full"><Link href="/#projects" className="text-5xl">Projects</Link></button>
        <button className="p-6 hover:bg-gray-700 rounded-b w-full"><Link href="/#cv" className="text-5xl p-6">CV</Link></button>
        <button className="p-6 hover:bg-gray-700 rounded-b w-full"><Link href="/#contact" className="text-5xl">Contact me</Link></button>
    </nav>
}