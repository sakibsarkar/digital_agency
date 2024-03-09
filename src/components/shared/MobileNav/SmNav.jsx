"use client";
import "./index.css";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TiThMenu } from "react-icons/ti";
import { Menu } from "@/utils/icons/Menu";
import { navLinks } from "@/utils/mockData/NavLinks";

const SmNav = () => {
    const [show, setshow] = useState(false);
    const links = navLinks()

    return (
            <nav className="navSm">
                <div className="logo">
                    <Link href={"/"}>Digital Agency</Link>
                </div>
                <button onClick={() => setshow(true)}><Menu /></button>
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
