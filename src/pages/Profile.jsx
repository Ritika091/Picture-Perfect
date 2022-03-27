import ProfileForm from "../components/ProfileForm";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
const Profile = () => {
    return ( 
        <>
        <Navbar route1='Explore' route2='Rankings' route3='Rewards' />
        <ProfileForm/>
        <Footer/>
        </>
     );
}
 
export default Profile;