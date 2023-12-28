import Image from "next/image"
import logo from "../../public/assets/logo12.png"
import Link from "next/link"

const Navbar = () => {
    return (
        <header>
            <div className="p-4 bg-slate-100 flex items-center justify-between">
                <div className="flex items-center p-1">
                    <Image src={logo} width={60}></Image>
                    <h1 className="text-2xl font-extrabold">ArenaDev</h1>
                </div>
                <nav className="flex items-center gap-6">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact</Link>
                </nav>
                <div>
                    <Link href={"/signup"}>
                        <button className="p-1 rounded-3xl bg-emerald-400 shadow-2xl" type="submit">SignUp</button>
                    </Link>
                    <Link href={"/login"}>
                        <button className="p-1 rounded-3xl bg-emerald-100 shadow-2xl" type="submit">Login</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar