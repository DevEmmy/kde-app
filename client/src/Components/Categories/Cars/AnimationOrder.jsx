import vehicle1 from "./Img/vehicle1.jpg";
import vehicle2 from "./Img/vehicle2.jpg";
import vehicle3 from "./Img/vehicle3.jpg";
import vehicle4 from "./Img/vehicle4.jpg";
import vehicle5 from "./Img/vehicle5.jpg";
import vehicle6 from "./Img/vehicle6.jpg";
import vehicle7 from "./Img/vehicle7.jpg";

import estate1 from "./Img/estate1.jpg";
import estate2 from "./Img/estate2.jpg";
import estate3 from "./Img/estate3.jpg";
import estate4 from "./Img/estate4.jpg";
import estate5 from "./Img/estate5.jpg";

import home1 from "./Img/home1.jpg";
import home2 from "./Img/home2.jpg";
import home3 from "./Img/home3.jpg";
import home4 from "./Img/home4.jpg";
import home5 from "./Img/home5.jpg";
import home from "./Img/home.jpg";

import about1 from "./Img/about1.jpg";
import about2 from "./Img/about2.jpg";
import about3 from "./Img/about3.jpg";
import about4 from "./Img/about4.jpg";
import about5 from "./Img/about5.jpg";
import about6 from "./Img/about6.jpg";
import about7 from "./Img/about7.jpg";
import about8 from "./Img/about8.jpg";
import about9 from "./Img/about9.jpg";

import c4 from "../LuxuryService/images/pics4.webp"
import c5 from "../LuxuryService/images/pics5.webp"

export const graduallyAppear = {
  hidden: {
    opacity: 0.3,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const graduallyDisAppear = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0.3,
    transition: {
      duration: 0.5,
    },
  },
};

export const CarAnimation = [
  { id: 1, img: vehicle3 },
  { id: 2, img: vehicle2 },
  { id: 3, img: vehicle7 },
  { id: 4, img: vehicle1 },
  { id: 5, img: vehicle4 },
  { id: 6, img: vehicle6 },
  { id: 7, img: vehicle5 },
];

export const EstateAnimation = [
  { id: 1, img: estate2 },  
  { id: 2, img: estate3 },
  { id: 3, img: estate4 },
  { id: 4, img: estate5 },
];

export const HomeAnimation = [
  { id: 1, img: home1 },
  { id: 2, img: vehicle3 },
  { id: 3, img: c5 },
  { id: 4, img: c4 },
  { id: 5, img: about3 }, 
  { id: 6, img: estate2},
  { id: 7, img: vehicle7},
  { id: 8, img: about6 },
  { id: 9, img: about7 }
];

export const AboutAnimation = [
  { id: 1, img: about1 },
  { id: 2, img: about2 },
  { id: 3, img: about3 },
  { id: 4, img: about4 },
  { id: 5, img: about5 },
  { id: 6, img: about6 },
  { id: 7, img: about7 },
  { id: 8, img: about8 },
  { id: 9, img: about9 },
];

export const CollectibleAnimation = [
  { id: 1, img: about1 },
  { id: 2, img: about2 },
  { id: 3, img: about3 },
  { id: 4, img: about4 },
  { id: 5, img: about5 },
  { id: 6, img: about6 },
  { id: 7, img: about7 },
  { id: 8, img: about8 },
  { id: 9, img: about9 },
];