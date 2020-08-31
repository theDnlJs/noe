import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { increment } from "../lib/slices/gameSlice";
function PrizesForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(true);
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/prizes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        router.push("/admin", "/admin");
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
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "mainstream");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ada-solutions/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImages(file.secure_url);
    setLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main style={{ marginTop: "10vh" }}>
          <TextField
            name="PrizeName"
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
            })}
            id="outlined-basic"
            label="שם"
            variant="outlined"
          />
          {/* {errors.Prizename ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )} */}
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
            })}
            id="outlined-basic"
            label="תיאור"
            variant="outlined"
          />
          {/* {errors.prizeDesc ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )} */}

          <TextField
            type="number"
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
            })}
            id="outlined-basic"
            label="סיכוי"
            variant="outlined"
          />
          {/* {errors.prizeChance ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )} */}

          <TextField
            type="number"
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
            })}
            id="outlined-basic"
            label="כמות"
            variant="outlined"
          />
          {/* {errors.prizeQuantity ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )} */}
          <TextField
            style={{ display: "none" }}
            name="prizeImageUrl"
            value={images}
            inputRef={register({
              required: true,
            })}
          />
          <TextField
            type="file"
            name="file"
            placeholder="upload Image"
            onChange={uploadImage}
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
            id="outlined-basic"
            label="תמונה"
            variant="outlined"
          />
          {loading ? (
            <h3>רגע אחי, טוען...</h3>
          ) : (
            <img style={{ width: "320px" }} src={images} />
          )}
          {/* {errors.prizeImageUrl ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )} */}
        </main>
        <div style={{ display: "flex" }}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
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
