import star1 from "../../public/m31-1hr.png"
import star2 from "../../public/Sirius-BlueWhite.jpg"
import star3 from"../../public/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL0FyY3R1cnVzLTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=-2.webp"
import star5 from"../../public/AdobeStock_312129542-scaled.jpeg"
import star4 from"../../public/FZAUArpUUAA4o7w.jpeg"
import star6 from"../../public/3840.jpg.webp"
import star7 from"../../public/Aldebaran-star.webp"
import star8 from"../../public/spica.jpg"
import star9 from"../../public/pollux.jpg"
import star10 from"../../public/canopus-star.webp"
const StarInfo = [
    {
        id: 1,
        name: "M31-V1",
        price: 2999.99,
        description: "M31-V1, also known as Andromeda I, is a variable star located in the Andromeda Galaxy (M31), which is the closest spiral galaxy to our Milky Way. This star has captivated astronomers with its unique behavior. It belongs to the category of variable stars, meaning that its brightness fluctuates over time. Andromeda I is estimated to be approximately 10 billion years old, making it one of the older stars in the Andromeda Galaxy. Its age suggests that it formed during the early stages of the universe. This star's variability is of particular interest to astronomers as it provides insights into its internal processes and evolution. As Andromeda I twinkles in the cosmic tapestry of the Andromeda Galaxy, its variable nature serves as a reminder of the dynamic and ever-changing nature of the universe. Observations of stars like Andromeda I help scientists unravel the mysteries of stellar evolution and the history of galaxies.",
        type: "Variable Star",
        age: "2 billion years old", 
        distance: "2.537 million light-years", 
        imageUrl: star1, 
        
      },
      {
        id: 2,
        name: "Sirius",
        price: 499.99,
        description: "Sirius is the brightest star seen from Earth with a visual magnitude of -1.46. It's a binary star, meaning it consists of two stars orbiting each other",
        type: "Binary star",
        age: "200-300 million years", 
        distance: "8.6 lightyears", 
        imageUrl: star2,
        
      },
      {
        id: 3,
        name: "Arcturus",
        price: 229.99 ,
        description: "Arcturus is a red giant star located in the Northern Hemisphere's spring sky. It's part of the constellation Boötes and is one of the brightest stars visible from Earth. Arcturus is approximately 37 light-years away from us and is an older star, having already exhausted the hydrogen at its core and expanded in size.",
        type: "Red Giant Star",
        age: "7.1 billion years", 
        distance: "37 light-years",
        imageUrl: star3,
      },
      {
        id: 4,
        name: "Vega",
        price: 49.99,
        description: "Vega is the fifth-brightest star in the night sky and the second-brightest star in the Northern Hemisphere. Located about 25 light-years from Earth, it's part of the constellation Lyra. Vega is notable for being the most studied star apart from the Sun and is relatively young at around 455 million years old.",
        type: "Main Sequence Star",
        age: "455 million years",
        distance: "25 light-years",
        imageUrl: star4,
      },
      {
        id: 5,
        name: "Betelgeuse",
        price: 49.99,
        description: "Betelgeuse is a well-known red supergiant star located in the constellation Orion. It is one of the largest stars visible to the naked eye and is estimated to be 642.5 light-years away from Earth. Betelgeuse is reaching the end of its life and is expected to explode as a supernova within the next million years.",
        type: "Red Supergiant Star",
        age: "8 million years", 
        distance: "642.5 light-years",
        imageUrl: star5,
      },
      {
        id: 6,
        name: "Antares",
        price: 49.99,
        description: "Antares is a massive red supergiant star in the constellation Scorpius and is often referred to as the 'heart of the scorpion'. It's about 550 light-years from Earth and is nearing the end of its life cycle, expected to also go supernova in the relatively near future.",
        type: "Red Supergiant Star",
        age: "12 million years", 
        distance: "550 light-years",
        imageUrl: star6,
      },
      {
        id: 7,
        name: "Aldebaran",
        price: 49.99,
        description: "Aldebaran is an orange giant star located about 65 light-years away in the zodiac constellation of Taurus. It's known as the 'eye of the bull' due to its position in the constellation. Aldebaran is an older star, thought to be about 6.5 billion years old.",
        type: "Giant Star",
        age: "6.5 billion years",
        distance: "65 light-years",
        imageUrl: star7,
      },
      {
        id: 8,
        name: "Spica",
        price: 49.99,
        description: "Spica is the brightest star in the constellation Virgo and the 15th brightest star in the night sky. Approximately 260 light-years from Earth, Spica is actually a binary star system, with a pair of stars orbiting each other so closely that they can't be resolved separately by a telescope.",
        type: "Binary Star",
        age: "12.5 million years", 
        distance: "260 light-years",
        imageUrl: star8,
      },
      {
        id: 9,
        name: "Pollux",
        price: 49.99,
        description: "Pollux is the brightest star in the constellation of Gemini and the closest giant star to the Sun, located about 33.78 light-years away. It's an evolved orange giant star, estimated to be about 724 million years old.",
        type: "Giant Star",
        age: "724 million years",
        distance: "33.78 light-years",
        imageUrl: star9,
      },
      {
        id: 10,
        name: "canopus",
        price: 299.99,
        description: "Canopus is the second-brightest star in the night sky after Sirius, located roughly 310 light-years away in the constellation Carina. ",
        type: "Class F Giant",
        age: "10 million years", 
        distance: "309.8 light-years", 
        imageUrl: star10,
        
      },
]

export default StarInfo; 