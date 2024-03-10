import mongoose from mongoose;

//creating a user schema having name, email, bio, and timestamp
const userSchema = new mongoose.Schema(
    {
        name: {  //(required and should be unique)
            type: String,
            required: true,
            unique: true,
        },
        email: {  //(required and should be unique)
            type: String,
            required: true,
            unique: true,
        },
        bio: {  //(required)
            type: String,
            required: true,
        }
    },
    {
        timestamps:true,  //to save time stamps
    }
)
//exporting the model
export const User = mongoose.model("User", userSchema);