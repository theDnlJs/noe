import React from "react";
import ScratchCard from "react-scratchcard";
import { useSelector, useDispatch } from "react-redux";
import { finalAction } from "../lib/slices/gameSlice";

function ScratchTicket() {
  const dispatch = useDispatch();
  const prizeOwn = useSelector((state) => state.game?.prize);
  const leadPlayed = useSelector((state) => state.game?.lead);
  const settings = {
    width: 320,
    height: 441,
    image: "images/scratch.png",
    finishPercent: 50,
    onComplete: () => {
      dispatch(finalAction({ leadPlayed, prizeOwn }));
    },
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
        {prizeOwn && <img style={{ width: "320px" }} src={prizeOwn.imgUrl} />}
      </ScratchCard>
    </div>
  );
}

export default ScratchTicket;
