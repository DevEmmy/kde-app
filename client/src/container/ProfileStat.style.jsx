import styled from "styled-components"

export const List = styled.div`
margin-top: 30em;
height:200px;
`

export const MiddleContainer = styled.div`

.lines{
    /* position: absolute; */
    width:100%;
    height:0px;
    /* left:3px;
    top:450px; */
    border:4px solid rgba(166, 166, 166, 0.2);
    transform: rotate(-0.26deg);
}

.middle_btn{
    display:flex;
    /* position:absolute;
    top:535px;
    left:165px; */
    padding: 10px 0;

    button{
        padding: 12px 24px;
        width: 140px;
        height: 48px;
        border-radius: 4px;
        margin-right:40px;   
        border:none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size:13px;
        line-height:24px;
    }

    .list{
        color:white;
        background:black;
        cursor: pointer;
    }

}

.lines2{
    /* position: absolute; */
    width:1345px;
    height:0px;
    /* left:3px;
    top:650px; */
    border:4px solid rgba(166, 166, 166, 0.2);
    transform: rotate(-0.26deg);
}


@media(max-width:450px){

    .lines{
        /* position: absolute; */
        width:100%;
        height:0px;
        /* left:3px;
        top:440px; */
        border:2px solid rgba(166, 166, 166, 0.2);
        transform: rotate(-0.26deg);
    }
    
    .middle_btn{
        display:flex;
        /* position:absolute;
        top:460px;
        left:30px; */
    
        button{
            padding: 12px 15px;
            width:30px;
            height:0px;
            background:white;
            border-radius: 4px;
            margin-right:40px;   
            border:none;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size:12px;
            line-height:0px;
            color: #696969;

        }


        .stat{
            color:#252625;
            font-weight:900px;
        }
    
        .list{
            color:#696969;
            background:white;
        }
    
    }
    
    .lines2{
        /* position: absolute; */
        width:100%;
        height:0px;
        /* left:3px;
        top:500px; */
        border:2px solid rgba(166, 166, 166, 0.2);
        transform: rotate(-0.26deg);
    }

}

`

export const Overview = styled.div`
display:flex;
margin-left: 160px;


.account{

    .overview-div{
        display: flex;
        gap: 1em;
        align-items: center;
    }

    p{

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size:14px;
        line-height: 20px;
        color: #737373;
    }

    .block{
       width: 20px;
       height: 20px;
       margin-top: 7px;
    }

    h3{
        margin-top:10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size:20px;
        line-height: 20px;
        letter-spacing: 0.005em;
        color: #000000;
    }

    input{
        margin-top:20px;
        width:150px;
        height:38px;
        border:1px solid gray;
        border-radius:3px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size:12px;
        box-sizing:border-box;
        padding:0px 35px;
        line-height: 20px;
        letter-spacing: 0.005em;
        color: #000000;
    }

    .minus_icon{
        font-size:12px;
        position: absolute;
        top: 66em;
        left:14.5em;

        @media(min-width:768px){
           
        }
    }

    .down_icon{
        font-size:12px;
        position: absolute;
        top: 66em;
        left:24em;
    }


}

.box{
    display:flex;
    margin-left:15em;
    position: absolute;
}

.page{
    display: flex;
    margin-right:5px;
    margin-top:30px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 24px 32px;
    gap: 28px;
    width:400px;
    height:100px;
    background:rgba(242, 242, 242, 0.5);
    border-radius: 8px 0px 0px 8px;

    h6{
        position:absolute;
        top:40px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight:600;
        font-size:12px;
        line-height: 20px;
        letter-spacing: 0.005em;
        color: #000000;
    }

    p{
        margin-top:20px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        line-height:20px;
        letter-spacing: 0.005em;
        font-size:14px;
    }

    span{
        margin-right:5px;
        font-size:30px;
        color: #2301F3;
    }

    div{
        display:flex;
        margin-top:20px; 
    }

    .d{
        margin-left:110px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 16px 8px 10px;
        gap: 4px;
        width: 106px;
        height: 36px;
        background: rgba(62, 199, 59, 0.15);
        border-radius: 24px;

        p{
            margin:0px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #0A4509;
        }
    }


}


@media(max-width:450px){

    top:530px;
    display:block;
    left:45px;
    
    .account{
        margin-left:-20px;
    
        p{
            display:none;
        }

        input{
            font-size:13px;
        }

        .block{
            position:absolute;
            top:12px;
            left:90px;
        }
    
        h3{
            margin-top:10px;
            font-size:20px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #000000;
        }

        .minus_icon{
            top:65px;
            left:-10px;
        }
    
        .down_icon{
            left:110px;
            top:65px;
        }
    
    
    }
    
    .box{
        display:flex;
        margin-left:-30px;
    }
    
    .page{
        margin-right:5px;
        margin-top:30px;
        padding: 24px 32px;
        gap: 28px;
        width:180px;
        height:90px;
    
        h6{
            top:125px;
            margin-left:-20px;
        }
    
        p{
            margin-top:27px;
            margin-left:-25px;
            width:100px;
            font-size:12px;
        }
    
        span{
            margin-right:5px;
            font-size:26px;
        }
    
        div{
            box-sizing:border-box;
            display:flex;
            margin-top:29px; 
            position:absolute;
        }
    
        .d{
            margin-left:110px;
            flex-direction: row;
            align-items: center;
            padding: 8px 16px 8px 10px;
            gap:4px;
            width:58px;
            height:23px;
            background: rgba(62, 199, 59, 0.15);
            border-radius: 24px;
            margin-left:80px;

            .arrow{
                font-size:12px;
            }
    
            p{
                margin-right:14px;
                font-size:11px;
                width:10px;
            }
        }
    
    
    }

}


`

export const Post = styled.div`
   margin:15em 120px;
   display:flex;

   h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight:600;
    font-size:20px;
    line-height: 36px;
    color: #000000;
    position:absolute;
    top:58em;
    left:150px;
   }

   .min-post{
    display:flex;
    width:190px;
    margin:15px 25px;

    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight:600;
        font-size: 16px;
        line-height:24px;
        color: #000000;
        padding:5px 10px;
      
        
    }

    .S2{
        width:35px;
        height:35px;
        border-radius:50%;
        object-fit:cover;
    }
   }


   .Bg{
       
        position:absolute;
        margin:0px 20px;
        width:290px;
        height:160px;
        border-radius: 40px 0px;
        background-position:center;
        background-size:cover;
        
        .love{
            position: absolute;
            display:flex;
            justify-content:center;
            align-items:center;
            width:30px;
            height:30px;
            left: 23px;
            top: 18px;
            border-radius:50%;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
        }

        button{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px 16px;
            gap:10px;
            position: absolute;
            width:110px;
            height:30px;
            left:180px;
            top:130px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 0px 0px 48px 0px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size:14px;
            line-height: 24px;
            color: #FFFFFF;
            border:none;
            cursor: pointer;
        }
   }

   h4{
    font-family: 'Poppins';
    font-style: normal;
    font-weight:600;
    font-size:15px;
    line-height: 30px;
    color: #000000;
    padding:166px 20px;
   }

   h5{
    font-family: 'Poppins';
    font-style: normal;
    font-weight:500;
    font-size:13px;
    line-height: 27px;
    color: #000000;
    margin:-170px 19px;
   
   }

   .location{
    display:flex;
    margin:180px 15px;

    p{
        left:25px;
        margin-top:-7px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size:11px;
        line-height: 18px;
        color: #000000;
        width:280px;
        height: 36px;
        margin-left:5px;
    }

   }



.b{
    display:flex;
    position:absolute;
    top:670px;


    button{
        margin-top:0px;
        margin-left:15px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        gap: 10px;
        width:140px;
        height:50px;
        background: #F2F2F2;
        border-radius: 4px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight:600;
        font-size:14px;
        line-height:24px;
        text-align: center;
        color: rgba(37, 38, 37, 0.95);
        border:none;
    
    }
}


.posts{
    margin-right:100px;
}


.second{
}

         // MEDIA QUERRY


@media(max-width:450px){
    display:block;
    height:200px;
    margin:800px 110px;


    h3{
        font-size:18px;
        top:800px;
        left:20px;
       }
    
       .min-post{
        position:absolute;
        top:870px;
        left:15px;
    
            p{
               font-weight:500;
            }

        }
    
    
       .Bg{
            margin:0px 20px;
            left:20px;
        }
    
       h4{
        margin-left:-90px;
       }
    
       h5{
        font-weight:600;
        font-size:13px;
        margin-left:-70px;
       
       }
    
       .location{
        margin-left:-70px;
        display:flex;
        width:300px;
        margin:180px 15px;
        margin-left:-70px;
    
        p{
            margin-top:-7px;
            font-size:10px;
        }
    
       }
    
    
    
    .b{
        display:flex;
        position:absolute;
        top:1210px;
        left:20px;
    }
    
    .second{
        display:none;
    }
}

`