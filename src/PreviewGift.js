import React from "react";
import styled, { keyframes } from "styled-components";

const BG = styled.div`
  background: #000;
  background-image: url("images/bg_preview_gift.jpeg");
  background-size: cover;
  color: #fff;
  width: 100vw;
  height: 100vh;
  position: relative;
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
`;
const Button = styled.button`
  display: inline-block;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px 10px;
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
class PreviewGift extends React.Component {
  render() {
    return (
      <div>
        <BG>
          <Description>
            <div style={{ fontSize: "2em" }}>
              คุณได้รับของขวัญจาก ... {this.props.sender}
            </div>
            <div style={{ paddingBottom: "10px" }}>
              {this.props.description}
            </div>
            <div>
              <Button>สุ่มใหม่</Button> <Button>เปิดกล่อง</Button>
            </div>
          </Description>
          <Title>{this.props.name}</Title>
          <Items>
            <Gift src={`/images/gifts/${this.props.shadowImage}`} />
          </Items>
          <Right>
            <Message>{this.props.wish}</Message>
            <Sender>จาก {this.props.sender}</Sender>
          </Right>
        </BG>
      </div>
    );
  }
}

export default PreviewGift;
