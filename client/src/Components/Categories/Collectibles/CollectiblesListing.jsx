import { motion } from "framer-motion";
import {
  Background,
  HeroSection,
  Input,
  Text,
  Body,
  FilterBox,
  SearchSection,
} from "../Cars/Cars.Style";
import {
  Adjustments,
  Heart,
  HeartOutline,
  LocationMarker,
  Search,
} from "heroicons-react";
import MainButton from "../../buttons/MainButton";
import { SearchC } from "../RealEstate/RealEstate.Style";
import Banner from "../../Banner/Banner";
import { Container, GridContainer } from "../../Listing/Listing.styled";
import Footer from "../../Footer/Footer";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import img1 from "../Cars/Img/brooke-campbell-Rw2-Y0nSIKQ-unsplash.jpg";
import img2 from "../Cars/Img/christian-mackie-SxBca4GcC9k-unsplash.jpg";
import img3 from "../Cars/Img/daniel-gaffey-EbH-7ReNuA0-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import {
  CollectibleAnimation,
  graduallyAppear,
  graduallyDisAppear,
} from "../Cars/AnimationOrder";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const CollectiblesListing = () => {
  const top = useRef(null);
  const [collectibleId, setCollectibleId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);
  const navigate = useNavigate();

  const collectibleData = [
    {
      id: 1,
      name: "Luxury Ball Pen",
      price: "100.00",
      img: img1,
    },
    {
      id: 2,
      name: "Luxury Ball Pen",
      price: "200.00",
      img: img2,
    },
    {
      id: 3,
      name: "Luxury Ball Pen",
      price: "400.00",
      img: img3,
    },
    {
      id: 4,
      name: "Luxury Ball Pen",
      price: "300.00",
      img: img3,
    },
    {
      id: 5,
      name: "Luxury Ball Pen",
      price: "9000.00",
      img: img1,
    },
    {
      id: 6,
      name: "Luxury Ball Pen",
      price: "78900.00",
      img: img2,
    },
  ];

  const redirect = (id) => {
    localStorage.setItem(
      "collectible",
      JSON.stringify(collectibleData[id - 1])
    );
    navigate(`/collectible/${id}`);
  };

  const animate = useCallback(() => {
    var timer1;
    var timer2;
    timer1 = setTimeout(() => {
      if (collectibleId < CollectibleAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setAnimation(graduallyAppear);
          setCollectibleId(collectibleId + 1);
        }, [500]);
      } else if (collectibleId === CollectibleAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setAnimation(graduallyAppear);
          setCollectibleId(1);
        }, [500]);
      }
    }, [8000]);
  }, [collectibleId]);

  useEffect(() => {
    animate();
  }, [animate]);

  useEffect(() => {
    scrollToRef(top);
  }, []);
  return (
    <>
      <Navbar active={4} />
      <Background ref={top}>
        {CollectibleAnimation.map((item) => {
          if (item.id === collectibleId) {
            return (
              <motion.div
                className="bgImage"
                variants={animation}
                initial="hidden"
                animate="visible"
              >
                <img src={item.img} alt="collectibles" />
              </motion.div>
            );
          }
        })}
        <HeroSection>
          <Text fontSize="2rem">Collectibles</Text>
          <SearchSection>
            <SearchC>
              <Input placeholder="search" />
              <Search width="30px" className="cursor-pointer" />
            </SearchC>
            <FilterBox>
              <MainButton width="60px">Filter</MainButton>
              <Adjustments width="30px" />
            </FilterBox>
          </SearchSection>
        </HeroSection>
      </Background>

      <Body>
        <Text fontSize="1rem" fontWeight="700" color="black">
          Explore Collectibles
        </Text>
        <GridContainer>
          {collectibleData.map((c, index) => {
            return (
              <Container key={index}>
                <div className="image">
                  <img src={c.img} alt="" className="relative" />
                  <div className="view" onClick={() => redirect(c.id)}>
                    View More
                  </div>
                </div>
                <p className="price">&#x20A6; {c.price}</p>
                <p className="description">{c.name}</p>
              </Container>
            );
          })}
        </GridContainer>
      </Body>
      <Banner category="Collectibles" />
      <Text color="black" fontSize="0.8rem" margin="2em">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Indulge in opulence with King David Elites. Our online marketplace boast
        a collection of exquiste, high-end properties that exude luxury
        living.From stunning homes to sprawling estates and opulent
        apartment,our offering cater to all your residential,investment and
        for-profit needs. Our secure payment system ensures hassle-free
        transactions, with the option to transfer funds directly to verifies
        vendors or through our 1% transaction fee escrow account which further
        secures your funds and grants you access to our team of experts who
        provide professional advisory services and arranges luxurious property
        inspection, setting a new standardof class and sophistication.
      </Text>
      <Footer />
    </>
  );
};

export default CollectiblesListing;
