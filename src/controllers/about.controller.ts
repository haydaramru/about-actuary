// import modules
import { aboutServices } from "../services/about.service";
import { Request, Response } from "express";
import { aboutSchemaValidate } from "../models/about";

class aboutController {
    
    // add about us controller
    addAbout = async (req: Request, res: Response) => {
        
        // data to be saved in database
        const data = {
            description: req.body.description,
            published: req.body.published
        }

        // validating the request
        const { error, value } = aboutSchemaValidate.validate(data);

        if(error) {
            res.send(error.message);
        } else {
            // call the create post function in the service and pass the data from the request
            const product = await aboutServices.createAbout(value)
            res.status(201).send(product)
        }
    }

    // get all part of about us text
    getAllAbout = async (req: Request, res: Response) => {
        const products = await aboutServices.getAllAbout();
        res.send(products);
    }

    // get a single part of about us text
    getAbout = async (req: Request, res: Response) => {
        // get id from the parameter
        const id = req.params.id;
        const testimonial = await aboutServices.getAbout(id);
        res.send(testimonial)
    }

    // update about us text
    updateAbout = async (req: Request, res: Response) => {
        const id = req.params.id;
        const testimonial = await aboutServices.updateAbout(id, req.body);
        res.send(testimonial)
    }

    // delete about us text
    deleteAbout = async (req: Request, res: Response) => {
        const id = req.params.id;
        await aboutServices.deleteAbout(id)
        res.send("Text deleted")
    }
}

// export class
export const AboutController = new aboutController();