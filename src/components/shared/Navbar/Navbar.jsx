"use client";
import "./Navbar.css";
import Link from "next/link";
import SmNav from "../MobileNav/SmNav";
import { useEffect, useState } from "react";
import { navLinks } from "@/utils/mockData/NavLinks";

const Navbar = () => {
    const links = navLinks()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset; // Use window.pageYOffset instead of window.scrollY
            if (offset > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    return (
        <>
            <div className={scrolled ? "scroll navWrapp" : ""}>
                <nav className={'deskNav'}>
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
            </div>

            <SmNav />
        </>

    );
};

export default Navbar;