import "./Footer.css";
import FooterLinkBox from "@/components/FooterLinkBox";

const Footer = () => {

    const links1 = [
        { txt: "Guides", href: "/" },
        { txt: "Blog", href: "/" },
        { txt: "Cuistomer Stories", href: "/" },
        { txt: "Glossery", href: "/" },
    ]
    const links2 = [
        { txt: "About Us", href: "/" },
        { txt: "Careers", href: "/" },
        { txt: "Partners", href: "/" },
        { txt: "Contact Us", href: "/" },

    ]
    const links3 = [
        { txt: "LinkedIn", href: "/" },
        { txt: "Facebook", href: "/" },
        { txt: "Instagram", href: "/" },
        { txt: "Twitter", href: "/" },

    ]

    return (
        <footer>
            <div className="fooWrapper">
                <div className="fooLogo">
                    <h1>Digital Agency</h1>
                    <p>Building digital products, brands & experience</p>
                </div>

                <FooterLinkBox links={links1} heading={"Resources"} />
                <FooterLinkBox links={links2} heading={"Company"} />
                <FooterLinkBox links={links3} heading={"Social Media"} />
            </div>
            <p>© Matheus. Todos os direitos reservados</p>
        </footer>
    );
};

export default Footer;