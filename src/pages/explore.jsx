import ExploreCards from "../components/ExploreCards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Explore = () => {
    return ( 
       <>
       <Navbar route1 = 'Explore' route2 = 'Rankings' route3 = 'Rewards'/>
     <ExploreCards/>
       <Footer/>
       </>
     );
}
 
export default Explore;