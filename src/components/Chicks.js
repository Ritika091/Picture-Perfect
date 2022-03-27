import ApolloChar from "../assets/ApolloChar.png";
import Verified from "../assets/verified.png";
import { explore } from "./data";
import Filter from "../assets/filter.png";
import DownArrow from "../assets/downArrow.png";
import Tiles from "../assets/tileview.png";
import Tile from "../assets/tile.png";
import Ape from "../assets/ape.png";
import Chick from "../assets/ChickImg.png";
import Discord from "../assets/discord.png";
import Twitter from "../assets/twitter.png";
import Telegram from "../assets/telegramicon.png";
import VerifiedBig from '../assets/VerifiedBig.png'
import Coll from '../assets/coll.png'
import Like from '../assets/Like.png'
import Tags from '../assets/tags.png'
import SideArrow from '../assets/sideArrow.png'
import Chevron from '../assets/Chevron.png'
const Chicks = () => {
  return (
    <div className="Chicks">
    <div className="chicks_heading">
    <div className="head_left">
    <img src={SideArrow} alt="" />
    </div>
    <div className="head_right">
    <div>
    <p>Rankings</p>
    </div>
    <div>
    <img src={Chevron} alt="" />
    </div>
    <div>
    <p>Crypto.Chicks</p>
    </div>
    </div>
    </div>
      <div className="Chick_head">
        <div className="Chick_logo">
          <div>
            <img src={Chick} alt="" />
          </div>
          <div className="handles">
            <div>
              <img src={Discord} alt="" />
            </div>
            <div>
              <img src={Twitter} alt="" />
            </div>
            <div>
              <img src={Telegram} alt="" />
            </div>
          </div>
        </div>
        <div className="about">
        <div className="about_name">
        <h1>Crypto.Chicks</h1>
        <img src={VerifiedBig} alt="" />
        </div>
        <br />
        <div className="about_content">
          <p>
            The Crypto Chicks is a collection developed to celebrate the unique,
            diverse beauty of all women around the world. This is the second
            generation of the Crypto Chick...
          </p>
         
          <p id="more">more</p>
          </div>
          <div className="coll_score">
          <div>
          <div className="Score">
       <div>
          <img src={Coll} alt="" />
          </div>
          <div style={{marginLeft:'1rem'}}>
          <h2>4.943</h2>
          <p>COLL. SCORE</p>
          </div>
          </div>
          </div>
          <div className="coll_right">
          <p>This collection is eligible for listing rewards..</p>
          <h2>more</h2>
          </div>
          </div>
        
          
        </div>
        <div className="stats_Head">
        <div className="statistics">
        <div className="statsLeft">
        <div>
        <h1>4.46k</h1>
        <p>Owners</p>
        </div>
        <div>
        <h1>107.51</h1>
        <p>Volume (APE)</p>
        </div>
        <p id="rewarded">List Your NFTs and Get Rewarded</p>
        </div>
        <div className="statsRight">
        <div>
        <h1>10k</h1>
        <p>Items</p>
        </div>
        <div>
        <h1>0.92</h1>
        <p>Floor (APE)</p>
        </div>
    <button className="rewardImport">Import</button>
        </div>
         
        <div className="stats_images">
        <img src={Like} alt="" />
        <img src={Tags} alt="" />
        </div>
        </div>
        </div>
      </div>
      <div className="filter_Head">
        <div className="filter_left">
          <h2> Explore</h2>
          <h2>Activities</h2>
          <p>138,075 items listed</p>
          <img src={Filter} alt="" />
        </div>
        <div className="filter_right">
          <h2>Recently Listed</h2>
          <img src={DownArrow} alt="" className="filter_down" />
          <img src={Tiles} alt="" className="filter_tiles" />
          <img src={Tile} alt="" className="filter_tiles" />
        </div>
      </div>
      <div className="ExploreCards">
        {explore.map((data) => (
          <div className="NFT_cards">
            <div className="Explore_Images">
              <img src={data.image} alt="" />
            </div>
            <div className="Explore_content">
              <div className="Explore_head">
                <p>Apollo Eth #1289 NFT</p>
                <div className="userTag">
                  <img src={ApolloChar} alt="" />
                  <span className="exp_tag">@jhonartist</span>
                  <img src={Verified} alt="" className="verify" />
                  <p></p>
                </div>
              </div>
              <div className="explore_eth">
                <div>
                  <img src={Ape} alt="" />
                  <span className="ethval">APE 9.31</span>
                </div>
                <div>
                  <button>Place Bid</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="ExploreCards">
        {explore.map((data) => (
          <div className="NFT_cards">
            <div className="Explore_Images">
              <img src={data.image} alt="" />
            </div>
            <div className="Explore_content">
              <div className="Explore_head">
                <p>Apollo Eth #1289 NFT</p>
                <div className="userTag">
                  <img src={ApolloChar} alt="" />
                  <span className="exp_tag">@jhonartist</span>
                  <img src={Verified} alt="" className="verify" />
                  <p></p>
                </div>
              </div>
              <div className="explore_eth">
                <div>
                  <img src={Ape} alt="" />
                  <span className="ethval">APE 9.31</span>
                </div>
                <div>
                  <button>Place Bid</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chicks;
