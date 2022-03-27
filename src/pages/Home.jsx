import '../App.css';
import Arrow from '../assets/arrow.png'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Ecosystem from '../components/Ecosystem';
import TopNFT from '../components/TopNFT';
import '../components/Component.css'
import SassyChar from '../assets/SassyChar.png'
import SatisfyingChar from '../assets/SatisfyingChar.png'
import ApolloChar from '../assets/ApolloChar.png'
import Apollo from '../assets/apollo.png'
import Sassy from '../assets/sassy.png'
import Satisfying from '../assets/sastisfying.png'
import ExpCollection from '../components/ExpCollection';
import Jerome from '../assets/jerome.png';
import Cody from '../assets/cody.png';
import Jhones from '../assets/jhones.png';
import Footer from '../components/Footer';
import Collections from '../components/Collections'
import TopSeller from '../components/TopSellerContent'
import TopSellers from '../components/TopSellers'


function Home() {
  return (
  <main>
  <Navbar route1 = 'Market' route2 = 'Features' route3 = 'Community'/>
  <Header/>
  <div className="NFT_Head">
        <div className='left_head'>
        <p>Top NFT’s now</p>
        </div>
        <div className='right_head'>
        <div>
        <p> View all</p>
        </div>
        <div>
   <img src={Arrow} alt="" />
   </div>
        </div>
        </div>
        <div className="NFTLoop">
  <TopNFT title = 'Apollo Eth #1289 NFT' hours = '18' mins = '25' secs = '44' image = {ApolloChar} banner =  {Apollo}/>
  <TopNFT title = 'Sassy Bull #1169 Art' hours = '09' mins = '15' secs = '23' image = {SassyChar} banner = {Sassy}/>
  <TopNFT title = 'Satisfying 3D Art' hours = '23' mins = '32' secs = '56' image = {SatisfyingChar} banner = {Satisfying}/>
  </div>
  <Ecosystem/>
  <Collections/>
  <div className="NFT_Head">
        <div className='left_head'>
        <p>Explore Collections</p>
        </div>
        <div className='right_head'>
        <div>
        <p> View all</p>
        </div>
        <div>
   <img src={Arrow} alt="" />
   </div>
        </div>
        </div>
        <div className="collectionLoop">
        <section>
  <ExpCollection image = {Jhones} tag = '@jhonartist' follower = '125' following = '256' art = '129' name = 'Jhones Nickey'/>
  </section>
  <section>
  <ExpCollection image = {Cody} tag = '@codyfishe' follower = '356' following = '456' art = '89' name = 'Cody Fisher'/>
  </section>
  <section>
  <ExpCollection image = {Jerome} tag = '@jeromebt' follower = '546' following = '789' art = '54'  name = 'Jerome Bell'/>
  </section>
 
  </div>
  <TopSeller/>
  <TopSellers/>
  
  <Footer/>
 
  </main>
  );
}

export default Home;
