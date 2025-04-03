import Hero from "./Hero"
import FeatureProperties from "./FeatureProperties"
import Services from "./Services"
import ClientSay from "./ClientSay"
import Dream from "./Dream"
import Footer from "./Footer"
import { HomeIcon, KeyIcon, UserCircleIcon, ChartBarIcon  } from "../assets/icons"
import { testy1, testy2, testy3} from "../assets/images"
  
  


export {
   Hero, 
   FeatureProperties, 
   Services, 
   ClientSay, 
   Dream,
   Footer, 

  }

  export const services = [
   {
     title: "Buy a Home",
     description: "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.",
     icon: HomeIcon,
     link: "Buy"
   },
   {
     title: "Rent a Home",
     description: "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
     icon: KeyIcon,
     link: "Rent"
   },
   {
     title: "Find an Agent",
     description: "Connect with a local expert who can help you navigate the buying, selling, or renting process.",
     icon: UserCircleIcon,
     link: "Rents"
   },
   {
     title: "Market Trends",
     description: "Get the latest market trends and home value estimates to help guide you through your real estate journey.",
     icon: ChartBarIcon,
     link: "Trends"
   }
 ];

  

 export const testimonials = [
  {
    
    name: "Sarah Johnson",
    role: "Homebuyer",
    avatarUrl: testy1,
    quote: "PropSphere made finding my dream home so easy! The virtual tours saved me so much time, and my agent was incredible from start to finish."
  },
  {
    
    name: "Michael Chen",
    role: "Property Investor",
    avatarUrl: testy2,
    quote: "As an investor, I need reliable data and quick responses. PropSphere delivers both, plus their verified listings give me confidence in every property I consider."
  },
  {
    
    name: "Emily Rodriguez",
    role: "First-time Seller",
    avatarUrl: testy3,
    quote: "Selling my first home was daunting, but PropSphere guided me through every step. Their marketing tools and professional photography made all the difference."
  }
];