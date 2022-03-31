import React, { useState } from 'react'
import Filter from '../assets/filter.png'
import Img1 from '../assets/image 64.png'
import list from '../assets/list.png'
import cross from '../assets/cross.png'
import bag from '../assets/bag.png'
import {activity} from './data'
import { Link } from 'react-router-dom'
import Down from '../assets/downArrow.png'
const Newpage = () => {
    const[more, setMore] = useState(false);
    return ( 
        <main>
    

        <div className="activities" >
            <Link to='/explore'><h2>Explore &nbsp; &nbsp;&nbsp;</h2></Link>
          <Link to='/explore/activities'> <h3>Activities &nbsp; &nbsp;&nbsp;</h3></Link> 
            <p>138,075 items listed &nbsp; &nbsp;&nbsp;&nbsp;</p>
           <span><img src={Filter} alt=""  />&nbsp; &nbsp;&nbsp;</span> 
            <button className='activities_btn'><img src={list} alt="" />Listing</button>&nbsp;
           <span className='cross'><img src={cross} alt="" /></span> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='activities_btn'><img src={bag} alt="" />Sale</button>&nbsp; 
            <span className='cross'><img src={cross} alt="" /></span> 
        </div>

        <div className="activity_box">{
             activity.map(data=>(
            <div className="activity_container">
                <img src={data.icon} alt="" />
                <h4 id='res_sale'>{data.type}</h4>
                <img src={data.image} alt="" className={data.class}/>
                <p>{data.name}</p>
              <span><img src={Img1} alt="" className='actprice' />&nbsp;&nbsp;{data.price}</span>  
              <p className='actp'>{data.from} <br /> <br />From</p>
              <p className='actp'>- <br /> <br />To</p>
              <p className='actp'>{data.time} <br /> <br />Time</p>
              {more === false?
           <p id='mor'onClick={() => setMore(!more)} > More<img src={Down} alt="" /></p> 
           :
           <>
           <p id='mor'onClick={() => setMore(!more)} > More<img src={Down} alt="" /></p> 
           
           <div className="res_drop" onClick={() => setMore(!more)} >
             <div>
         <p>0x60cC...1376 <br />
From</p>
<br />
<br />
<p>28 seconds ago
  <br />
Time</p>
         </div>
           </div>
        
           </>
              }
            </div>
             ))
}
        <p className='load'>Loading more...</p>
        </div>


       
        </main>
     );
}
 
export default Newpage;