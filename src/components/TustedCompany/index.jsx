import "./index.css";
import { DropBox } from "@/utils/icons/DropBox";
import { Slack } from "@/utils/icons/Slack";
import { Zoom } from "@/utils/icons/Zoom";
import { Spotify } from "@/utils/icons/spotify";

const TrustedCompanys = () => {
    const companys = [Spotify, Slack, DropBox, Zoom]
    return (
        <div className="trust-holder">
            <p>Trusted by 4,000+ companies</p>
            <div className="comapny-holder">
                {companys.map((Comp, i) => <p key={i + "0"} className="companyIcon">
                    <Comp />
                </p>)}
            </div>
        </div>
    );
};

export default TrustedCompanys;