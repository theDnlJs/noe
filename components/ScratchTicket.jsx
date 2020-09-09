import React, { useState } from "react";
import ScratchCard from "react-scratchcard";
import { useSelector, useDispatch } from "react-redux";
import { finalAction } from "../lib/slices/gameSlice";
import { useRouter } from "next/router";
import { useWindowSize } from "../src/hooks/useWindowSize";
import Confetti from "react-confetti";
import { init, track } from "fbq";
const pixel = "546570832766228"; // https://facebook.com/business/help/742478679120153
init(pixel);

function ScratchTicket() {
  const [completed, setCompleted] = useState(false);
  const { width, height } = useWindowSize();
  const router = useRouter();
  const dispatch = useDispatch();
  const prizeOwn = useSelector((state) => state.game?.prize);
  const leadPlayed = useSelector((state) => state.game?.lead);
  const settings = {
    width: 320,
    height: 441,
    image: "images/scratch.png",
    finishPercent: 33,
    onComplete: () => {
      track("Lead-Submotted-Sms-Sent");
      dispatch(finalAction({ leadPlayed, prizeOwn }));
      setCompleted(true);
      setTimeout(() => {
        window.location.assign("https://www.facebook.com/mainstreamb7/?ti=as");
      }, 10000);
    },
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: "1vh",
        textAlign: "right",
      }}
    >
      <Confetti run={completed} width={width} height={height} />
      <ScratchCard style={{ position: "static" }} {...settings}>
        {prizeOwn && (
          <img alt="azahen" style={{ width: "320px" }} src={prizeOwn.imgUrl} />
        )}
      </ScratchCard>
    </div>
  );
}

export default ScratchTicket;
