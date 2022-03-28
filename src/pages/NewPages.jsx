import Footer from "../components/Footer";
import Newpage from "../components/Newpage";
import Navbar from "../components/Navbar";
const NewPages = () => {
    return ( 
        <>
         <Navbar route1 = 'Explore' route2 = 'Rankings' route3 = 'Rewards'/>
        <Newpage/>
        <Footer/>
        </>
     );
}
 
export default NewPages;