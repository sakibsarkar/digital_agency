import "./index.css";
import Link from "next/link";

const FooterLinkBox = ({ heading, links = [] }) => {

    return (
        <div className="linkBox">
            <h1>{heading}</h1>

            <div className="footerRoutes">
                {links?.map((link, i) => <Link href={link.href} key={i + link.txt}>{link.txt}</Link>)}
            </div>
        </div>
    );
};

export default FooterLinkBox;