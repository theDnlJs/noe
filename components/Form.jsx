import { useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";


const Form = ({
  prizeForm: { name, desc, imgUrl, chances, quantity, smsTemplate },
}) => {
  const { register, handleSubmit, watch, errors } = useForm();  
  const [message, setMessage] = useState("");
  const [images, setImages] = useState(imgUrl);

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {

    console.log("====================================");
    try {
      const res = await Axios.put(`/api/prizes/${id}`, form);
      console.log(res)
    } catch (error) {
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
     <h1>chec</h1>
    </div>
  );
};

export default Form;
