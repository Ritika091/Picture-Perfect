import CryptoChickRanking from "../components/CryptoChickRanking";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const CrypRank = () => {
    return (  
        <main>
          <Navbar route1 = 'Explore' route2 = 'Rankings' route3 = 'Rewards'/>
        <CryptoChickRanking/>
        <Footer/>
        </main>
    );
}
 
export default CrypRank;