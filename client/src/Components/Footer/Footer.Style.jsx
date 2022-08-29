import styled from "styled-components"
import theme from '../../application/utils/Theme';

export const FooterSection = styled.div`
    background:${theme.blackBackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:4em 8em;
    font-weight:bold;
    color:${theme.footerColor};
    margin-top:2em;
    gap: 2em;
    white-space: nowrap;

   
    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex-direction: row;
        width:100%;
        padding:3em 3em 10em 3em;
        justify-content:space-between;
        align-items:flex-start;    
        font-weight:light;
        margin-top:2em;
        gap: 1em;
    }`

export const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1em;    

    @media (min-width: ${theme.breakPoint['tablet']}) {
       justify-content:flex-start;
       align-items:flex-start; 
    }`

export const Head = styled.div`
    color:${props => props.color ? props.color : theme.textColor};
    font-size:${props => props.fontSize ? props.fontSize : "1rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "700"};
`
export const List =styled.div`
    color:${props => props.color ? props.color : theme.textColor};
    font-size:${props => props.fontSize ? props.fontSize : "0.8rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "light"};  
    cursor:pointer;  

    &:hover{
        color:${theme.color};
        font-weight:700
    }
  
`