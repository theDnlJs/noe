import mongoose from "mongoose";

/* leads will correspond to a collection in your MongoDB database. */
const PrizeSchema = new mongoose.Schema({
  name: {
    /* The name of this leads */
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  desc: {
    type: String,
    required: [true, "Please enter Name"],
  },
  imgUrl: {
    type: String,
    required: [true, "Please enter Name"],
  },
  chances: {
    type: Number,
    required: [true, "Please enter Name"],
  },
  desc: {
    type: String,
    required: [true, "Please enter Name"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter quantity"],
  },
  leads: {
    type: Array,
  },
  smsTemplate : {
    type: String,
  }
});

export default mongoose.models.Prize || mongoose.model("Prize", PrizeSchema);
