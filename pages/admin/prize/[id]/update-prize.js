import { useRouter } from "next/router";
import useSWR from "swr";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useForm } from "react-hook-form";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPrize = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState()
  const [error, setError] = useState()
  const router = useRouter();
  const { id } = router.query;
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
  const onSubmit = async (formData) => {
    console.log(formData,'test');
    try {
      const res = await axios.put(`/api/prizes/${id}`, formData);
      console.log(formData);
      if (res.status === 200) {
        alert("success");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
      alert("error");
    }
  };
  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <Fade in timeout={500}>
      <div className="container">
        <div style={{ marginTop: "5vh" }}>
          <Typography variant="h5">
            <span
              style={{
                color: "white",
                fontWeight: "300",
                fontFamily: "Rubik",
              }}
            >
              עדכון פרטי פרס
            </span>
          </Typography>
        </div>
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <main style={{ marginTop: "10vh" }}>
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
                }}
                defaultValue={data.name}
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
                name="desc"
                defaultValue={data.desc}
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
                defaultValue={data.chances}
                name="chances"
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
                name="quantity"
                defaultValue={data.quantity}
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
                defaultValue={data.imgUrl}
                style={{ display: "none" }}
                name="imgUrl"
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
          </form>
        </>
        {/* styles */}
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
          ,
          h1 {
            color: gold;
          }
          h3 {
            color: white;
          }
          .container {
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

          .hand-img {
            width: 87.5%;
            margin-top: 6vh;
          }
        `}</style>
      </div>
    </Fade>
  );
};

export default EditPrize;