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

            <div className="comapny-holder-xl clients">
                <Spotify w={140} />
                <Slack w={121} />
                <DropBox w={169} />
                <Zoom w={98} />
            </div>

            <div className="comapny-holder-md clients">
                <Spotify w={100} />
                <Slack w={75} />
                <DropBox w={100} />
                <Zoom w={100} />
            </div>

            <div className="comapny-holder-sm clients">
                <Spotify w={70} />
                <Slack w={60} />
                <DropBox w={80} />
                <Zoom w={49} />
            </div>

        </div>
    );
};

export default TrustedCompanys;