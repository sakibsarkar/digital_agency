import "./index.css";
import ButtonPrimary from "../button-primary";
import Image from "next/image";
import support from "../../../public/images/customer-support.png";

const Support = () => {
    return (
        <section className="supportBox">
            <Image alt="support" src={support} height={"450px"} width={"450px"} />

            <div className="supportContent">
                <div className="suportDivider">
                    <h1>Be a part of the next big thing</h1>
                    <p>We work with Brans, Startups, to SMEs. Colaborate for more impact and growt</p>
                </div>
                <ButtonPrimary>Contact Us</ButtonPrimary>
            </div>
        </section>
    );
};

export default Support;