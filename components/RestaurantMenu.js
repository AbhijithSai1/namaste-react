import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo,setResInfo]= useState(null);
    const resId=useParams();
    console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data= await fetch(MENU_URL+resId);
        const json= await data.json();
        console.log(json);
        setResInfo(json.data)
    }
    const { name, cuisines=[], costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    console.log(name)
    const {itemCards}= resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || {};
    console.log(itemCards)
    
  return resInfo===null ? (<Shimmer/>):(
    <div className='menu'>
        <h1>{name}</h1>
        <h1>{cuisines.join(",")}</h1>
        <h1>{costForTwoMessage}</h1>
        {/* <h2>Menu</h2>
        <ul>
            {itemCards.map((item)=>(
            <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
        </ul> */}
      
    </div>
  );
};

export default RestaurantMenu
