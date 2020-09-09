import React, { useEffect } from "react";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useSpring, animated } from "react-spring";
import { Animated } from "react-animated-css";
import Appbar from "../Appbar";
import Typography from "@material-ui/core/Typography";
import {
  increment,
  setPrzie,
  setTosstedState,
} from "../../lib/slices/gameSlice";
import ScratchTicket from "../ScratchTicket";
import axios from "axios";
import { useState } from "react";
function StepThree() {
  const dispatch = useDispatch();
  const [tossted, setTossted] = useState({});
  useEffect(() => {
    dispatch(setTosstedState());
  }, []);
  return (
    <div className="container">
      <Appbar />
      <Grid container>
        <Grid item xs={12}>
          <div className="scratch-saction">
          {tossted && (
              <ScratchTicket tossted={tossted} />
              )}
              </div>
      
            <Typography variant="subtitle1">
              <span
                style={{
                  color: "black",
                  fontWeight: "300",
                }}
              >
                יש לגרד את האיזור הכסוף מעלה באמצעות
                <br />
                האצבע עד לחשיפה מלאה
              </span>
            </Typography>
        </Grid>
      </Grid>
      {/* styles */}
      <style jsx>{`
      .scratch-saction {
        
      }
        .container {
          background: url("images/yellow-bg.png");
          background-size: cover;
          min-height: 100vh;
          width: 100%;
          padding: 0;
          position: fixed;
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
