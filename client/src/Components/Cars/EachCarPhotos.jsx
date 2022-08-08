import React, { Fragment } from 'react'
import {ArrowLeft} from 'heroicons-react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { EachBuildingContainer } from '../RealEstate/RealEstate.Style'
import { CarAPI } from './DemoAPI/api'
import Banner from "../Banner/Banner";
import {useNavigate} from 'react-router-dom';
import MainButton from '../buttons/MainButton'

const EachCarPhotos = ({active}) => {
    const {Id} = useParams()    
    const selectedCar = CarAPI.find((items)=> items.id === parseInt(Id));    
    const navigate = useNavigate()
    const MediaType = [
        {
            link:`/cars/${selectedCar.title}/${Id}`,
            media:"Photos"
        },
        {
            link:`/cars/${selectedCar.title}/${Id}videos`,
            media:"Videos"
        }
    ]
  return (
    <Fragment>
        <Navbar bg="black" sticky="sticky"/>

        <EachBuildingContainer>
            <div className="upper">
                <div 
                    className="upperContent"
                    style={{cursor:"pointer"}}
                    onClick={()=>navigate(`/cars/${selectedCar.title}`)}
                >
                    <ArrowLeft width="20px"/>
                    <p>Back</p>
                </div>   
                <div className="medias">
                    {
                        MediaType.map((mediatype,i)=>{
                            return(
                                <MainButton
                                    key={i}
                                    background = {active===i ? "black": "white"}
                                    color = {active===i ? "white": "black"}
                                    border = "black"
                                    onClick={()=>navigate(`${mediatype.link}`)}
                                >
                                    {mediatype.media}
                                </MainButton>
                            )
                        })
                    }                
                </div>                             
            </div>                        

            <div className="imageGallery">
                {
                    selectedCar.images.map((image)=>{
                        return(             
                            <>
                               <div id={image.id} {...image}>                                                                                                                
                                    <div className="image">                          
                                        <img 
                                            src={image.carListed} 
                                            alt="car"
                                        />
                                    </div>                                                                      
                               </div> 
                            </>                                               
                        )                        
                    })
                }                                
            </div>           

            <Banner category="Cars" />
            <br/>
            <br/>
            <Footer />
        </EachBuildingContainer>
    </Fragment>
  )
}

export default EachCarPhotos;