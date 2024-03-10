import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
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
        description: {  //(required)
            type: String,
            required: true,
        }
    },
    {
        timestamps:true,  //to save time stamps
    }
)

export const Organization = mongoose.model("Organization", organizationSchema);