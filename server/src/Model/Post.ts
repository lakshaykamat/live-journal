import mongoose from "mongoose";
import User from "./User";

const PostSchema = new mongoose.Schema({
    user_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    title: {
      type: String,
      required: true,
      maxlength:50
    },
    content: {
      type: String,
      required: true,
    },
    date:{
      type:String,
      required:true
    }
  }, {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  });

export default mongoose.model('Post', PostSchema);
