import { useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const Form = ({
  prizeForm: { name, desc, imgUrl = "", chances, quantity, smsTemplate },
}) => {
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit, watch, errors } = useForm();
  const [message, setMessage] = useState("");
  const [images, setImages] = useState(imgUrl);

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    console.log("====================================");
    try {
      const res = await Axios.put(`/api/prizes/${id}`, form);
      console.log(res);
      router.push('/admin/prize-table')
    } catch (error) {
      console.log(error);
      setMessage("Failed to update pet");
    }
  };

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  //   const formValidate = () => {
  //     let err = {}
  //     if (!form.name) err.name = 'Name is required'
  //     if (!form.owner_name) err.owner_name = 'Owner is required'
  //     if (!form.species) err.species = 'Species is required'
  //     if (!form.image_url) err.image_url = 'Image URL is required'
  //     return err
  //   }
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
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ backgroundColor: "black" }} className="container">
      <br />
      <hr />
      <h2 style={{ color: "white", textAlign: "center" }}>טופס עריכת פרס</h2>
      <hr />
      <br />
      <form onSubmit={handleSubmit(putData)}>
        <main style={{ marginTop: "10vh" }}>
          <TextField
            name="name"
            defaultValue={name}
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              width: "100%",
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
            name="desc"
            defaultValue={desc}
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
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
          {/* 100 = נדיר מאוד 50 = נדיר 1 = שכיח
          <Select
            name="chances"
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              fontWeight: "300",
              width: "100%",
            }}
            defaultValue={chances}
            inputRef={register({
              required: true,
            })}
            id="outlined-basic"
            label="סיכוי"
            variant="outlined"
          >
            <MenuItem value={100}>שכיח</MenuItem>
            <MenuItem value={50}>נדיר</MenuItem>
            <MenuItem value={1}>נדיר מאוד</MenuItem>
            <MenuItem value={chances}></MenuItem>
          </Select> */}
          {/* {errors.prizeChance ?  (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )} */}

          <FormControl
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "black",
              fontWeight: "300",
              width: "100%",
            }}
          >
            <FormHelperText>סיכוי</FormHelperText>
            <NativeSelect
              defaultValue={chances}
              name="age"
              inputProps={{ "aria-label": "chances" }}
            >
              <option value={1}>נדיר מאוד</option>
              <option value={50}>נדיר</option>
              <option value={100}>שכיח</option>
            </NativeSelect>
          </FormControl>
          <TextField
            type="number"
            name="quantity"
            defaultValue={quantity}
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
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
          <TextField
            name="smsTemplate"
            defaultValue={smsTemplate}
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              border: "none",
              marginTop: "0.75rem",
              color: "white",
              fontWeight: "300",
              width: "100%",
            }}
            inputRef={register({
              required: true,
            })}
            id="outlined-basic"
            label="הודעת סמס"
            variant="outlined"
          />
          {/* {errors.prizeQuantity ? (
            <span className="error-message">יש להזין שם מלא</span>
          ) : (
            <span className="error-message"></span>
          )} */}
          <TextField
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
            <img  alt="azahen" style={{ width: "100%" }} src={images} />
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
            style={{
              backgroundColor: "gold",
              margin: "0 auto",
              color: "black",
              minWidth: "70%",
              marginTop: "7vh",
              marginBottom: "10vh",
              padding: "1rem",
              fontSize: "2rem",
              borderRadius: "20px",
              justifySelf: "center",
            }}
          >
            {`שמור שינויים`}
          </Button>
        </div>
      </form>

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
          background-size: cover;
          height: 100%;
          width: 100vw;
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
    </div>
  );
};

export default Form;
