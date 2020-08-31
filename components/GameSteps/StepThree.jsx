import React, { useEffect } from "react";
import useSWR from 'swr';
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useSpring, animated } from "react-spring";
import { Animated } from "react-animated-css";
import Typography from "@material-ui/core/Typography";
import { increment } from "../../lib/slices/gameSlice";
import ScratchTicket from "../ScratchTicket";
import { setPrzie } from '../../lib/slices/gameSlice'

const fetcher = (url) => fetch(url).then((r) => r.json());
function StepThree() {
  const dispatch = useDispatch();
  function dispatchIncrement() {
    dispatch(increment());
  }
  return (
    <div className="container">
      <Grid container>
        <Grid item xs={12}>
          <div style={{ width: "100%" }}>
            <ScratchTicket />
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginTop: "3vh",
            }}
          >
            <Typography variant="subtitle1">
              <span
                style={{
                  color: "black",
                  fontWeight: "300",
                  fontFamily: "Rubik",
                }}
              >
                יש לגרד את האיזור הכסוף מעלה באמצעות
                <br />
                האצבע עד לחשיפה מלאה
              </span>
            </Typography>
          </div>
        </Grid>
      </Grid>
      {/* styles */}
      <style jsx>{`
        .container {
          background: url("images/yellow-bg.png");
          background-size: cover;
          min-height: 100vh;
          width: 100%;
          padding: 0;
        }
        .concept {
          display: flex;
          flex-direction: column;
          justify: center;
          align-items: center;
          justify-items: center;
          justify-content: center;
          justify-self: center;
          margin: 0 auto;
        }
        .concept-logo {
          width: 65%;
          margin-top: -7vh;
        }
        .hand-img {
          width: 90.5%;
          margin-top: 6vh;
        }
      `}</style>
    </div>
  );
}

export default StepThree;
