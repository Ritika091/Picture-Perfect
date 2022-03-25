
import Filter from '../assets/filter.png'
import Img1 from '../assets/topseller_img.png'
import {ranking} from './data'
const Newpage = () => {
    return ( 
        <main>
    

        <div className="activities">
            <h2>Explore &nbsp; &nbsp;&nbsp;</h2>
            <h3>Activities &nbsp; &nbsp;&nbsp;</h3>
            <p>138,075 items listed &nbsp; &nbsp;&nbsp;&nbsp;</p>
            <img src={Filter} alt="" />
        </div>

        <div className="activity_box">{
             ranking.map(data=>(
            <div className="activity_container">
                <img src={data.icon} alt="" />
                <h4>{data.type}</h4>
                <img src={data.image} alt="" className={data.class}/>
                <p>{data.name}</p>
              <span><img src={Img1} alt="" className='actprice' />{data.price}</span>  
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