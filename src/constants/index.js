import { house1, house2, house3, house4, house5, house6, luxury1, luxury2, luxury3, luxury4, luxury5, luxury6, luxury7, luxury8  } from "../assets/images";
import { HomeIcon, KeyIcon, UserCircleIcon, ChartBarIcon  } from "../assets/icons"






export const navLinks = [
  { href: "#buy", label: "Buy" },
  { href: "#rent", label: "Rent" },
  { href: "#sell", label: "Sell" },
  { href: "#fullAgent", label: "FullAgent" },
];


export const PROPERTIES = [
  {
    imgURL:house1,
    title: "Modern Apartment in Downtown",
    price: 270000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    location: "Downtown, New York",
    city: "New York",
    
    
  },
  {
    imgURL:house2,
    title: "Luxury Beachfront Villa",
    price: 250000,
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4500,
    location: "Malibu, California",
    city: "Malibu",
    
  },
  {
    imgURL:house3,
    title: "Charming Suburban Home",
    price: 575000,
    bedrooms: 4,
    bathrooms: 2.5,
    area: 2800,
    location: "Evanston, Illinois",
    city: "Evanston",
    
  },
  // {
  //   imgURL:house4,
  //   title: "Modern Condo with City Views",
  //   price: 3500,
  //   bedrooms: 1,
  //   bathrooms: 1,
  //   area: 850,
  //   location: "Financial District, San Francisco",
  //   city: "San Francisco",
    
  // },
  // {
  //   imgURL:house5,
  //   title: "Spacious Family Townhouse",
  //   price: 2800,
  //   listingType: "rent",
  //   bedrooms: 3,
  //   bathrooms: 2.5,
  //   area: 1800,
  //   location: "Arlington, Virginia",
  //   city: "Arlington",
    
  // },
  // {
  //   imgURL:house6,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // },
  // {
  //   imgURL:luxury1,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // },
  // {
  //   imgURL:luxury2,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // },
  // {
  //   imgURL:luxury3,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // },
  // {
  //   imgURL:luxury4,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // },
  // {
  //   imgURL:luxury5,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // },
  // {
  //   imgURL:luxury6,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // },
  // {
  //   imgURL:luxury7,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // },
  // {
  //   imgURL:luxury8,
  //   title: "Cozy Studio in Historic District",
  //   price: 1200,
  //   bedrooms: 0,
  //   bathrooms: 1,
  //   area: 550,
  //   location: "Historic District, Boston",
  //   city: "Boston",
    
  // }
  
  
];





export const services = [
  {
    title: "Buy a Home",
    description: "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.",
    icon: HomeIcon,
    link: "/buy"
  },
  {
    title: "Rent a Home",
    description: "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
    icon: KeyIcon,
    link: "/rent"
  },
  {
    title: "Find an Agent",
    description: "Connect with a local expert who can help you navigate the buying, selling, or renting process.",
    icon: UserCircleIcon,
    link: "/agents"
  },
  {
    title: "Market Trends",
    description: "Get the latest market trends and home value estimates to help guide you through your real estate journey.",
    icon: ChartBarIcon,
    link: "/trends"
  }
  
];
