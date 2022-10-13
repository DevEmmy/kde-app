import styled from "styled-components";

export const List = styled.div`
height:1400px;
`

export const TopContainer = styled.div`

// background image

.bg{
    height:230px;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
}

// background slack logo and top texts

.slac{
    position:absolute;
    display:flex;
    left:170px;
    top:139px;




    .B2{
        box-sizing:border-box;
        background:black;
        width:150px;
        height:150px;
        border-radius:50%;
        object-fit:contain;
        object-position:center;
        border:2px solid #F2F2F2;
    }

    .check{
        position:absolute;
        top:17px;
        left:180px;
    }

    .camera{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        position: absolute;
        width:35px;
        height:35px;
        left:110px;
        top:103px;
        background: rgba(242, 242, 242, 0.5);
        border-radius:50%;
        backdrop-filter: blur(20px);
    }

    .cam{
        font-size:15px;
    }

    .team{
        position:absolute;
        left:180px;
        top:90px;
        display:block;


        h3{
            width: 267px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size:20px;
            line-height: 48px;
             color: #000000;
            }

        p{
            margin-top:-10px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight:500;
            font-size:12px;
            line-height:21px;
            color: #737373;
        }

     }


    // top buttons
     
    .top_btn{
        position:absolute;
        top:109px;
        display:flex;
        left:750px;

        button{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height:24px;
            width:130px;
            height:48px;
            color: #000000;
            background:white;
            border:1px solid gray;
            border-radius:4px;
        }

        .pen{
            margin-right:15px;
            margin-top:5px;
            font-size:12px;
        }


        .upgrade{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 12px 24px 12px 16px;
            gap: 8px;
            width:195px;
            height:48px;
            background: #252625;
            border-radius: 4px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size:13px;
            line-height:24px;
            color:white;
            margin-left:30px;
        }
    }

}

.lorem{
    position:absolute;
    top:340px;
    font-family: 'Poppins';
    width:1000px;
    font-style: normal;
    font-weight: 400;
    font-size:12px;
    line-height: 20px;
    letter-spacing: 0.005em;
    color: rgba(68, 69, 68, 0.95);
    left:200px;
}

@media(max-width:450px){

    .bg{
        width: 390px;
        height: 140px;
    }

    .slac{
        left:10px;
        top:147px;
    
    
        .B2{
            width:64px;
            height:64px;
        }


        .check{
            position:absolute;
            top:17px;
            left:130px;
            font-size:300px;
        }
    
    
        .camera{
            width:20px;
            height:20px;
            left:45px;
            top:40px;
        }
    
        .cam{
            font-size:10px;
        }
    
        .team{
            left:80px;
            top:5px;
            display:block;
    
    
            h3{
                width: 267px;
                font-size:15px;
                }
    
            p{
                margin-top:-10px;
                font-size:9px;
            }
    
         }
    
    
        // top buttons
         
        .top_btn{
            position:absolute;
            top:0px;
            display:block;
            left:0px;
    
            button{
                font-size:12px;
                width:130px;
                height:48px;
                background:white;
                border:1px solid gray;
                border-radius:4px;
            }

            .edit_profile{
                display: flex;
                position:relative;
                justify-content: center;
                align-items: center;
                padding: 6px 12px 6px 8px;
                gap: 4px;
                width:100px;
                height:30px;
                background: #BABABB;
                border:none;
                border-radius: 2px;
                font-size:10px;
                position:absolute;
                font-family: 'Poppins';
                color:white;
                left:260px;
                top:15px;
            }
    
            .pen{
                margin-right:10px;
                color: #737373;
                margin-top:0px;
                font-size:10px;
            }
    
    
            .upgrade{
                padding: 12px 24px 12px 16px;
                gap: 8px;
                width:350px;
                height:38px;
                font-size:13px;
                color:white;
                position:absolute;
                top:190px;
                left:-20px;

                .arrow{
                    color:yellow;
                }

            }
        }
    
    }


.lorem{
    width:340px;
    font-family:'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size:11px;
    line-height:15px;
    letter-spacing: 0.005em;
    color: #444544;
    top:220px;
    left:20px;
}
    

}

`

export const MiddleContainer = styled.div`

.lines{
    position: absolute;
    width:1345px;
    height:0px;
    left:3px;
    top:450px;
    border:4px solid rgba(166, 166, 166, 0.2);
    transform: rotate(-0.26deg);
}

.middle_btn{
    display:flex;
    position:absolute;
    top:535px;
    left:165px;

    button{
        padding: 12px 24px;
        width: 140px;
        height: 48px;
        background: rgba(166, 166, 166, 0.7);
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
    }

}

.lines2{
    position: absolute;
    width:1345px;
    height:0px;
    left:3px;
    top:650px;
    border:4px solid rgba(166, 166, 166, 0.2);
    transform: rotate(-0.26deg);
}


@media(max-width:450px){

    .lines{
        position: absolute;
        width:385px;
        height:0px;
        left:3px;
        top:440px;
        border:2px solid rgba(166, 166, 166, 0.2);
        transform: rotate(-0.26deg);
    }
    
    .middle_btn{
        display:flex;
        position:absolute;
        top:460px;
        left:30px;
    
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
        position: absolute;
        width:385px;
        height:0px;
        left:3px;
        top:500px;
        border:2px solid rgba(166, 166, 166, 0.2);
        transform: rotate(-0.26deg);
    }

}

`


export const LastContainer = styled.div`

.folder{
    display:flex;
    font-size:60px;
    position:absolute;
    top:850px;
    left:680px;
}

h3{
    top:916px;
    left:669px;
    position:absolute;
    font-family: 'Poppins';
    font-style: normal;
    font-weight:700;
    font-size:17px;
    line-height: 30px;
    color: #000000;
}

p{
    top:950px;
    left:585px;
    position:absolute;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size:15px;
    line-height: 30px;
    color: #696969;
}

button{
    top:1000px;
    left:615px;
    position:absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 32px 10px 24px;
    gap: 8px;
    width:200px;
    border:none;
    height: 56px;
    background: #2301F3;
    border-radius: 4px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size:19px;
    line-height: 36px;
    color: #FFFFFF;
    
}


@media(max-width:450px){


    .folder{
        display:flex;
        font-size:60px;
        position:absolute;
        top:630px;
        left:160px;
    }
    
    h3{
        top:690px;
        left:153px;
        font-size:15px;
    }
    
    p{
        top:720px;
        left:70px;
        font-size:14px;
    }
    
    button{
        top:770px;
        left:140px;
        padding:5px;
        gap: 8px;
        width:106px;
        border:none;
        height:35px;
        background: #2301F3;
        border-radius: 4px;
        font-size:12px;
        line-height: 36px;
        color: #FFFFFF;
        
    }
    

}

`