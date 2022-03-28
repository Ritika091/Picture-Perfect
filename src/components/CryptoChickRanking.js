import Sidearrow from '../assets/Arrow 1.png'

import Chevron from '../assets/Chevron.png'
import Rectangle from '../assets/Rectangle 22665.png'
import Reverse from '../assets/reverse.png'
import Share from '../assets/share.png'
import Fav from '../assets/heart.png'
import Flag from '../assets/flag.png'
import Bracket from '../assets/maximize.png'
import Filter from '../assets/filter.png'
import Img1 from '../assets/image 64.png'
import {cryptochickrank} from './data'
import Icon from '../assets/Ellipse 277 (1).png'
import Verified from '../assets/verified.png'
import Eye from '../assets/eye.png'



const CryptoChickRanking = () => {
    return ( 
        <main>
       
        <div className="crypto_ranking_nav">
        <img src={Sidearrow} alt="" />
            <div className='cryptonavinner'>
          <h4>Rankings</h4>
            <img src={Chevron} alt="" />
            <h4>Crypto.Chicks</h4>
            <img src={Chevron} alt="" />
            <h4>#7086</h4>
            </div>
        </div>

        <div className="crypto_ranking_mid">
            <div className="crypto_ranking_card">
                <div className='crypto_verified'>
                    <img src={Icon} alt="" className='cryptoIcon' />
                    <p>Crypto.Chicks</p>
                  <span><img src={Verified} alt="" /></span>  
                </div>
                <h1>Crypto.Bull #7086</h1>
                <div className='crypto_owned'>
                    <p>Owned by 0x801A...145D</p>
                    <span><img src={Fav} alt="" />&nbsp;&nbsp;0</span>
                    <span><img src={Eye} alt="" />&nbsp;&nbsp;25</span>
                </div>
                <h2>HIGHEST OFFER</h2>
                <div className="crypto_offer">
                   <span><img src={Img1} alt="" /></span> 
                    <h4>&nbsp;&nbsp;APE 9.31</h4>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;($29,8846)</p>
                    <button>Make offer</button>
                </div>
                <p id='cryptop'>Crypto.Chicks = 10000 gorgeous, proud, independent, and <br /> empowered girls</p>

                <div className="crypto_table">
                    <div className="crypto_row">
                        <p>CONTRACT ADDRESS</p>
                        <p>TOKEN ID</p>
                        <p>BLOCKCHAIN</p>
                        <p>TOKEN STANDARD</p>
                        <p>TOKEN INFO</p>
                        <p>CREATOR FEE</p>
                    </div>
                    <div className="crypto_row" id='row2'>
                        <p>0x1981…7e04</p>
                        <p>7086</p>
                        <p>Ethereum</p>
                        <p>TOKEN STANDARD</p>
                        <p>TOKEN INFO</p>
                        <p>CREATOR FEE</p>
                    </div>
                </div>

            </div>

            <div className="crypto_ranking_image">
                <img className='crypto_pic' src={Rectangle} alt="" />
                <div className="sym">
                    <img src={Reverse} alt="" />
                    <img src={Share} alt="" />
                    <img src={Fav} alt="" />
                    <img src={Flag} alt="" />
                    <img src={Bracket} alt="" />
                </div>
            </div>
        </div>

        <div className="activities" >
            <h3>Activities &nbsp; &nbsp;&nbsp;</h3>
            <h2>Offers &nbsp; &nbsp;&nbsp;</h2>
            <h2>Bids &nbsp; &nbsp;&nbsp;</h2>
           <span><img src={Filter} alt=""  />&nbsp; &nbsp;&nbsp;</span> 
        </div>

        
        <div className="activity_box" id='cryptobox' >{
             cryptochickrank.map(data=>(
            <div className="activity_container">
                <img src={data.icon} alt="" />
                <h4>{data.type}</h4>
                <img src={data.image} alt="" className={data.class}/>
                <p>{data.name}</p>
              <span><img src={Img1} alt="" className='actprice' />&nbsp;&nbsp;{data.price}</span>  
              <p className='actp'>{data.from} <br /> <br />From</p>
              <p className='actp'>- <br /> <br />To</p>
              <p className='actp'>{data.time} <br /> <br />Time</p>
             
            </div>
             ))
}
        </div>



      
        </main>
     );
}
 
export default CryptoChickRanking;