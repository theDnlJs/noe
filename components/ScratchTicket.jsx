import React from "react";
import ScratchCard from "react-scratchcard";
import { useSelector } from "react-redux";
const settings = {
  width: 320,
  height: 441,
  image: "images/scratch.png",
  finishPercent: 50,
  onComplete: () =>
    console.log("send sms and register the prize to firebase db"),
};

function ScratchTicket() {
  const prizeImageUrl = useSelector(
    (state) => state.game?.prize?.data?.prizeImageUrl);
  console.log(prizeImageUrl);
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
