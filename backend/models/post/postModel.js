import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        // cause: {
        //     type: String,
        //     required: true,
        // },
        causeCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CauseCategory',
            required: true,
        },
        donationRequired: {
            type: Number,
            required: true,
            default: 0,
        },
        donationReceived: {
            type: Number,
            required: true,
            default: 0,
        },
        verifiedByOrganization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        donors: [
            {
                donor: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Donor',
                    required: true,
                },
                amount: {
                    type: Number,
                    required: true,
                },
            }
        ]
    }
)

export const Post = mongoose.model("Post", postSchema);