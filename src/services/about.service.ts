// import module
import { About } from "../models/about";
export class aboutService {

    // create an about us description
    async createAbout(data: any) {
        try {
            const newAbout = await About.create(data);
            return newAbout;
        }
        catch (error) {
            console.log(error);
        }
    }

    // get all about us description
    async getAllAbout() {
        try {
            const allAbout = await About.find({});
            return allAbout;
        }
        catch (error) {
            console.log(error);
        }
    }

    // get a single about us description
    async getAbout(id: string) {
        try {
            const about = await About.findById({_id: id})
            if(!about) {
                return "Product not available :("
            }
            return about
        }
        catch (error) {
            console.log(error);
        }
    }

    // update an about us description
    async updateAbout(id: string, data: any) {
        try {
            // pass the id of the object you want to update
            // data is for the new body you are updating the old one with
            // new:true, so the data being returned, is the updated one
            const aboutz = await About.findByIdAndUpdate({_id: id}, data, {new: true})
            if(!aboutz) {
                return "Text not available :("
            }
            return aboutz
        }
        catch (error) {
            console.log(error);
        }
    }

    // delete by using find by id and delete
    async deleteAbout(id: string) {
        try {
            const about = await About.findByIdAndDelete(id)
            if(!about) {
                return "Text not available :("
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

// export the class
export const aboutServices = new aboutService();