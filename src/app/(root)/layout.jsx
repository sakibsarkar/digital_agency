import Circle from "@/components/circle-gradient";
import Navbar from "@/components/shared/Navbar/Navbar";

const RootLayout = ({ children }) => {
    return (
        <div className="rootWrapper">
            <div style={{ position: "absolute", top: "0", left: "0", zIndex: "-5" }}><Circle /></div>
            <Navbar />
            {children}
        </div>
    );
};

export default RootLayout;