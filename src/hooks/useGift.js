import { useContext } from "react";
import { GiftContext } from "../contexts/gift";

export const useGift = () => {
  const giftContext = useContext(GiftContext);
  return giftContext;
};
export default useGift;
