import { Advert } from "./advert.js"

export const advertMongoStore = {
    async getAllAdverts() {
        const adverts = await Advert.find().populate("advertiser").lean();
        console.log("Fetched adverts: ", adverts);
        return adverts;
    },

    async getAdvertById(id) {
        const advert = await Advert.findOne({_id: id}).lean();
        return advert;
    },

    async makeAdvert(firstName, contactEmail, college, lat, lng, description, rules, price, available, advertiser, advertiserEmail, img) {
        const newAdvert = new Advert({
            firstName,
            contactEmail,
            college,
            lat,
            lng,
            description,
            rules,
            price,
            available,
            advertiser: advertiser._id,
            advertiserEmail: advertiser.email,
            img
        });
        await newAdvert.save();
        return newAdvert;
    },

    async updateAdvert(advert, updatedAdvert) {
        advert.firstName = updatedAdvert.firstName;
        advert.contactEmail = updatedAdvert.contactEmail
        advert.college = updatedAdvert.college;
        advert.lat = updatedAdvert.lat;
        advert.lng = updatedAdvert.lng;
        advert.description = updatedAdvert.description;
        advert.rules = updatedAdvert.rules;
        advert.price = updatedAdvert.price;
        advert.available = updatedAdvert.available;
        advert.advertiser = updatedAdvert.advertiser;
        advert.img = updatedAdvert.img;
        await advert.save();
    },

    async deleteAll() {
        await Advert.deleteMany({});
    },
};