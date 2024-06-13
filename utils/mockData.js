
const resList = [
    {
      id: "673465",
      name: "Kadai Drive IN",
      cuisines: ["North Indian", "Chinese", "Tandoor"],
      avgRating: 4.3,
      deliveryTime: "25-30 mins",
      // Assign a random image URL from the given list
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2597&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "566932",
      name: "Chopstick",
      cuisines: ["Biryani", "Chinese"],
      avgRating: 4,
      deliveryTime: "20-25 mins",
      image: "https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "474594",
      name: "Swagath Family Restaurant",
      cuisines: ["Chinese", "Biryani"],
      avgRating: 3.8,
      deliveryTime: "30-35 mins",
    image:"https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    },
    {
      id: "418402",
      name: "Bistas Food Court",
      cuisines: ["Chinese"],
      avgRating: 3.8,
      deliveryTime: "25-30 mins",
      image:"https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

      {
      id: "505169",
      name: "Vishno Royal Biryani",
      cuisines: ["Biryani", "North Indian"],
      avgRating: 4.1,
      deliveryTime: "25-30 mins",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2597&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "758697",
      name: "Biryanis & More",
      cuisines: ["Biryani", "Chinese"],
      avgRating: 4.2,
      deliveryTime: "30-35 mins",
      image: "https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "110592",
      name: "Desi Kitchen",
      cuisines: ["Biryani", "Chinese", "South Indian"],
      avgRating: 4,
      deliveryTime: "30-35 mins",
      image:"https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      id: "982341",
      name: "The Great Indian Kitchen",
      cuisines: ["Indian", "South Indian"],
      avgRating: 4.4,
      deliveryTime: "20-25 mins",
      image:"https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "892345",
      name: "Saffron Bites",
      cuisines: ["Indian", "Mughlai"],
      avgRating: 3.9,
      deliveryTime: "25-30 mins",
      image: "https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "332455",
      name: "Asian Fusion",
      cuisines: ["Chinese", "Thai", "Japanese"],
      avgRating: 4.3,
      deliveryTime: "30-35 mins",
      image:"https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    },

    {
      id: "777123",
      name: "Mexican Fiesta",
      cuisines: ["Mexican", "Tex-Mex"],
      avgRating: 4.1,
      deliveryTime: "25-30 mins",
      image:"https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "678123",
      name: "BBQ Delight",
      cuisines: ["BBQ", "Grill"],
      avgRating: 4.2,
      deliveryTime: "30-35 mins",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2597&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
    {
      id: "334512",
      name: "Pasta Palace",
      cuisines: ["Italian", "Pasta"],
      avgRating: 4,
      deliveryTime: "20-25 mins",
      image:"https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
      id: "223456",
      name: "Mediterranean Treats",
      cuisines: ["Mediterranean", "Greek"],
      avgRating: 4.3,
      deliveryTime: "30-35 mins",
      image: "https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "445673",
      name: "Healthy Choice",
      cuisines: ["Vegan", "Healthy"],
      avgRating: 4.4,
      deliveryTime: "25-30 mins",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2597&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },
  ];
  
export default resList;