import { Advert } from "./advert.js"

export const advertMongoStore = {
    async getAllAdverts() {
        const adverts = await Advert.find().lean();
        return adverts;
    },

async advert(firstname, college, description, rules, price, available) {
    const newAdvert = new Advert({
        firstname,
        college,
        description,
        rules,
        price,
        available,
    });
    await newAdvert.save();
    return newAdvert;
},

async deleteAll() {
    await Advert.deleteMany({});
},
};