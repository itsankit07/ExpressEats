import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { IoLocationOutline } from 'react-icons/io5';
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ShimmerMenu from './ShimmerMenu';



const RestaurantMenu = () =>{
    const { resId } = useParams();
    const [resInfo, setResInfo, resMenuInfo, setResMenuInfo] = useRestaurantMenu(
      resId,
      MENU_API
    );

     const [ShowIndex, setShowIndex] = useState(0);

     const handleShowItem = (currInd) => {
        if (currInd === ShowIndex) {
          setShowIndex(null);
        } else {
          setShowIndex(currInd);
        }
      };

    const{
        name,
        city,
        areaName,
        cuisines,
        avgRating,
        totalRatingsString,
        isOpen,
    }   = resInfo;

    if (resMenuInfo?.length === 0) {
      return <ShimmerMenu />;
    }

    return (
        <div className="w-full min-h-screen px-3 mx-auto 2xl:w-6/12 menu-container pt-28 pb-36 md:w-10/12">

            {/* BreadCrumb */}
            <div className="flex mb-5" aria-label="BreadCrumb">
            <ol className="inline-flex items-center">
                    <li className="inline-flex items-center">
                        <Link to = "/" className="inline-flex items-center text-sm font-medium text-customblack-1 hover:text-black">
                         Home/
                        </Link>
                    </li>
            <li aria-current="page">
            <div className="flex items-center">
               
               <Link
                to={`/`}
                className="text-sm font-medium text-customblack-1 hover:text-black ">
                {city}/
               </Link>

                <Link
                 to = {`/restaurants/${resId}`}
                 className="text-sm font-medium text-customblack-1 hover:text-black ">
                    {name}
                 </Link>

            </div>
            </li>    
            </ol>
            </div>

      <div className="flex items-start justify-between pt-5 mb-6">
           <div>
          <h2 className="mb-1 capitalize text-customcolor-6 sm:text-xl font-ProximaNovaSemiBold">
            {name}
          </h2>
          <p className="text-sm text-customcolor-5 font-ProximaNovaThin">
            {cuisines?.join(', ')}
          </p>
          <p className="flex items-center gap-1 text-sm font-bold text-customcolor-5 font-ProximaNovaThin">
            <span>
              <IoLocationOutline />
            </span>{' '}
            <span className="mt-1">
              {areaName}, {city}
            </span>
          </p>
          </div>

          {avgRating && (
          <div>
            <button className="p-[8px] cursor-pointer rounded resRating">
              <div className="flex items-center gap-1 justify-center avgRating pb-[10px] mb-[8px]">
                <img src="/images/star-icon.png" alt="star-img" />
                <span className="text-sm font-ProximaNovaSemiBold">
                  {avgRating}
                </span>
              </div>
              <span className="text-xs tracking-tight font-ProximaNovaSemiBold totalRatings">
                {totalRatingsString}
              </span>
            </button>
          </div>
        )}
      </div>

      {!isOpen?(
        <h2 className="text-base resMsg font-ProximaNovaThin">
          Uh-oh! The outlet is not accepting orders at the moment.Try after some time.
        </h2>
      ):(
        <>
        <div className="dottedDivider"></div>
        {/* Restaurant Category */}
            <ul>
             {resMenuInfo?.map((category,index)=>(

                <li key = {category?.card?.card?.title}>
                    <RestaurantCategory
                    data = {category?.card?.card}
                    ShowItem = {index===ShowIndex?true:false}
                    handleShowItem = {()=>handleShowItem(index)}/>
                </li>
             ))}        
            </ul>
        </>
      )}
        </div>
    )
}


export default RestaurantMenu;