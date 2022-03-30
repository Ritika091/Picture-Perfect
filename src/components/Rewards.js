import Footer from "./Footer";
import Navbar from "./Navbar";
import Linkout from '../assets/link-out.png'
import add from '../assets/Group.png'
import {rewards} from './data'
import Img1 from '../assets/image 64.png'
const Rewards = () => {
    return ( 
        <main>
                 <Navbar route1 = 'Explore' route2 = 'Rankings' route3 = 'Rewards'/>

            <div className="rewards">
                <div className="rewards_heading">
                    <h1>Picture Perfect Rewards</h1>
                    <span><img src={Linkout} alt="" />&nbsp;&nbsp;Buy APE</span>
                    <span><img src={add} alt="" />&nbsp;&nbsp;Add APE to MetaMask</span>
                </div>
                <p>Claim your APE rewards here.</p>
            </div>

            <div className="rewards_content">
                <div className="rewards_section">
                    <div className="reward_border">
                       <div className="box_content">
                       <h4>NFT Listing</h4>
                       <p className="boxp">Up to 43k APE</p>
                       <p className="boxp2">By listing NFTs on PP market, you earn NFT Listing reward in APE tokens. Snapshots are taken at 00:00 UTC daily. Rewards are calculated based on the latest snapshot, and the distribution takes another 12~18 hours. Read the docs for more details.</p>
                       </div>
                    </div>

                    <p>NFT LISTING REWARDS (APE)</p>
                    <input type="text" placeholder="0.0" />
                    <br />
                    <button>Collect</button>
                    <p>Claiming will be paused between 10:00am and 13:00pm every day for preview!</p>
                    <div className="rewards_table">
                        <div className="rewards_table_row">
                        <p>SNAPSHOT AT</p>
                        <p>NEXT DISTRIBUTION</p>
                        <p>COLLECTED TO DATE</p>
                        </div>

                        <div className="rewards_table_row2">
                        <p>Everyday 01:00</p>
                        <p>-</p>
                        <p>38 APE</p>
                        </div>
                    </div>

                    <div className="rewards_box" >{
             rewards.map(data=>(
            <div className="rewards_container">
                <img src={data.image} alt="" className="rewimg"/>
                <p id="rewards_name">{data.name}</p>
                <p className={data.class}>{data.type}</p>
              <img src={Img1} alt="" />
              <h4>{data.price}
            <p className="rewardp">21.3.2022 </p> </h4>
            </div>
             ))}
        </div>
                </div>

                <div className="rewards_section" id="rewards_sec">
                    <div className="reward_border">
                    <div className="box_content">
                       <h4 id="stakeape"> APE Staking</h4>
                       <p className="boxp">86% APY</p>
                       <p className="boxp2">You earn market fee rewards in APE tokens. 100% of the market fees are allocated to the APE staking pool, and 20% of the total APE supply will be rewarded within 720 days. Read the docs for more details.</p>
                       </div>
                    </div>

                    <p>STAKE (APE)</p>
                    <input type="text" placeholder="0.0" />
                    <br />
                    <h4>0 APE IN WALLET: 347</h4>
                    <button>Stake</button>

                    <p>SHARED MARKET FEE (APE)</p>
                    <input type="text" placeholder="0.0" />
                    <br />
                    <h4>APE HARVESTED: 12</h4>
                    <button>Harvest</button>

                    <p>UNSTAKE (APE)</p>
                    <input type="text" placeholder="0.0" />
                    <br />
                    <h4 className="unstakeh4">YOUR STAKE (COMPOUNDING): 50</h4>
                    <button>Unstake</button>
                    </div>




            </div>



        <Footer/>
        </main>
     );
}
 
export default Rewards;