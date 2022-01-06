import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useGift from "./hooks/useGift";

const BG = styled.div`
  background: #000;
  background-image: url("images/bg_preview_gift.jpeg");
  background-size: cover;
  color: #fff;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const openTitle = keyframes`
  0% {
    left: 100px;
    opacity: 0;
  }
  100% {
    left: 40px;
    opacity: 1;
  }
`;
const Title = styled.div`
  position: absolute;
  color: #fff;
  bottom: 8em;
  width: 30vw;
  left: 40px;
  font-size: 3em;
  font-family: "Kanit", sans-serif;
  text-shadow: 3px 3px 3px #000;
  text-align: left;
  animation-delay: 1s;
  opacity: 0;
  &.open-title {
    animation-name: ${openTitle};
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }
`;
const Items = styled.div`
  margin-top: 10px;
  background-image: url("images/items.png");
  background-repear: no-repeat;
  background-size: cover;
  color: #fff;
  width: 900px;
  height: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    width: 700px;
    height: 700px;
  }
`;
const Sender = styled.div`
  font-family: "Kanit", sans-serif;
  text-shadow: 3px 3px 3px #000;
  font-size: 2em;
  text-align: right;
  margin-top: 20px;
`;
const openRight = keyframes`
  0% {
    right: 100px;
    opacity: 0;
  }
  100% {
    right: 20px;
    opacity: 1;
  }
`;
const Right = styled.div`
  position: absolute;
  width: 550px;
  height: 100%;
  right: 0;
  top: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-delay: 1s;
  opacity: 0;
  &.open-right {
    animation-name: ${openRight};
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }
`;
const Message = styled.div`
  margin-top: 30px;
  font-family: "Kanit", sans-serif;
  text-shadow: 3px 3px 3px #000;
  font-size: 1.3em;
  text-align: left;
`;
const slideUp = keyframes`
  0% {
    bottom: -100%;
  }
  100% {
    bottom: 0%;
  }
`;
const slideDown = keyframes`
  0% {
    bottom: 0%;
  }
  100% {
    bottom: -100%;
  }
`;
const Description = styled.div`
  position: absolute;
  font-family: "Kanit", sans-serif;
  font-size: 1.3em;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  width: 100%;
  bottom: -100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-bottom: 20px;
  animation-name: ${slideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  &.slideDown {
    animation-delay: 0s;
    bottom: 0%;
    animation-name: ${slideDown} !important;
  }
`;
const Button = styled.button`
  display: inline-block;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px 10px;
  font-family: "Kanit", sans-serif;
  &.white {
    border: 1px solid #fff;
  }
`;
const zoomOut = keyframes`
  0% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
`;

const Gift = styled.img`
  animation-name: ${zoomOut};
  animation-duration: 0.5s;
  animation-timing-function: ease;
`;
const PreviewGift = (props) => {
  const { setScene, removeGift } = useGift();
  const [status, setStatus] = useState(false);
  const openGift = () => {
    removeGift();
    setStatus(true);
  };
  const clickToHome = () => {
    setScene("main");
  };
  return (
    <div>
      <BG>
        <Description className={status ? "slideDown" : ""}>
          <div style={{ fontSize: "2em" }}>
            คุณได้รับของขวัญจาก ... {props.sender}
          </div>
          <div style={{ paddingBottom: "10px" }}>{props.description}</div>
          <div>
            <Button onClick={clickToHome}>สุ่มใหม่</Button>{" "}
            <Button onClick={openGift}>เปิดกล่อง</Button>
          </div>
        </Description>
        <Title className={status ? "block open-title" : "hidden"}>
          {props.name}
        </Title>
        <Items>
          <Gift
            src={
              !status
                ? `/images/gifts/${props.shadowImage}`
                : `/images/gifts/${props.image}`
            }
          />
        </Items>
        <Right className={status ? "open-right" : ""}>
          <div className={status ? "block" : "hidden"}>
            <Message>{props.wish}</Message>
            <Sender>จาก {props.sender}</Sender>
          </div>
        </Right>
        <div className={status ? "block" : "hidden"}>
          <Button className="white" onClick={clickToHome}>
            กลับไปหน้าแรก
          </Button>
        </div>
      </BG>
    </div>
  );
};

export default PreviewGift;
