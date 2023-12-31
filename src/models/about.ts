// importing modules
import { Schema, model } from "mongoose";
import Joi from "joi";

// validation schema
export const aboutSchemaValidate = Joi.object({
    description: Joi.string().required(),
    published: Joi.boolean().required()
});

// creating an interface
interface aboutInterface {
    description: string,
    published: boolean
};

// schema
const aboutSchema = new Schema<aboutInterface>({
    description: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    }
});

// creating a model
export const About = model<aboutInterface>("About", aboutSchema);