
import Ethereum from '../assets/ethereum.png'
import ApolloChar from '../assets/ApolloChar.png'
import Verified from '../assets/verified.png'

import { explore } from './data'
import Filter from '../assets/filter.png'
import DownArrow from '../assets/downArrow.png'
import Tiles from '../assets/tileview.png'
import Tile from '../assets/tile.png'
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
        <div className="filtering">
        <div className="activities">
        <h2>Explore &nbsp; &nbsp;&nbsp;</h2>
        <h3>Activities &nbsp; &nbsp;&nbsp;</h3>
        <p>138,075 items listed &nbsp; &nbsp;&nbsp;&nbsp;</p>
        <img src={Filter} alt="" />
        <h2 style={{    marginLeft: '26rem'}}>Recently Listed</h2>
        <img src={DownArrow} alt="" id='down'/>
        <img src={Tiles} alt="" className='tiles'/>
        <img src={Tile} alt="" className='tiles'/>
      
    </div>
    <div className="active_types">
   
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
      <img src={Ethereum} alt="" />
      <span className='ethval'>ETH 9.31</span>
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
      <img src={Ethereum} alt="" />
      <span className='ethval'>ETH 9.31</span>
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
      <img src={Ethereum} alt="" />
      <span className='ethval'>ETH 9.31</span>
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