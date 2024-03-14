export const seedData = {
    users: {
      _model: "User",
      jack: {
        firstName: "Jack",
        lastName: "Brown",
        email: "jackbrown@mail.com",
        password: "secret",
        role: "Student"
      },
      mary: {
        firstName: "Mary",
        lastName: "White",
        email: "marywhite@mail.com",
        password: "secret123",
        role: "Homeowner"
      },
      barbara: {
        firstName: "Barbara",
        lastName: "Black",
        email: "barbarablack@mail.com",
        password: "secret456",
        role: "Homeowner"
      },
    },
    adverts: {
      _model: "Advert",
      one: {
        firstName: "Mary",
        contactEmail: "marywhite@mail.com",
        college: "SETU",
        lat: 52.25,
        lng: -7.14,
        description: "Double room, ensuite available. Sharing with a couple, all common areas available for use",
        rules: "Pets welcome, keep noise down after 11pm",
        price: 370,
        available: "2024-02-29",
        img: "https://firebasestorage.googleapis.com/v0/b/spareroom-414816.appspot.com/o/images%2F1710448632063_bedroom3.jpg?alt=media&token=371449c1-7113-4dc5-baf6-24e1ce590e05",
        advertiser: "->users.mary",
      },
      two: {
        firstName: "Barabara",
        contactEmail: "barbarablack@mail.com",
        college: "NUIG",
        lat: 53.28,
        lng: -9.07,
        description: "single bed, shared bathroom available in close prxoimity to NUIG",
        rules: "No smoking, no parties, no overnight guests",
        price: 315,
        available: "2024-02-01",
        img: "https://firebasestorage.googleapis.com/v0/b/spareroom-414816.appspot.com/o/images%2F1710448756848_room.jpg?alt=media&token=920b14c5-85db-497b-8ade-40238659bdc2",
        advertiser: "->users.barbara",
      }
    },
    studentDetails: {
      _model: "StudentDetail",
      one: {
        firstName: "Jack",
        college: "UCD",
        year: 2,
        information: "22 year old student looking for a double room ensuite close to UCD. I will be on placement over the summer period so only require the room for 5 months",
        student: "->users.jack"
      },
    },
  };