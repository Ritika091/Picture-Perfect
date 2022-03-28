
import ApolloChar from '../assets/ApolloChar.png'
import Verified from '../assets/verified.png'

import { explore } from './data'
import Filter from '../assets/filter.png'
import DownArrow from '../assets/downArrow.png'
import Tiles from '../assets/tileview.png'
import Tile from '../assets/tile.png'
import Ape from '../assets/ape.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const ExploreCards = () => {
    return ( 
        <>
        <div className="expl">
        <div className="Explore_heading">
        <div>
        <h1>List Your NFTs and Get Rewarded</h1>
        <p>Listing rewards for reasonable prices. Market fee rebates for items sold.</p>
        </div>
        <div style={{marginLeft: 'auto'}}>
        <button className='ImportBtn'>Import</button>
        </div>
        </div>
        </div>
        <div className="filter_Head">
        <div className="filter_left">
      <Link to = '/explore'> <h2> Explore</h2></Link> 
     <Link to = '/explore/activities'><h2 id='ex'>Activities</h2></Link> 
        <p>138,075 items listed</p>
        <img src={Filter} alt="" />
        </div>
       <div className="filter_right">
       <h2>Recently Listed</h2>
       <img src={DownArrow} alt="" className='filter_down'/>
       <img src={Tiles} alt="" className='filter_tiles'/>
       <img src={Tile} alt="" className='filter_tiles'/>
       </div>
        </div>
        <div className="ExploreCards">
        {
explore.map(data => (
        <div className="NFT_cards">
        <div className="Explore_Images">
        <img src={data.image} alt="" />
        </div>
      <div className="Explore_content">
      <div className="Explore_head">
      <p>Apollo Eth #1289 NFT</p>
      <div className="userTag">
      <img src={ApolloChar} alt="" />
        <span className='exp_tag'>@jhonartist</span>
        <img src={Verified} alt="" className='verify'/>
      <p></p>
      </div>
      </div>
      <div className="explore_eth">
      <div>
      <img src={Ape} alt="" />
      <span className='ethval'>APE 9.31</span>
      </div>
      <div>
      <button>Place Bid</button>
      </div>
      </div>
      
     
      </div>
    
      
        </div>
        ))
}
        </div>
        <div className="ExploreCards">
        {
explore.map(data => (
        <div className="NFT_cards">
        <div className="Explore_Images">
        <img src={data.image} alt="" />
        </div>
      <div className="Explore_content">
      <div className="Explore_head">
      <p>Apollo Eth #1289 NFT</p>
      <div className="userTag">
      <img src={ApolloChar} alt="" />
        <span className='exp_tag'>@jhonartist</span>
        <img src={Verified} alt="" className='verify'/>
      <p></p>
      </div>
      </div>
      <div className="explore_eth">
      <div>
      <img src={Ape} alt="" />
      <span className='ethval'>APE 9.31</span>
      </div>
      <div>
      <button>Place Bid</button>
      </div>
      </div>
      
     
      </div>
    
      
        </div>
        ))
}
        </div>
        <div className="ExploreCards">
        {
explore.map(data => (
        <div className="NFT_cards">
        <div className="Explore_Images">
        <img src={data.image} alt="" />
        </div>
      <div className="Explore_content">
      <div className="Explore_head">
      <p>Apollo Eth #1289 NFT</p>
      <div className="userTag">
      <img src={ApolloChar} alt="" />
        <span className='exp_tag'>@jhonartist</span>
        <img src={Verified} alt="" className='verify'/>
      <p></p>
      </div>
      </div>
      <div className="explore_eth">
      <div>
      <img src={Ape} alt="" />
      <span className='ethval'>APE 9.31</span>
      </div>
      <div>
      <button>Place Bid</button>
      </div>
      </div>
      
     
      </div>
    
      
        </div>
        ))
}

        </div>
        <p className='load'>Loading more...</p>
        </>
     );
}
 
export default ExploreCards;