"use client";
import "./index.css";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TiThMenu } from "react-icons/ti";
import { navLinks } from "@/utils/mockData/NavLinks";

const SmNav = () => {
    const [show, setshow] = useState(false);
    const links = navLinks()

    return (
        <nav className="navSm">
            <button onClick={() => setshow(true)}><TiThMenu /></button>
            {
                show ?
                    <div className="magic">
                        <button onClick={() => setshow(false)}><RxCross2 /></button>

                        {
                            links?.map((link, i) => <Link key={i + "sm"}
                                href={link.text} className="txtPrimary">
                                {link.text}
                            </Link>
                            )
                        }
                    </div>
                    :
                    ""
            }
        </nav>
    );
};

export default SmNav;
