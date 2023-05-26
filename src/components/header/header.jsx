import Link from "next/link"
import Image from "next/image"
export const Header = () => {
    return (
    <header className="header">
        <div className="content">
            <div className="topNav">
                <Link passHref href={`/`}>
                    <Image src={`/images/logo_black.png`} width={50} height={50} alt={`logo`}/>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link passHref href="/">Home</Link>
                        </li>
                        <li>
                            <Link passHref href="/events">Events</Link>
                        </li>
                        <li>
                            <Link passHref href="/about-us">About us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <p className="title">Lorem ipsum</p>
        </div>
    </header>
    )
}