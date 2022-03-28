import React from 'react'
import Filter from '../assets/filter.png'
import Img1 from '../assets/image 64.png'
import list from '../assets/list.png'
import cross from '../assets/cross.png'
import bag from '../assets/bag.png'
import {activity} from './data'
import { Link } from 'react-router-dom'
const Newpage = () => {
    
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
        <p className='load'>Loading more...</p>
        </div>


       
        </main>
     );
}
 
export default Newpage;