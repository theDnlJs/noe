import axios from 'axios'
import { useRouter } from 'next/router'

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch  } from "react-redux";

import { useForm } from "react-hook-form";
import { increment, setLeadState } from "../lib/slices/gameSlice";
import { useState } from "react";

import { init, track } from 'fbq'
const pixel = '546570832766228' // https://facebook.com/business/help/742478679120153
init(pixel)


function LeadForm() {
  const router = useRouter()
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(true);
  const [fetching, setfetching] = useState(false)
  const onSubmit = async (data) => {
    track('Lead-Fill-Form')
    try {
      setfetching(true)
      await axios.post('/api/check', data)
      .then(response => {
        if (response.status === 200) {
          dispatch(setLeadState(data))
          dispatch(increment());
        } 
      }).
      catch( e => {
        let resStatus = e.response?.status;
        if (resStatus === 400){
          router.push('/already-played', '/already-played')
        }
      });
    } catch (error) {
      if (error) {
        console.log({error}, 'check')
      }
      console.error({error}, 'error');
    }
  }
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main>
          <TextField
            name="name"
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              width: "100%",
              error: errors.name,
            }}
            inputRef={register({
              required: true,
              max: 20,
              min: 2,
              maxLength: 20,
            })}
            id="outlined-basic"
            label="שם מלא"
            variant="outlined"
          />
          {errors.name ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )}
          <TextField
            style={{
              color: "white",
              fontWeight: "300",
              backgroundColor: "white",
              borderRadius: "6px",
              marginTop: "1em",
              width: "100%",
            }}
            name="phone"
            inputRef={register({
              required: true,
              pattern: {
                value: /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/i,
                message: "נא להזין מספר טלפון תיקני",
              },
            })}
            type="tel"
            id="outlined-basic"
            label="מספר נייד"
            variant="outlined"
          />
          {errors.phone ? (
            <span className="error-message">אנא הזן מספר טלפון תיקני</span>
          ) : (
            <span className="error-message"></span>
          )}

          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <label>
              {" "}
              אני מסכים{" "}
              <span>
                <a style={{ color: "black" }} href="/takanon.pdf" target="_blank">
                  לתקנון הפעילות
                </a>
              </span>
            </label>
          </div>
        </main>
        {fetching && <Button
          type="submit"
          variant="contained"
          color="default"
          disabled={true}
          style={{
            color: "gold",
            minWidth: "70%",
            marginTop: "3vh",
            marginBottom: "10vh",
            padding: "1rem",
            fontSize: "2rem",
            borderRadius: "20px",
          }}
        >
          {`הפרס שלך מוגרל כעת`}
        </Button>}
        {!fetching && <Button
          type="submit"
          variant="contained"
          color="default"
          disabled={!!!checked}
          style={{
            color: "black",
            minWidth: "70%",
            marginTop: "3vh",
            marginBottom: "10vh",
            padding: "1rem",
            fontSize: "2rem",
            borderRadius: "20px",
          }}
        >
          {`התחל לשחק>`}
        </Button>}

        <style jsx>{`
          .error-message {
            color: red;
            font-weight: 700;
            text-align: right;
          }
          main {
            background-color: gold;
            padding: 1em;
            width: 80%;
            margin: 0 auto;
            border-radius: 12px;
          }
          .container {
            background: url("images/bg1.png");
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
            width: 65vw;
            margin-top: 0
          }
          .hand-img {
            width: 87.5%;
            margin-top: 6vh;
          }
        `}</style>
      </form>
    </>
  );
}

export default LeadForm;
