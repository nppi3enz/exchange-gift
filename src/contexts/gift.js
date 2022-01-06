import { createContext, useState, useEffect } from "react";
import DataGifts from "../DataGifts";

export const GiftContext = createContext();
export const GiftProvider = ({ children }) => {
  const [listGifts, setListGifts] = useState([]);
  const [gift, setGift] = useState({});
  const [indexGift, setIndexGift] = useState(0);
  const [scene, setScene] = useState("main");
  const [special, setSpecial] = useState(false);

  const randomGift = () => {
    const length = listGifts.length;
    let randomIndex = Math.floor(Math.random() * length);
    // check special
    if (listGifts[randomIndex].type !== "normal" && special === false) {
      setSpecial(true);
    } else {
      do {
        setSpecial(false);
        randomIndex = Math.floor(Math.random() * length);
      } while (listGifts[randomIndex].type !== "normal");
    }
    setIndexGift(randomIndex);
    setGift(listGifts[randomIndex]);
  };
  const removeGift = () => {
    listGifts.splice(indexGift, 1);
  };
  useEffect(() => {
    setListGifts(DataGifts);
  });
  return (
    <GiftContext.Provider
      value={{ gift, randomGift, scene, setScene, removeGift }}
    >
      {children}
    </GiftContext.Provider>
  );
};
