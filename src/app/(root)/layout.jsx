import Circle from "@/components/circle-gradient";
import Footer from "@/components/shared/Navbar/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

const RootLayout = ({ children }) => {
    return (
        <>
            <div className="rootWrapper">
                <div className="top-aura">
                    <Circle />
                </div>
                <Navbar />
                {children}
            </div>
            <Footer />
        </>
    );
};

export default RootLayout;