import "./Banner.css";
import ButtonPrimary from "../button-primary";
import Image from "next/image";
import TrustedCompanys from "../TustedCompany";
import teamImg from "../../../public/images/business-people-discussing-business-idea.png";

const Banner = () => {
    return (
        <div className="banner-wrapper">

            <div className="contentWrapper">
                <div className="banner-left">
                    <h1>Building digital products, brands & experience</h1>
                    <p>Digital Agency is your online team mangement tool that easy and prompt</p>
                    <ButtonPrimary>Contact Us</ButtonPrimary>
                </div>

                <div className="banner-right">
                    <Image alt="team image" width={"450px"} height={"450px"} src={teamImg} />
                </div>
            </div>
            <TrustedCompanys />

        </div>
    );
};

export default Banner;