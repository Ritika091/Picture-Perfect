import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Chicks from "../components/Chicks";
const CryptoChicks = () => {
    return ( 
        <>
        <Navbar route1 = 'Explore' route2 = 'Rankings' route3 = 'Rewards'/>
        <Chicks/>
        <Footer/>
        </>
     );
}
 
export default CryptoChicks;