import "./Navbar.css";
import Link from "next/link";
import { navLinks } from "@/utils/mockData/NavLinks";

const Navbar = () => {
    const links = navLinks()
    return (
        <nav>
            <div className="logo">
                <Link href={"/"}>Digital Agency</Link>
            </div>


            <ul>
                {
                    links?.map((link, i) => <li key={i}>
                        <Link href={link.text} className="txtPrimary">{link.text}</Link>
                    </li>)
                }
            </ul>

        </nav>

    );
};

export default Navbar;