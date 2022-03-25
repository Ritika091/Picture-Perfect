import HeaderBanner from '../assets/headerbanner.png'
import BannerExt from '../assets/headerbannerExt.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div className="Header">
      <div className="Header_content">
      <h1>Discover, collect, and sell Timeless NFTs</h1>
      <p>The world’s first and largest digital marketplace for crypto collectibles and non- fungible tokens (NFTs). </p>
      <div className="headBtn">
    <Link to = '/explore'> <button className='exploreBtn'>Explore</button></Link> 
      <span> Create NFTs</span>
      </div>
      <div className="stats">
<div className='art'>
<h1>35m+</h1>
<p>Artwork</p>
</div>
<div className='auc'>
<h1>18m+</h1>
<p>Auctions</p>
</div>
<div className='artist'>
<h1>500k+</h1>
<p>Artists</p>
</div>
</div>
      </div>
      <div className="Header_banner">
    
      <img src={HeaderBanner} alt="" />
     
    
      <img src={BannerExt} alt="" className='extended'/>
      
      </div>
      
        </div>
     );
}
 
export default Header;