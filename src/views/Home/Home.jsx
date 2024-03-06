import "./Home.css";
import Banner from "@/components/Banner/Banner";
import FlexContent from "@/components/flex-Add";
import Reviews from "@/components/Reviews";
import TrustedCompanys from "@/components/TustedCompany";
import img1 from "../../../public/images/designer-team-working-on-creative-design.png";
import img2 from "../../../public/images/businessman-analyzing-data.png";

const Home = () => {
    const heading1 = "Branding & Design system"
    const content1 = "Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"

    const heading2 = "Custome & Plugin Development"
    const content2 = "Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"


    return (
        <div>
            <Banner />
            <TrustedCompanys />

            <div className="heros">

                <div className="aura-gradient">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 547 1291" fill="none">
                        <g filter="url(#filter0_f_55_12)">
                            <path d="M985 645.5C985 833.001 833.001 985 645.5 985C457.999 985 306 833.001 306 645.5C306 457.999 457.999 306 645.5 306C833.001 306 985 457.999 985 645.5Z" fill="#8EADD5" fillOpacity="0.3" />
                        </g>
                        <defs>
                            <filter id="filter0_f_55_12" x="0" y="0" width="1291" height="1291" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="153" result="effect1_foregroundBlur_55_12" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <FlexContent heading={heading1} content={content1} img={img1} />
                <FlexContent heading={heading2} content={content2} img={img2} direction={"row-reverse"} />
            </div>

            <Reviews />

        </div>
    );
};

export default Home;