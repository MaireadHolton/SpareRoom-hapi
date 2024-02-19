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
        college: "SETU",
        latitude: "52.25",
        longitude: "-7.14",
        description: "Double room, ensuite available. Sharing with a couple, all common areas available for use",
        rules: "Pets welcome, keep noise down after 11pm",
        price: 370,
        available: "2024-02-29",
        advertiser: "->users.mary"
      },
      two: {
        firstName: "Barabara",
        college: "NUIG",
        latitude: "53.28",
        longitude: "-9.07",
        description: "single bed, shared bathroom available in close prxoimity to NUIG",
        rules: "No smoking, no parties, no overnight guests",
        price: 315,
        available: "2024-02-01",
        advertiser: "->users.barbara"
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