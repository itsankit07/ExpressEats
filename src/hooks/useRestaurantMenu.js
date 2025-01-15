import { useEffect, useState } from "react";

const useRestaurantMenu = (resId,MENU_API)=>{

    const[resInfo,setResInfo] = useState({});
    const[resMenuInfo,setResMenuInfo] = useState([]);

    useEffect(()=>{
       fetchRestaurantMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchRestaurantMenu = async () =>{
        try{
         const response = await fetch(MENU_API+ resId);
         if(!response.ok){
            const err = response.status;
            throw new Error(err);
         }
         else{
            const json = await response.json();
            const restaurant = 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant';
            const restaurantType = 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
            const restaurantMenuData = json?.data?.cards?.find((x)=>x?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
                (item)=> item?.card?.card['@type']===restaurantType);
            
            const restaurantData = json?.data?.cards?.filter((item)=>item?.card?.card['@type']===restaurant)[0]?.card?.card?.info;
                setResInfo(restaurantData);
                setResMenuInfo(restaurantMenuData);
         }
        }catch(err){
            console.log(err);
        }
    }

    return[resInfo,resMenuInfo]

}

export default useRestaurantMenu;