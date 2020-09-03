import mongoose from "mongoose";

/* leads will correspond to a collection in your MongoDB database. */
const LeadSchema = new mongoose.Schema({
  name: {
    /* The name of this leads */

    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  phone: {
    type: String,
    required: [true, "Please enter Name"],
  },
  prize: {
    type: Object,
  },
  compoleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
