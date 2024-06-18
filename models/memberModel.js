import { Schema, model, models } from "mongoose";

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Member = models.Member || model("Member", memberSchema);

export default Member;