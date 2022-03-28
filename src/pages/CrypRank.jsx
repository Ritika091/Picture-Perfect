import CryptoChickRanking from "../components/CryptoChickRanking";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const CrypRank = () => {
    return (  
        <>
          <Navbar route1 = 'Explore' route2 = 'Rankings' route3 = 'Rewards'/>
        <CryptoChickRanking/>
        <Footer/>
        </>
    );
}
 
export default CrypRank;