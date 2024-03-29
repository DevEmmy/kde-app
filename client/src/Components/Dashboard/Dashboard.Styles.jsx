import styled from "styled-components";
import theme from "../../application/utils/Theme";

export const DashboardContainer = styled.div`
  display: none;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
`;

export const MobileDashboardContainer = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    display: none;
  }

  .upper-sect {
    /* height: 15%; */

    .walletImage-div {
      margin: 1em;
      /* position: relative; */
      /* height: 15em; */
      /* width: 100%; */
      border-radius: 10px;
      background: black;
      padding: 20px;
      box-sizing: border-box;

      .copy-icon{
        background-color: rgba(200,200,200, 0.3);
        padding: 10px;
        border-radius: 50%;
      }

      .gold-text {
        color: ${theme.color};
        font-weight: 500;
        font-size: 17px;
      }

      .white-text {
        color: ${theme.textColor};
        font-weight: 600;
        font-size: 30px;
      }

      .align-bottom {
        margin-top: 20px;
        width: 100%;
        color: ${theme.textColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        p{
          width: fit-content;
        }
      }
    }

    .walletImage-div img {
      height: 15em;
      width: 100%;
    }

    /* .walletImage-div div {
      position: absolute;
      top: 40px;
      left: 40px;
      display: flex;
      flex-direction: column;
      gap: 1em;
    } */
  }

  .transaction {
    margin-top: 6em;
    margin-left: 1em;
  }

  .transaction-content-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1em;

    .content1 {
      display: flex;
      flex-direction: column;
      gap: 0.3em;
    }

    .content1 h5 {
      color: ${theme.footerColor};
      font-size: 14px;
      font-weight: 600;
    }

    .neutral-text {
      color: ${theme.neutralColor};
      font-weight: 700;
    }

    .green-text {
      color: #6cd86a;
    }

    .orange-text {
      color: #e7907d;
    }
  }

  .border-line {
    background: rgba(62, 60, 60, 0.1);
    height: 2px;
    margin: 0em 1em;
  }

  .top-items {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1em;
    justify-content: space-between;
  }

  .top-items > p {
    font-weight: 600;
    line-height: 26px;
  }

  .search-mobile {
    background-color: #eef0f1;
    border-radius: 6px;
    gap: 5px;
    backdrop-filter: blur(40px);
    padding: 0.5em;
    display: flex;
    margin: 0em 1em;
    align-items: center;

    input {
      background-color: transparent;
      border: none;
      color: #737373;
      width: 100%;
    }

    input:focus {
      outline: none;
    }
  }

  .lower-sect {
    height: 85%;
    margin: 1em 0.5em;

    .message-wrap {
      display: flex;
      align-items: center;
      gap: 1em;
      margin-bottom: 1em;

      .box-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    .message-wrap > img {
      border-radius: 50%;
      height: 60px;
      width: 60px;
    }

    .markIconDiv {
      display: flex;
      align-items: center;
      gap: 0.5em;
      color: #a6a6a6;
      margin-top: 0.2em;
    }

    .markIconDiv > p {
      white-space: nowrap;
    }

    .time {
      margin-top: -1.5em;
      color: #a6a6a6;
    }
  }

  .menu-list {
    padding: 0.5em 2em;
    height: 5%;
    display: flex;
    justify-content: space-between;
    gap: 1em;

    .grey-bar {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.3em;
      height: 70px;
      padding: 10px;
      border-radius: 5px;
      background-color: rgba(166, 166, 166, 0.2);
      cursor: pointer;
    }
  }

  /* .notification-items{
        display: flex;
        gap: 0.3em;
        width: 100vw;
        padding: 0em 1em;
        margin-top: 1em;

        .align-side{
            display: flex;
            align-items: center;
            gap: 0.3em;
        }
    }

    .notification-items .tick{
        margin-top: 0.3em;
    } */

  /* .div1 {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        flex: 2;
    } */
`;

export const LeftContainer = styled.div`
  background-color: white;
  padding: 20px 10px;
  border-right: 1px solid lightgray;
  min-height: 100vh;

  .top_logo {
    padding: 3px;
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    cursor: pointer;
  }

  .nav_items {
    display: grid;
    gap: 10px;
    margin: 60px 0;
    /* gap: 20px; */

    .item {
      display: flex;
      gap: 10px;
      font-size: 14px;
      cursor: pointer;
      color: #252625;
      padding: 7px 17px;
      border-radius: 8px;
      transition: 0.3s;
    }

    .active {
      background-color: #252625;
      color: white;
    }

    .item:hover:not(.active) {
      background-color: #eef0f1;
    }
  }
`;

export const RightContainer = styled.div`
  background-color: #eef0f1;

  .top {
    padding: 10px 20px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;

    .search {
      background-color: #eef0f1;
      padding: 13px;
      border-radius: 6px;
      display: flex;
      gap: 5px;
      width: 463px;
      backdrop-filter: blur(40px);

      input {
        background-color: transparent;
        border: none;
        color: #737373;
        width: 100%;
      }

      input:focus {
        outline: none;
      }
    }

    .profile {
      display: flex;
      gap: 10px;
      align-items: center;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
      }

      .textContent {
        h6 {
          color: #000000;
          font-size: 14px;
        }

        p {
          color: #737373;
          font-size: 12px;
        }
      }
    }
  }

  .mainContent {
    padding: 20px;
  }
`;

export const MessagesContainer = styled.div`
  /* display: grid;
    grid-template-columns: 1.3fr 3fr; */
  display: flex;
  background-color: white;
  border-radius: 8px;
  height: 80vh;
  width: auto;

  .listOfMessages {
    border-right: 2px solid lightgray;
    padding: 10px 20px;
    border-radius: 8px 0 0 8px;
    flex: 1 0 25%;

    .title {
      padding: 10px 20px;
      text-align: center;
    }

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }

    .messages {
      display: grid;
      
    }

    .message {
      display: flex;
      gap: 10px;
      padding: 10px 0;

      h5 {
        font-size: 14px;
      }

      p {
        font-size: 12px;
        color: #737373;
      }
    }
  }

  .eachChat {
    flex: 2 0 75%;
    width: auto;
  }
`;

export const NotificationContainer = styled.div`
  display: none;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    display: block;
    background-color: white;
    border-radius: 8px;
    height: 80vh;
    padding: 20px 0;
  }

  .notification {
    padding: 10px 50px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
  }

  .content {
    .title {
      font-weight: 600;
      font-size: 14px;
    }

    .sub {
      font-weight: 500;
      font-size: 12px;
      color: #737373;
    }
  }

  .time {
    font-size: 12px;
  }
`;

export const GenericContainer = styled.div`
  display: none;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    display: block;
    border-radius: 8px;
    height: 115vh;
    padding: ${(props) => (props.padding ? props.padding : "1em")};
  }
`;

export const MobileGenericContainer = styled.div`
  display: block;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    display: none;
  }
`;

// Dashboard profile code section

export const ProfileContainer = styled.div`
  border-radius: 8px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .leftSection {
    width: 40%;
    height: 100%;
    border-radius: 8px 0px 0px 8px;
  }
  .leftSection > .domiProfile {
    width: 100%;
    height: 100%;
  }
  .domiProfile img {
    width: 100%;
    height: 100%;
  }
  .rightSection {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 0px 8px 8px 0px;
    overflow-y: auto;

    @media (min-width: ${theme.breakPoint["tablet"]}) {
      width: 60%;
    }
  }
  .rightSection > .closeField {
    width: 100%;
    padding: 1em 2em 0em 0em;
    display: flex;
    justify-content: flex-end;
  }
  .closeBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    border-radius: 0px 8px 8px 0px;
    overflow-y: scroll;
  }
`;
export const Form = styled.form`
  width: 100%;
  padding: 3em 2em 2em 2em;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    padding: 3em 3em 2em 3em;
  }

  .id-v {
    margin: 3em 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    p {
      font-size: 0.8rem;
      color: gray;
    }
  }
  .id_info {
    color: gray;
    font-size: 0.8rem;
    padding-top: 2em;
  }
  #verify {
    padding-top: 0.5em;
    font-size: 0.9rem;
  }
  .region {
    font-size: 0.8rem;
    padding-top: 2em;
  }
  .region select {
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
    padding: 1em;
    margin-top: 0.5em;
    font-weight: bolder;    
  }
  .region select:focus {
    border: 2px solid black;
  }
  .details {
    margin-top: 3em;
  }
  #veri_details {
    margin-top: 0em;
  }
  .details > .title {
    display: flex;
    gap: 1em;

    #tag {
      background: #eef0f1;
    }
  }
  .details > .title .tag {
    width: 1.5em;
    height: 1.5em;
    border-radius: 0.75em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2be5c;
    font-weight: bolder;
  }
  .details ul {
    font-size: 0.8rem;
    color: gray;
    margin-left: 3em;
  }
  .details ul li {
    margin: 0.5em;
  }
  #button {
    margin-top: 1em;
  }
  .enable {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    width: 100%;
    background: #f2be5c;
    padding: 0.8em;
    font-size: 1rem;
    font-weight: bolder;
    border: 2px solid #f2be5c;
    border-radius: 8px;
    cursor: pointer;
  }
  .disable {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    width: 100%;
    background: white;
    padding: 0.8em;
    font-size: 1rem;
    font-weight: bolder;
    border: 2px solid gray;
    border-radius: 8px;
    cursor: pointer;
    color: gray;
    cursor: default;
  }
  .formField {
    padding-top: 2em;
    width: 100%;

    #id_section {
      gap: 1.5em;
    }
    #id_section_veri {
      gap: 0.5em;
    }
    .note {
      font-size: 0.8rem;
      color: red;
      margin-top: 1em;
    }
    .preF {
      padding: 0em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(217, 217, 217, 0.1);
      gap: 3em;

      @media (min-width: ${theme.breakPoint["tablet"]}) {
        padding: 2em;
      }

      .verifyLogo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        padding-bottom: 7em;
      }
      .verifyLogo > .logo {
        width: 5em;
        height: 5em;
        border-radius: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(100, 225, 100);
      }
      .verifyLogo > .text {
        width: 100%;
        text-align: center;
        font-size: 0.8rem;
      }

      .preCautions {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1em;
      }
      .preCautions > .cautCont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        font-weight: bolder;
      }
      .preCautions > .cautCont > .cautImg {
        width: 6em;
        height: 6em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .preCautions > .cautCont > p {
        white-space: nowrap;
        font-size: 13px;
      }
      .preCautions > .cautCont > .cautImg img {
        width: 100%;
        height: 100%;
      }
    }
    .upload {
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1em;
      .uploading {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1em;

        @media (min-width: ${theme.breakPoint["tablet"]}) {
          gap: 5em;
        }
      }
      .uploading > .pages {
        width: 10em;
        height: 8em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .uploading #profile {
        height: 10em;
      }
      .uploading #profile img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
      .pages img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .uploading > .uploadType {
        width: 12em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        justify-content: center;
        align-items: flex-start;
      }
      .uploadType > .load {
        position: relative;
        width: 100%;
        padding: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #eef0f1;
        border-radius: 0.3em;
        color: gray;
        gap: 0.5em;
        cursor: pointer;
      }
      .uploadType > .load > .file {
        position: absolute;
        padding: 0.5em;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
      }
      p {
        color: gray;
        font-size: 0.8rem;
      }
    }
  }
  .formField > .section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1em;
    flex-wrap: wrap;
    gap: 3em;

    .id_selected {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;
      padding: 0.5em;
      padding-left: 1em;
      flex: 0 1 30em;
      background: #f2be5c;
      border-radius: 8px;
      color: #737373;
      cursor: pointer;
    }
    .id_type {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;
      padding: 0.5em;
      padding-left: 1em;
      flex: 0 1 30em;
      background: #eef0f1;
      border-radius: 8px;
      color: #737373;
      cursor: pointer;
    }
    .id_type:hover {
      background: #f2be5c;
    }
    .id_type > .lsc {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: auto;
      margin: 0.5em 0em 0.5em 0em;
    }
    .id_type > .lsc img {
      width: 100%;
      height: 100%;
    }
    #resident {
      flex: 0 1 100%;
    }
    #back {
      margin-top: 0em;
      flex: 0 1 10em;
      background: transparent;
      border: 2px solid black;
    }
    #continue_enable {
      margin-top: 0em;
      flex: 0 1 20em;
      background: #f2be5c;
      border: 2px solid #f2be5c;
    }
    #continue_disable {
      margin-top: 0em;
      flex: 0 1 20em;
      background: #eef0f1;
      border: 2px solid #eef0f1;
    }
    hr {
      width: 5em;
    }
  }
  .formField {
    #section {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  .formField > .section {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .formField > .section > .input {
    flex: 10em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    @media (min-width: ${theme.breakPoint["tablet"]}) {
      width: 100%;
    }
    select {
      width: 100%;
      border-radius: 8px;
      cursor: pointer;
      padding: 1em;
      margin-top: 0.5em;
      font-weight: bolder;      
    }
    select:focus {
      border: 2px solid black;
    }    
    label {
      font-size: 0.8rem;
    }
    input {
      padding: 1em;
      background: #eef0f1;
      border: 2px solid #eef0f1;
      outline: none;
      border-radius: 8px;
      padding-left: 1em;
    }
    input:focus {
      outline: none;
    }
    .resident {
      width: 100%;
    }
  }
`;

//chatbox section
export const ChatBoxContainer = styled.div`
  width: 100%;
  height: 95%;

  .header-sect {
    height: 10%;
    display: flex;
    align-items: center;
    padding: 0.5em 1.3em 0.5em 0.8em;
    position: fixed;
    z-index: 10;
    width: 100%;
    background-color: #fff;

    .chat-wrap {
      display: flex;
      align-items: center;
      gap: 0.5em;
      flex: 1;
      margin-left: 10px;
    }

    .chat-wrap > img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }

    .calls {
      display: flex;
      align-items: center;
      gap: 1em;
    }
  }

  .chat-body {
    height: 100vh;

    background-color: #d5dbe3;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 5em 1em 20vh 1em;

    .date {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.4em;
      width: 20%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      background: #fff;
      backdrop-filter: blur(20px);
      border-radius: 2px;
    }

    .reviever-chat {
      display: flex;
      width: fit-content;
      gap: 1.4em;
      background: #2e2f2e;
      border-radius: 2px 2px 2px 0px;
      color: #fff;
      margin-bottom: 0.4em;
      padding: 10px;
      max-width: 300px;
      border-radius: 4px;

      .span2 {
        display: flex;
        align-items: end;
        color: ${theme.neutralColor};
        font-size: 12px;
      }
    }

    .section-end {
      display: flex;
      justify-content: end;
    }

    .sender-chat {
      display: flex;
      flex-direction: column;
      width: fit-content;
      gap: 1.4em;
      background: #f5f5f5;
      border-radius: 2px 2px 2px 0px;
      color: #000;
      margin-bottom: 1em;
      margin-top: 0.5em;
      padding: 10px;
      max-width: 300px;
      border-radius: 4px;

      .span1 {
        color: ${theme.neutralColor};
        font-size: 12px;
      }
    }
  }

  .typing-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1em;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    height: 10%;

    .typing-div {
      flex: 2;
    }

    .typing-div textarea {
      width: 100%;
      height: 2.7em;
      border-radius: 24px;
      background-color: #a6a6a633;
      color: #000;
      border: 2px solid #a6a6a633;
      outline: none;
      padding: 5px 10px;
      resize: none;
    }
  }
`;

// wallet code section

export const Leftwallet = styled.div`
  /* position: absolute; */
  width: 50%;
  height: 369px;
  /* left: 277px;
top: 110px; */
  background: linear-gradient(180deg, #0d0d0d 0%, #0d0d0d 100%);
  backdrop-filter: blur(40px);
  border-radius: 8px;

  h4 {
    width: 117px;
    height: 17px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #f2be5c;
    margin-top: 42px;
    margin-left: 43px;
    white-space: nowrap;
  }

  h2 {
    margin-top: 24px;
    margin-left: 38px;
    width: 141px;
    height: 29px;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
  }

  div {
    display: flex;
    margin-top: 140px;
    margin-left: 43px;

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 40px;
      gap: 10px;
      margin-right: 10px;
      width: 135px;
      height: 40px;
      background: #a6a6a6;
      border-radius: 4px;
    }
  }

  p {
    width: 175px;
    height: 19px;
    font-style: normal;
    font-weight: 400px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    margin-top: 12px;
    margin-left: 33px;
  }

  @media (max-width: 650px) {
    position: absolute;
    width: 300px;
    height: 330px;
    left: 160px;
    top: 90px;

    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      margin-top: 30px;
      margin-left: 23px;
    }

    h2 {
      position: absolute;
      left: 100px;
      top: 0px;
      width: 141px;
      height: 29px;
      font-weight: 600;
      font-size: 22px;
    }

    div {
      display: grid;
      margin-top: 60px;
      margin-left: 43px;

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 40px;
        gap: 10px;
        margin-right: 10px;
        width: 135px;
        margin-top: 20px;
        height: 40px;
        background: #a6a6a6;
        border-radius: 4px;
      }
    }

    p {
      width: 175px;
      height: 19px;
      font-style: normal;
      font-weight: 400px;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #ffffff;
      margin-top: 12px;
      margin-left: 33px;
    }
  }
`;

export const Rightwallet = styled.div`
  /* position: absolute; */
  width: 50%;
  height: 369px;
  /* left: 824px;
top: 110px; */
  background: #ffffff;
  border-radius: 8px;
`;

export const Bottom = styled.div`
  /* position: absolute; */
  width: 100%;
  height: auto;
  margin-top: 2em;
  padding: 1em 0em;
  /* left: 277px;
top: 522px; */
  background: #ffffff;
  border-radius: 8px;
  table {
    border-collapse: collapse;
    width: 100%;
    overflow: hidden;
  }

  td {
    padding: 12px 44px;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
  }

  table tr {
    border-bottom: 1px solid #dddddd;
  }

  table th {
    padding: 20px;
    padding-left: 0px;
    // text-align:left;
  }

  table tr:nth-of-type(6) {
    border-bottom: none;
  }
  .red {
    color: red;
  }

  .green {
    color: green;
  }
`;
