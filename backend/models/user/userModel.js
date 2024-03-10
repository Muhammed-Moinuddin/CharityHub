import mongoose from "mongoose";

//creating a user schema having name, email, bio, and timestamp
const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: false,
        },
        last_name: {
            type: String,
            required: false,
        },
        email: { //(required and should be unique)
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        bio: { // or description
            type: String,
            required: false,
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Role'
            }
        ],
    },
    {
        timestamps: true,  //to save time stamps
    }
)
//exporting the model
export const User = mongoose.model("User", userSchema);