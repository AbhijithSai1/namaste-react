import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react"
import Shimmer from './Shimmer'
import {useEffect} from "react"


const Body = () => {
    const [listOfRestaurant, setListOfRestaurants] = useState([]);
    const [filterRestaurant,setFilterRestaurant]= useState([])
    const [searchText,setSearchText]= useState("")

         useEffect(()=>{
                fetchData()
            },[]);

        const fetchData=async ()=>{
                const data=await fetch("https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.9692624%26lng%3D79.59263039999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
                );
            const json = await data.json();
            const rest = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(rest)
            
        
           setListOfRestaurants(rest || [])
            setFilterRestaurant(rest || [])
};
            //conditional rendering 

        return listOfRestaurant.length===0 ? (
            <Shimmer/>
            ):
      <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    //Filter restaurant and update UI
                    const filteredRestaurant=listOfRestaurant.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    console.log(filteredRestaurant)
                    setFilterRestaurant(filteredRestaurant)
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurant.filter((res)=>res?.info?.avgRating>4.3);
                setFilterRestaurant(filteredList)
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {filterRestaurant.map((restaurant) => {
            <link to={"/restaurants/"+restaurant.info.id}></link>
            // Ensure you return the component for each iteration
          return <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />;
          })}
        </div>
      </div>
  };
  
export default Body;