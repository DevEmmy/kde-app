import styled from "styled-components";
import theme from "../../application/utils/Theme";

export const CategoriesContainer = styled.div`
  overflow: hidden;
  
`;

export const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`

export const Categories = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    position: ${props => props.position ? props.position : "static"} ;
    padding: ${props => props.padding ? props.padding : "50px"} ;
    justify-content: space-between;
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : "no-wrap"} ;
    gap: 2em;
    overflow-x: auto;
    margin: ${props => props.margin ? props.margin : "0 auto"} ;
    z-index: ${props => props.z ? props.z : "0"};

    @media (min-width: ${theme.breakPoint['tablet']}) {
        overflow: hidden;
        padding: 40px 90px;
        ::-webkit-scrollbar{
            width:0;
        }
        gap: ${props => props.gap ? props.gap : "2.3em"};
      }`

export const Category = styled.div`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${(prop) => prop?.bg});
width: ${props => props.width ? props.width : "100%"};
height: 300px;
border-radius: 6px;
flex:  1 0 70%;
cursor: pointer;
transition: transform 300ms; 
background-size: cover;
padding: 1em;
  &:hover {
  transform: scale(1.1);
  overflow-y: hidden;
  /* background: rgba(233, 140, 0, 0.7);
  width:  200px;
  color: #000; */
}

@media(min-width: ${theme.breakPoint["tablet"]}) {
  flex: ${props => props.flex ? props.flex : "1 0 20%"} ;
  height: 350px;
}
`

export const InformationContainer = styled.div`
display: grid;
padding: 94px;

@media(max-width: 850px) {
  padding: 20px;
}
`;

export const Information = styled.div`
display: grid;
grid-template-columns: 1.2fr 1fr;
align-items: center;
justify-content: center;
gap: 50px;

  .image {
  position: relative;
}

  .displace {
  position: absolute;
  width: 50px;
  height: 110px;
  background-color: #f2be5c;
  right: -25px;
  top: 53px;
}

  img {
  width: 100%;
  height: 230px;
  object-fit: cover;
}

  .action {
  width: 35%;
  padding: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  background:  #f2be5c 23.7%;
  border-radius: 4px;
  font-size: 1rem;
}

.textContent {
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
    margin-bottom: 2em;
    align-content: center;
    padding: 0 30px;
    gap: 10px;
    .p {
      font-size: 0.7rem;
      color: ${theme.neutralColor};
      font-weight: 500;
    }
  }
  .Elite {
    h4 {
      font-size: 1rem;
      text-align: center;
      margin-bottom: 0.5em;
    }
    p {
      font-weight: 500;
      font-size: 0.8rem;
      text-align: center;
      color: ${theme.neutralColor};
    }
  }
  form {
    margin: 2em auto;
    justify-content: center;
    display: flex;
  }
  input {
    font-size: 12px;
    padding: 15px;
    background: rgba(166, 166, 166, 0.1);
    border-radius: 4px;
    border: none;
    width: 60%;
    margin-left: 10px;
  }
  .btn {
    margin-right: 10px;
    text-align: center;
    padding: 10px;
    width: 30%;
    font-weight: 400;
    font-size: 15px;
    color: #252625;
    background: linear-gradient(90deg, #f2be5c 23.7%, #000000 286.13%);
    border-radius: 4px;
  }
  .img_coffee {
  }
  @media (max-width: 850px) {
    display: block;
    grid-template-columns: none;
    .image {
      position: sticky;
    }
    .business {
      width: 360px;
      top: -9rem;
      right: 5rem;
      position: relative;
    }
    img {
      width: 100%;
      height: 210px;
      object-fit: contain;
    }
    .displace {
      display: none;
      position: sticky;
    }
    .textContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      h3 {
        font-size: 17px;
        font-weight: 600;
      }
      .p {
        font-weight: 400;
        font-size: 13px;
      }
      .action {
        margin: 30px auto;
        width: 98px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        background:  #f2be5c;
        border-radius: 4px;
        font-size: 12px;
      }
    }
    .coffee {
      padding: 20px 0;
    }
    .img_coffee {
      width: 100%;
      height: auto;
      object-fit: cover;
      padding: 10px;
    }
    .Elite {
      h4 {
        font-size: 17px;
        text-align: center;
        margin: 10px auto;
      }
      p {
        font-weight: 500;
        font-size: 12px;
        text-align: center;
      }
    }
    form {
      margin: 50px auto;
      display: flex;
    }
    input {
      font-size: 12px;
      padding: 15px;
      background: rgba(166, 166, 166, 0.1);
      border-radius: 4px;
      border: none;
      width: 60%;
      margin-left: 10px;
    }
    .btn {
      margin-right: 10px;
      text-align: center;
      padding: 10px;
      width: 30%;
      font-weight: 400;
      font-size: 15px;
      color: #252625;
      background: linear-gradient(90deg, #f2be5c 23.7%, #000000 286.13%);
      border-radius: 4px;
    }
  }
`;

export const SubFooter = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),
    url(${(prop) => prop.bg});
  width: 100%;
  height: 300px;
  background-position: center;
  margin: 50px 0;
  padding: 50px 650px 50px 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  background-size: cover;
  @media (max-width: 850px) {
    position: relative;
    /* background-size:; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 0px;
    .sub-p1 {
      text-align: center;
      font-size: 14px;
    }
    .sub-p2 {
      font-size: 12px;
      padding-top: 10px;
      text-align: center;
    }
  }
`;

export const BorderText = styled.div`
  color: ${(prop) => prop.color || "white"};
  font-size: ${(prop) => prop.fontSize || "14px"};
  padding: 10px;
  border: 2px solid;
  display: inline-flex;
  width: fit-content;
  cursor: pointer;
  @media (max-width: 850px) {
    margin: 20px auto;
  }
`;

export const BlogContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  padding: 0em 3em;

  .lt {
    font-weight: 700;
    font-size: 20px;
    color: #000000;
  }

  .blogrw {
    width: 100%; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5em;
    flex-wrap: nowrap;
    padding: 1em 0em;
    position: relative;
  }
`;

export const Blog = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5em;
  text-align: start;
  cursor:pointer;

  :hover > .topic{
    color: #F2BE5C;
    transition: .3s;
  }
  .image {
    width: 18em;
    height: 15em;
    border-radius: 8px 8px 0px 0px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 8px 0px 0px;
    }
  }
  .topic {
    font-weight: 600;
    font-size: 15px;
    color: #000000;
  }
  .more {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    font-weight: 500;
    font-size: 15px;
    color: #0d0d0d;
    cursor: pointer;
  }
`;