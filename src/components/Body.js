// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import { useState } from "react";
import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";

function filterData(searchInput) {
 const filterData= restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
  return  filterData
}
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  //searchText is a local state variable
  const [searchInput, setSearchInput] = useState(); //to create state variable

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for dishes,restaurants etc..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the data
            //update the state i.e. restaurants variable
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
