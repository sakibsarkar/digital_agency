import "./index.css";
import Image from "next/image";
import { Arrow } from "@/utils/icons/Arrow";

const FlexContent = ({ heading, content, img, direction }) => {
    const flex_dir = direction || "row"
    const special = flex_dir === "row-reverse"
    return (
        <div style={{ flexDirection: flex_dir }} className="hero-flex">

            <div>
                <Image alt="vector image" width={"450px"} height={"450px"} src={img} />
            </div>

            <div className="hero-content">
                <h1>{heading}</h1>
                <p>{content}</p>

                <div className="arrow">
                    <Arrow />
                </div>
            </div>

        </div>
    );
};

export default FlexContent;