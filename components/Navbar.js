import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/undraw.svg' alt="Logo" width={128} height={77}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
    );
}
