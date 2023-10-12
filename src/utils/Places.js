const amritsarPlaces = [
    {
        id: "amritsar_1",
        name: "Golden Temple",
        rating: 5,
        description: "The spiritual and cultural heart of Sikhism, a place of calm and serenity.",
        timeToTravel: "15 minutes",
        cost: 0
    },
    {
        id: "amritsar_2",
        name: "Jallianwala Bagh",
        rating: 4.5,
        description: "Historical site of the tragic 1919 massacre, a symbol of India's struggle for freedom.",
        timeToTravel: "10 minutes",
        cost: 0
    },
    {
        id: "amritsar_3",
        name: "Wagah Border",
        rating: 4.7,
        description: "Famous border crossing ceremony between India and Pakistan, showcasing patriotism.",
        timeToTravel: "45 minutes",
        cost: 0
    },
    {
        id: "amritsar_4",
        name: "Durgiana Temple",
        rating: 4.4,
        description: "A Hindu temple complex with beautiful architecture and religious significance.",
        timeToTravel: "20 minutes",
        cost: 0
    },
    {
        id: "amritsar_5",
        name: "Partition Museum",
        rating: 4.6,
        description: "Museum depicting the stories and artifacts from the partition of India in 1947.",
        timeToTravel: "15 minutes",
        cost: 150
    }
];

const goaPlaces = [
    {
        id: 1,
        name: "Baga Beach",
        rating: 4.7,
        description: "One of the most popular and lively beaches in Goa, known for its vibrant nightlife and water sports.",
        timeToTravel: "30 minutes",
        cost: 100
    },
    {
        id: 2,
        name: "Calangute Beach",
        rating: 4.5,
        description: "The largest beach in North Goa, famous for its scenic beauty, water activities, and beach shacks.",
        timeToTravel: "35 minutes",
        cost: 0
    },
    {
        id: 3,
        name: "Dudhsagar Waterfalls",
        rating: 4.8,
        description: "A majestic four-tiered waterfall located in the Bhagwan Mahavir Wildlife Sanctuary, offering a breathtaking natural spectacle.",
        timeToTravel: "2 hours (by trek) or 1 hour (by Jeep safari)",
        cost: 400
    },
    {
        id: 4,
        name: "Fort Aguada",
        rating: 4.6,
        description: "A well-preserved 17th-century Portuguese fort offering panoramic views of the Arabian Sea and the surrounding landscape.",
        timeToTravel: "40 minutes",
        cost: 0
    },
    {
        id: 5,
        name: "Anjuna Flea Market",
        rating: 4.4,
        description: "A vibrant market offering a wide range of goods including clothes, jewelry, accessories, and souvenirs, representing Goa's bohemian culture.",
        timeToTravel: "25 minutes",
        cost: 150
    }
];

const jaipurPlaces = [
    {
        id: 1,
        name: "Amber Fort",
        rating: 4.7,
        description: "A majestic fort built with white marble and red sandstone, offering stunning architecture and panoramic views of the surrounding area.",
        timeToTravel: "30 minutes",
        cost: 200
    },
    {
        id: 2,
        name: "Hawa Mahal",
        rating: 4.5,
        description: "A unique five-story palace with intricate latticework windows, designed to allow royal ladies to observe everyday life without being seen.",
        timeToTravel: "10 minutes",
        cost: 50
    },
    {
        id: 3,
        name: "City Palace",
        rating: 4.8,
        description: "A magnificent royal residence featuring courtyards, gardens, and museums, showcasing Jaipur's rich history and culture.",
        timeToTravel: "15 minutes",
        cost: 200
    },
    {
        id: 4,
        name: "Jantar Mantar",
        rating: 4.6,
        description: "A UNESCO World Heritage Site, housing a collection of astronomical instruments, demonstrating the scientific prowess of ancient India.",
        timeToTravel: "10 minutes",
        cost: 50
    },
    {
        id: 5,
        name: "Nahargarh Fort",
        rating: 4.4,
        description: "Perched on the Aravalli Hills, this fort offers panoramic views of the Pink City and is known for its architectural grandeur.",
        timeToTravel: "45 minutes",
        cost: 200
    }
];

export const Places = [
    {
        city: "Amritsar",
        state: "Punjab",
        country: "India",
        places: amritsarPlaces,
        location: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.38882680262!2d74.78771785105128!3d31.63351768912851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1697082060672!5m2!1sen!2sin" className='w-full h-full border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        city: "Goa",
        state: "Goa",
        country: "India",
        places: goaPlaces,
        location: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984962.9479000516!2d73.34714163766012!3d15.348759416018693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1697092917020!5m2!1sen!2sin" className='w-full h-full border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        places: jaipurPlaces,
        location: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.0532203592!2d75.625741957292!3d26.885115139934676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1697092953100!5m2!1sen!2sin" className='w-full h-full border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    },
];

export const MealCost = [
    {
        type: "breakfast",
        cheap: 60,
        mid: 90,
        high: 110
    },
    {
        type: "lunch",
        cheap: 90,
        mid: 145,
        high: 170
    },
    {
        type: "dinner",
        cheap: 120,
        mid: 200,
        high: 300
    }
];