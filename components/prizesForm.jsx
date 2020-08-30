import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { increment } from "../lib/slices/gameSlice";
function PrizesForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(true);
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await fetch("/api/leads/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        dispatch(increment());
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(errors.name);
  console.log(watch("example"));
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main style={{ marginTop:'10vh' }}>
          <TextField
            name="Prizename"
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              fontFamily: "Rubik",
              width: "100%",
              error: errors.Prizename,
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
          {errors.Prizename ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )}
          <TextField
            name="prizeDesc"
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              fontFamily: "Rubik",
              width: "100%",
              error: errors.prizeDesc,
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
          {errors.prizeDesc ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )}

          <TextField
            name="prizeChance"
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              fontFamily: "Rubik",
              width: "100%",
              error: errors.prizeChance,
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
          {errors.prizeChance ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )}

          <TextField
            name="prizeQuantity"
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              fontFamily: "Rubik",
              width: "100%",
              error: errors.prizeQuantity,
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
          {errors.prizeQuantity ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )}
          <TextField
            name="prizeImageUrl"
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              fontFamily: "Rubik",
              width: "100%",
              error: errors.prizeImageUrl,
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
          {errors.prizeImageUrl ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )}
          <TextField
            style={{
              color: "white",
              fontWeight: "300",
              fontFamily: "Rubik",
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
            id="outlined-basic"
            label="מספר נייד"
            variant="outlined"
          />
          {errors.phone ? (
            <span className="error-message">אנא הזן מספר טלפון תיקני</span>
          ) : (
            <span className="error-message"></span>
          )}
          <TextField
            name="name"
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              fontFamily: "Rubik",
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
              fontFamily: "Rubik",
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
            id="outlined-basic"
            label="מספר נייד"
            variant="outlined"
          />
          {errors.phone ? (
            <span className="error-message">אנא הזן מספר טלפון תיקני</span>
          ) : (
            <span className="error-message"></span>
          )}
        </main>
        <div style={{ display:'flex' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!!!checked}
            style={{
              margin: "0 auto",
              color: "gold",
              minWidth: "70%",
              marginTop: "7vh",
              marginBottom: "10vh",
              padding: "1rem",
              fontSize: "2rem",
              borderRadius: "20px",
              justifySelf: "center",
            }}
          >
            {`שלח`}
          </Button>
        </div>

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
            background-size: cover;
            height: 800px;
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
            width: 87.5%;
            margin-top: 6vh;
          }
        `}</style>
      </form>
    </>
  );
}

export default PrizesForm;
