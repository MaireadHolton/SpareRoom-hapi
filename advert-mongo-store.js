import { Advert } from "./advert.js"

export const advertMongoStore = {
    async getAllAdverts() {
        const adverts = await Advert.find().lean();
        return adverts;
    },

async advert(firstname, college, latitude, longitude, description, rules, price, available, advertiser) {
    const newAdvert = new Advert({
        firstname,
        college,
        latitude,
        longitude,
        description,
        rules,
        price,
        available,
        advertiser: advertiser._id
    });
    await newAdvert.save();
    return newAdvert;
},

async deleteAll() {
    await Advert.deleteMany({});
},
};