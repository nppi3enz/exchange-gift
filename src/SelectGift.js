import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PreviewGift from "./PreviewGift";
import VideoGift from "./VideoGift";
import useGift from "./hooks/useGift";
import DataGifts from "./DataGifts";

const SelectArea = styled.div`
  background: #000;
  background-image: url("images/bg_select.png");
  background-size: cover;
  color: #fff;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: "Kanit", sans-serif;
  .gifts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
      display: inline-block;
      width: 22%;
      height: 180px;
      margin: 10px;
      background: rgb(221, 176, 116);
      background: linear-gradient(
        0deg,
        rgba(221, 176, 116, 1) 0%,
        rgba(223, 151, 78, 1) 47%,
        rgba(192, 130, 62, 1) 100%
      );
      position: relative;
      border: 0px solid #ccc;
      border-radius: 10px;
      &.disable {
        opacity: 0.3;
      }
      &:hover {
        border: 5px solid #fcfffa;
      }
      .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #556580;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 5px;
      }
    }
  }
`;

function SelectGift() {
  const { gift, scene, randomGift, setScene } = useGift();
  const [selects, setSelects] = useState([]);
  let timerId;
  const clickRandom = (index) => {
    selects[index] = false;
    setSelects(selects);
    randomGift();
    setScene("video");
    timerId = setInterval(() => {
      setScene("preview");
      clearInterval(timerId);
    }, 6500);
  };
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < DataGifts.length; i++) {
      temp[i] = true;
    }
    setSelects(temp);
  }, []);
  return (
    <div>
      {scene === "main" && (
        <SelectArea>
          <h1 className="m-8 text-5xl text-black font-bold">
            เลือกกล่องของขวัญที่ต้องการ
          </h1>
          <div className="gifts">
            {selects.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  clickRandom(index);
                }}
                className={item ? "" : "disable"}
              >
                <div>
                  <img
                    src={`/images/icons/gift${index + 1}.png`}
                    width={80}
                    style={{
                      margin: "0 auto",
                      marginTop: "-30px",
                      filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.5))",
                    }}
                  />
                </div>
                <div className="footer">หมายเลข {index + 1}</div>
              </button>
            ))}
          </div>
        </SelectArea>
      )}
      {scene === "video" && <VideoGift type={gift.type} />}
      {scene === "preview" && (
        <PreviewGift
          name={gift.name}
          description={gift.description}
          sender={gift.sender}
          wish={gift.wish}
          shadowImage={gift.shadowImage}
          image={gift.image}
        />
      )}
    </div>
  );
}

export default SelectGift;
