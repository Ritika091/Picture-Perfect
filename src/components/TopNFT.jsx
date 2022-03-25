

import Verified from '../assets/verified.png'
import Ethereum from '../assets/ethereum.png'

const TopNFT = (props) => {
    return ( 
        <>
        
        <div className="TopNFT">
        <div className="NFT_image">
        <img src={props.banner} alt="" />
        </div>
        <div className="NFT_content">
        <div className="heads">
        <div className="NFT_title">
        <p>{props.title}</p> 
        <div className="userName">
        <img src={props.image} alt="" />
        <span>@jhonartist</span>
        <img src={Verified} alt="" className='verify'/>
        </div>
        <h4>Reserve Price</h4>
        <div className="eth">
        <img src={Ethereum} alt="" />
        <span style={{ fontFamily: "'Orbitron', sans-serif", fontWeight:'600'}}>ETH 9.31</span>
        <span style={{fontWeight:'100'}}>($29,8846)</span>

        </div>
        </div>
        <div className="auc_ends">
        <p>Auction Ends in</p>
        <div className="auc_dur">
      <h1>{props.hours} &nbsp; &nbsp; {props.mins} &nbsp; &nbsp; {props.secs}</h1>
      <p>Hours &nbsp; &nbsp; &nbsp; &nbsp; Mins &nbsp; &nbsp;  &nbsp; &nbsp; Secs</p>
        </div>
        <button className='bidBtn'>Place Bid</button>
        </div>
        </div>
        </div>
        </div>
        </>
     );
}
 
export default TopNFT;