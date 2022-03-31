import React, { useState } from 'react'
import arrow from '../assets/arrowdown ranking.png'
import Img1 from '../assets/image 64.png'
import {ranking} from './data';

import '../components/Component.css'
import { Link } from 'react-router-dom';
import Down from '../assets/arrow_down.png'
import Up from '../assets/arrow_up.png'
const NewRanking = () => {
    const[more, setMore] = useState(false);
    return ( 
        <main>
     


        <div className="activities" id='ranking'>
            <h3>Ranking &nbsp; &nbsp;&nbsp;&nbsp;</h3>
            <p>With trading volume, floor price and etc., you can find the most trading NFTs here.</p>
            <span>Last 7 days <img src={arrow} alt="" /></span>
            
        </div>

        <div className="ranking_box">{
             ranking.map(data=>(
            <Link to='/rankings/Cryptochicks'>
                <div className="ranking_container" tabindex="0">
                    
                <h4>{data.num}</h4> 
                <img src={data.image} alt="" className='rankimg'/> 
                <p className='rankname'>{data.name}</p>
              <p className={data.class}><img src={Img1} alt="" />{data.volume} <br /> <br /><span className='rankspan'>Volume</span> </p>
              <p id='responsive_rank_hide' className={data.class}><button className={data.class1}>{data.h}</button><br /> <br /><span className='rankspan'>24h %</span></p>
              <p id='responsive_rank_hide' className={data.class}><button className={data.class2}>{data.d}</button><br /> <br /><span className='rankspan'>7d %</span></p>
              <p id='responsive_rank_hide' className={data.class}><img src={Img1} alt="" />{data.floor} <br /> <br /><span className='rankspan'>Floor</span></p>
              <p id='responsive_rank_hide' className={data.class}>{data.holders} <br /> <br /><span className='rankspan'>Holders</span></p>
              <p id='responsive_rank_hide' className={data.class}>{data.items} <br /> <br /><span className='rankspan'>Items</span></p>
              
              {more === false?
           <p id='mor_rank'onClick={() => setMore(!more)} > More<img src={Down} alt="" /></p> 
           :
           <>
           <p id='mor_rank'onClick={() => setMore(!more)} > Less<img src={Up} alt="" /></p> 
          
           <div className="res_drop" onClick={() => setMore(!more)} >
           
             <div>
             
               <div className='newrank_responsive_div'>
               <p><button className={data.class1}>{data.h}</button><br /> <br /><span className='rankspan'>24h %</span></p>
              <p><button className={data.class2}>{data.d}</button><br /> <br /><span className='rankspan'>7d %</span></p>
         </div>
         <div className='newrank_responsive_div1'>
         <p><img src={Img1} alt="" />{data.floor} <br /> <br /><span className='rankspan'>Floor</span></p>
              <p id='rank_resp_holders'>{data.holders} <br /> <br /><span className='rankspan'>Holders</span></p>
              </div>
              <p id='rank_resp_p'>{data.items} <br /><br/> <span id='rank_resp_span' className='rankspan'>Items</span></p>
         </div>       
           </div>
           </>
              }
            </div>
            </Link>
             ))
}
        <p className='load'>Loading more...</p>
        </div>


      
        </main>
     );
}
 
export default NewRanking;