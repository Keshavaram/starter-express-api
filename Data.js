const Restaurants_data = [
    {
        id: 1,
        name: "Meghana Foods",
        rating: 4.6,
        cuisine: "South Indian, Sea Food, North Indian",
        eta: 50,
        price: 500,
        image: "meghana_foods.jpg",
        address: "No.90/4, SONY WORLD BUILDING, Dr Puneeth Rajkumar Rd, Marathahalli, Bengaluru, Karnataka 560037"
    },
    {
        id: 2,
        name: "Chai Point",
        rating: 3.1,
        cuisine: "South Indian, Sea Food, North Indian",
        eta: 20,
        price: 100,
        image: "tea.jpg",
        address: "7th Block, 519-523, 33rd Cross Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011"
    },
    {
        id: 3,
        name: "Asha Tiffins",
        rating: 2.8,
        cuisine: "South Indian, Sea Food, North Indian",
        eta: 50,
        price: 200,
        image: "tiffin.jpg",
        address: "560078, 5, Dr Puneeth Rajkumar Rd, Teachers Colony, Bendre Nagar, Bengaluru, Karnataka 560078"
    },
    {
        id: 4,
        name: "Venezia",
        rating: 4.7,
        cuisine: "American,",
        eta: 60,
        price: 1500,
        image: "clam.jpg",
        address: "40, St Mark's Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001"
    },
    {
        id: 5,
        name: "Ha Ri Ken",
        rating: 2.4,
        cuisine: "Korean",
        eta: 45,
        price: 650,
        image: "Ha_Ri_ Ken.jpg",
        address: "No. 20, 2nd Floor, Paul Castle, Castle St, near Brigade Tower, Ashok Nagar, Bengaluru, Karnataka 560025"
    },
    {
        id: 6,
        name: "Beijing Da Dong 大董烤鸭店",
        rating: 4.3,
        cuisine: "Chinese",
        eta: 45,
        price: 2000,
        image: "Beijing Da Dong 大董烤鸭店.jpg",
        address: "2nd floor, 134, 17th H Main Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095"
    },
    {
        id: 7,
        name: "Woo Lae Oak (Ulaeog) 우래옥",
        rating: 4.5,
        cuisine: "Korean",
        eta: 65,
        price: 2000,
        image: "Woo Lae Oak (Ulaeog) 우래옥.jpg",
        address: "N.K Enclave Building, 4th Cross, 13, Kammanahalli Main Rd, Opposite Himalaya Store, Chinnappa Layout, Kammanahalli, Bengaluru, Karnataka 560084"
    },
    {
        id: 8,
        name: "Thai Garden",
        rating: 4.2,
        cuisine: "Thai",
        eta: 45,
        price: 1750,
        image: "Thai Garden.jpg",
        address: "840A, 100 Feet Rd, Indira Nagar 1st Stage, H Colony, Indiranagar, Bengaluru, Karnataka 560038"
    },
    {
        id: 9,
        name: "Udupi garden",
        rating: 4.6,
        cuisine: "South Indian",
        eta: 25,
        price: 250,
        image: "Udupi garden.jpg",
        address: "24th Main Rd, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102"
    },
    {
        id: 10,
        name: "Fried Kitchen",
        rating: 3.2,
        cuisine: "American",
        eta: 25,
        price: 350,
        image: "Fried Kitchen.jpg",
        address: "No.36, 1st Floor, 80 Feet Road, 14th Main Rd, beside Mc Donald's, Sector 7, HSR Layout, Bengaluru, Karnataka 560102"
    },
    {
        id: 11,
        name: "Al Daaz",
        rating: 4.6,
        cuisine: "Arabian",
        eta: 45,
        price: 750,
        image: "Al_Daaz.jpg",
        address: "64 & 65, 27th Main Rd, Phase 3, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"
    },
    {
        id: 12,
        name: "Kaitenzushi",
        rating: 4.7,
        cuisine: "Japanese",
        eta: 60,
        price: 2250,
        image: "Kaitenzushi.jpg",
        address: "4th Floor, Devatha Plaza, 131, Residency Rd, Ashok Nagar, Bengaluru, Karnataka 560025"
    },
    {
        id: 13,
        name: "Popeyes",
        rating: 4.1,
        cuisine: "American",
        eta: 35,
        price: 1250,
        image: "Popeyes.jpg",
        address: "7th Block, 9, 20th Main Rd, KHB Colony, 7th Block, Koramangala, Bengaluru, Karnataka 560034"
    },
    {
        id: 14,
        name: "julien resto",
        rating: 4.0,
        cuisine: "French",
        eta: 45,
        price: 2000,
        image: "julien resto.jpg",
        address: "No.66/1, Shop No.12, High Street @ Miraya Rose By UKn, Varthur Rd, Siddapura, Whitefield, Bengaluru, Karnataka 560066"
    },
    {
        id: 15,
        name: "Cafe Noir",
        rating: 4.1,
        cuisine: "French",
        eta: 50,
        price: 1250,
        image: "Cafe Noir.jpg",
        address: "UB City, Unit No 206, The Collection, No 24, Vittal Mallya Rd, Bengaluru, Karnataka 560001"
    },
    {
        id: 16,
        name: "Vito Marcello's Italian Bistro",
        rating: 4.6,
        cuisine: "Italian",
        eta: 30,
        price: 2000,
        image: "italian.jpg",
        address: "960, 12th Main Rd, near Gold Gym, HAL 2nd Stage, Doopanahalli, Indiranagar, Bengaluru, Karnataka 560038"
    },
    {
        id: 17,
        name: "cassa melo",
        rating: 3.5,
        cuisine: "French",
        eta: 35,
        price: 1300,
        image: "cassa melo.jpg",
        address: "16/2, 2nd Cross Near-ICICI Bank ATM, Ramaiah Layout, Kammanahalli, Bengaluru, Karnataka 560084"
    },
    {
        id: 18,
        name: "Punjabi Rasoi",
        rating: 3.9,
        cuisine: "North Indian",
        eta: 40,
        price: 900,
        image: "punjabi.jpg",
        address: "1082, 18th Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka 560102"
    },
    {
        id: 19,
        name: "La Cafe",
        rating: 3.5,
        cuisine: "French",
        eta: 25,
        price: 800,
        image: "cafe.JPG",
        address: "2984, 12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038"
    },
    {
        id: 20,
        name: "Andhra Spice",
        rating: 4.3,
        cuisine: "South Indian",
        eta: 50,
        price: 1250,
        image: "Andhra.JPG",
        address: "Residency Rd, near galaxi theater, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560027"
    }

]

