import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import FAQsection from "../FAQ/FAQsection";
import Feature from "../Feature/Feature";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-[92%] md:w-[85%] mx-auto">
                <Feature></Feature>
                <FAQsection></FAQsection>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;