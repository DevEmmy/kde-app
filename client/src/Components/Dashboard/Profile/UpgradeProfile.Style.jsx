import styled from "styled-components";

export const Upgrade = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f6f6f6;
  padding: 1em 0em 4em 0em;
  gap: 2em;

  .bck {
    width: 100%;
    padding: 0em 1em;
    .cont {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.7em;
      height: 2.7em;
      border-radius: 1.35em;
      background: transparent;
      box-shadow: 16px 16px 32px rgba(176, 176, 176, 0.26),
        -16px -16px 32px #ffffff;
      cursor: pointer;
    }
  }

  .head {
    text-align: center;
    padding: 0em 1em;

    .h1 {
      font-weight: 700;
      font-size: 38px;
      color: #000000;
    }
    .h2 {
      font-weight: 400;
      font-size: 17px;
      letter-spacing: 0.0015em;
      color: #696969;
    }

    @media (max-width: 550px) {
      .h1 {
        font-weight: 700;
        font-size: 32px;
        color: #000000;
      }
      .h2 {
        font-weight: 400;
        font-size: 15px;
        letter-spacing: 0.0015em;
        color: #696969;
      }
    }
  }

  .typeBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(197, 197, 198, 0.5);
    border-radius: 4px;
    padding: 2px;
    margin: 0em 1em;
    color: #737373;
    font-weight: 700;
    letter-spacing: 0.0015em;

    .selectBtn1 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 32px;
      background: #ffffff;
      border-radius: 4px;
      color: #000000;
      cursor: pointer;
    }
    .selectBtn2 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 32px;
      background: transparent;
      cursor: pointer;
    }
  }

  .packages {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
    flex-wrap: wrap;

    .package {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      align-self: stretch;
      gap: 0.5em;
      flex: 0 1 20em;
      padding: 1em 1.5em;
      margin: 1.5em;
      background: #f6f6f6;
      box-shadow: 16px 16px 32px rgba(176, 176, 176, 0.26),
        -16px -16px 32px #ffffff;
      border-radius: 8px;
    }
    .package > .top {
      font-weight: 600;
      font-size: 20px;
      color: #000000;
    }
    .package > .descr {
      font-weight: 400;
      font-size: 16px;
      color: #696969;
    }
    .package > .pricing {
      font-weight: 400;
      font-size: 16px;
      color: #696969;
      padding: 1em 0em;
    }
    .package > .pricing span {
      font-weight: 600;
      font-size: 35px;
      color: #7b0dd1;
    }
    .package > .btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      background: #7b0dd1;
      border-radius: 4px;
      font-weight: 600;
      font-size: 14px;
      color: #ffffff;
      cursor: pointer;
    }
  }

  .base {
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    color: #696969;
    padding: 2em 1em;

    span {
      color: #7b0dd1;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;