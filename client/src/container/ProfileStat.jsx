import React from 'react'
import B1 from "../Components/Home/images/B1.jpg"
import B2 from "../Components/Home/images/B2.jpg"
import check from "../Components/Home/images/check.png"
import block from "../Components/Home/images/block.png"
import { LastContainer, List } from "./ProfileList.style"
import {TopContainer} from "./ProfileList.style"
import { MiddleContainer} from "./ProfileStat.style"
import { Overview} from "./ProfileStat.style"
import { Post} from "./ProfileStat.style"
import { FaPen, FaLongArrowAltUp, FaCamera, FaCalendarMinus, FaChevronDown } from 'react-icons/fa'
import S2 from "../Components/Home/images/S2.jpg"
import S1 from "../Components/Home/images/S1.jpg"
import { FaMapMarker } from "react-icons/fa"
import { FaHeart } from 'react-icons/fa'





export default function ProfileStat() {
  return (
    <List>
      {/* <TopContainer>
        <div className='bg' style={{backgroundImage:`url(${B1})`}}>
         </div>
        <div className='slac'>
            <img className='B2' src={B2}/>
            <div className='camera'>
              <FaCamera className='cam'/>
            </div>
            <div className='team'>
                 <h3>King David Team</h3>
                 <img className='check' src={check}/> 
                 <p>Joined: 2022</p>
            </div>

            <div className='top_btn'>
                <button className='edit_profile'>
                  <FaPen className='pen'/>
                  Edit Profile
                </button>
                <button className='upgrade'><FaLongArrowAltUp/>Upgrade Account</button>
            </div>
        </div>

        <div className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempor mattis turpis egestas quam cursus sit lobortis. Quam cursus bibendum imperdiet sollicitudin porttitor. Eleifend nisi, mattis pulvinar sagittis at nisi aliquam metus. Ante accumsan vitae tristique at laoreet libero. Mauris tellus, nulla aliquam ut in quam et dis dui. Egestas egestas elementum proin purus.</div>
      </TopContainer>

      <MiddleContainer>
        <div className='lines'></div>
        <div className='middle_btn'>
            <button  className='list'>Stats</button>
            <button>Lists</button>
            <button>Account</button>
            <button>Verification</button>
        </div>
        <div className='lines2'></div>
    </MiddleContainer> */}

    <Overview>

      <div className='account'>
        <p>Account Type : Free</p>
        <img className='block' src={block}/>
        <h3>Overview</h3>
        <div>
          <FaCalendarMinus className='minus_icon'/>
          <input placeholder='Last 30 Days'/>
          <FaChevronDown className='down_icon'/>
        </div>
      </div>

      <div className='box'>

      <div className='page'>
        <h6>Page Views</h6>
        <div>
        <p><span>158</span>from 129</p>
        <div className='d'>
          <FaLongArrowAltUp
          className='arrow'
          color='#3EC73B'/>
          <p>+22.5%</p>
        </div>
        </div>
        
      </div>



    <div className='page'>
      <h6>Listing Saves</h6>
      <div>
        <p><span>15</span>from 9</p>
      <div className='d'>
          <FaLongArrowAltUp
          className='arrow'
          color='#3EC73B'/>
          <p>+22%</p>
      </div>
    </div>
      
      </div> 

      </div>
    </Overview>

      <Post>
      <h3>Listings</h3>

        <div className='posts'>
            <div className='min-post'>
                <img className='S2' src={S2}/>
                 <p>King David Team</p>
            </div>

          <div className='Bg' style={{backgroundImage:`url(${S1})`}}>
              <div className='love'>
              <FaHeart color='rgba(255, 255, 255, 0.7)'/>
            </div>   
          
            <button>View More</button>     
          </div>
            <h4>$6,200,000</h4>
            <h5>Chrisol Square</h5>
            <div className='location'>
              <FaMapMarker/>
              <p>
                 Near Buckignham Palace, Carey street, London, United Kingdom.
              </p>
            </div>

            <div className='b'>
              <button>50 views</button>
              <button>20 views</button>
            </div>  

        </div>

{/* second post */}


        <div className='posts second'>
          
            <div className='min-post'>
                <img className='S2' src={S2}/>
                 <p>King David Team</p>
            </div>

          <div className='Bg' style={{backgroundImage:`url(${S1})`}}>
              <div className='love'>
              <FaHeart color='rgba(255, 255, 255, 0.7)'/>
            </div>   
          
            <button>View More</button>     
          </div>
            <h4>$6,200,000</h4>
            <h5>Chrisol Square</h5>
            <div className='location'>
              <FaMapMarker/>
              <p>
                 Near Buckignham Palace, Carey street, London, United Kingdom.
              </p>
            </div>

            <div className='b'>
              <button>50 views</button>
              <button>20 views</button>
            </div>  
        </div>

{/* Third post */}


        <div className='posts second'>
          
            <div className='min-post'>
                <img className='S2' src={S2}/>
                 <p>King David Team</p>
            </div>

          <div className='Bg' style={{backgroundImage:`url(${S1})`}}>
              <div className='love'>
              <FaHeart color='rgba(255, 255, 255, 0.7)'/>
            </div>   
          
            <button>View More</button>     
          </div>
            <h4>$6,200,000</h4>
            <h5>Chrisol Square</h5>
            <div className='location'>
              <FaMapMarker/>
              <p>
                 Near Buckignham Palace, Carey street, London, United Kingdom.
              </p>
            </div>

            <div className='b'> 
              <button>50 views</button>
              <button>20 views</button>
            </div> 
        </div>
      </Post>
      
    </List>
  )
}
