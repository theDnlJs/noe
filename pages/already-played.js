import React, {useEffect} from "react";
import useSWR from 'swr';

import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

import LeadForm from "../LeadForm";

import { increment,setPrzie } from "../../lib/slices/gameSlice";

const fetcher = (url) => fetch(url).then((r) => r.json());
function StepTwo() {
  const dispatch = useDispatch()

  function dispatchIncrement() {
    dispatch(increment());
  }
  return (
    <Fade in timeout={500}>
      <div className="container">
        <div className="overlay">
          <div>
            <Typography variant="h2">
              <span
                style={{
                  color: "#ffd700",
                  fontWeight: "700",
                  fontFamily: "Rubik",
                }}
              >
                רגע גבר!
              </span>
            </Typography>
            <Typography variant="h4">
              <span
                style={{
                  color: "white",
                  fontWeight: "300",
                  fontFamily: "Rubik",
                }}
              >
                נראה שכבר שיחקת
              </span>
            </Typography>
            <Typography variant="h4" gutterBottom>
              <span
                style={{
                  color: "white",
                  fontWeight: "300",
                  fontFamily: "Rubik",
                }}
              >
              </span>
            </Typography>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12}>
            <img className="hand-img" src="images/hand.png" />
          </Grid>
        </Grid>
        {/* styles */}

        <style jsx>{`
          h1 {
            color: gold;
          }
          h3 {
            color: white;
          }
          .container {
            background-image: url("images/bg1.png");
            background-size: cover;
            min-height: 100vh;
            padding: 0;
            z-index: 1;
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
          .overlay {
            background: #000000de;
            z-index: 2;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }
          .hand-img {
            width: 87.5%;
            margin-top: 6vh;
          }
        `}</style>
      </div>
    </Fade>
  );
}

export default StepTwo;
