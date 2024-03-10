import mongoose from mongoose;

//creating a donor schema having name, email, bio, and timestamp
const donorSchema = new mongoose.Schema(
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
        timestamps: true,
    }
)

//exporting the model
export const Donor = mongoose.model("Donor", donorSchema);