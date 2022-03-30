import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import NewRankings from '../components/NewRanking'
const Rankings = () => {
    return (
        <main>
            <Navbar route1='Explore' route2='Rankings' route3='Rewards' />
           <NewRankings/>
            <Footer />
        </main>
    );
}

export default Rankings;