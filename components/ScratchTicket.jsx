import React from "react";
import ScratchCard from "react-scratchcard";
import { useSelector, useDispatch } from "react-redux";
import { giveAway } from "../lib/slices/gameSlice";


function ScratchTicket() {
  const dispatch = useDispatch();
  const prizeImageUrl = useSelector(
    (state) => state.game?.prize?.data?.prizeImageUrl
  );


  const settings = {
    width: 320,
    height: 441,
    image: "images/scratch.png",
    finishPercent: 50,
    onComplete: () => {
      dispatch(giveAway({ phone: {
        phone: 'test'
      } }));
      // console.log("send sms and register the prize to firebase db");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: "3.5vh",
      }}
    >
      <ScratchCard {...settings}>
        {prizeImageUrl && (
          <img style={{ width: "320px" }} src={prizeImageUrl} />
        )}
      </ScratchCard>
    </div>
  );
}

export default ScratchTicket;
