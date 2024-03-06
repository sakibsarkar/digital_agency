import Circle from "@/components/circle-gradient";
import Navbar from "@/components/shared/Navbar/Navbar";

const RootLayout = ({ children }) => {
    return (
        <div className="rootWrapper">
            <div className="top-aura">
                <Circle />
            </div>
            <Navbar />
            {children}
        </div>
    );
};

export default RootLayout;