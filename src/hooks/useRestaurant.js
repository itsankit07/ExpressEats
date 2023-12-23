import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {CORSPROXY} from  '../utils/constants'

const useRestaurant = () => {
    const[allRestaurant,setAllRestaurant] = useState([]);
    const[filteredRestaurant,setFilteredRestaurant] = useState([]);
    const[bannerInfo,setBannerInfo] = useState([]);
    const [foodCategories,setFoodCategories] = useState([]);
    const userLocation = useSelector((store)=>store.locationData.userLocation);

    useEffect(()=>{
        fetchRestaurant();
    },[]);

    const fetchRestaurant = async () =>{

    try{
        const{lat,lng} = userLocation;

        const resp = await fetch(`${CORSPROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        if(!resp.ok){
            const err = resp.status;
            throw new Error(err);
        }
        else{
            const json = await resp.json();
            const checkstatus = async (jsonData) =>{
                const ResData = jsonData?.data?.cards?.find(
                    (card) => // it will search for all cards if any card have the restaurants inside it.
                      card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
                  )?.card?.card?.gridElements?.infoWithStyle?.restaurants;  //then we will access the card which have all the restaurant;
                const BannerData = jsonData?.data?.cards?.find((card)=>card?.card?.card?.id==="topical_banner")?.card?.card?.gridElements?.infoWithStyle?.info;

                const CategoryData = jsonData?.data?.cards?.find((card)=>card?.card?.card?.id==="whats_on_your_mind")?.card?.card?.imageGridCards?.info;

                return[ResData,BannerData,CategoryData]

            }

            const[ResData,BannerData,CategoryData] = await checkstatus(json);
            setAllRestaurant(ResData);
            setBannerInfo(BannerData);
            setFoodCategories(CategoryData);
            setFilteredRestaurant(ResData);
        }
    }catch(err){
        console.log(err);
    }
    }

    return[
        allRestaurant,setAllRestaurant,
        bannerInfo,setBannerInfo,
        foodCategories,setFoodCategories,
        filteredRestaurant,setFilteredRestaurant
    ]
 
}

export default useRestaurant;