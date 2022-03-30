import Footer from "../components/Footer";
import Newpage from "../components/Newpage";
import Navbar from "../components/Navbar";
const NewPages = () => {
    return ( 
        <main>
         <Navbar route1 = 'Explore' route2 = 'Rankings' route3 = 'Rewards'/>
        <Newpage/>
        <Footer/>
        </main>
     );
}
 
export default NewPages;