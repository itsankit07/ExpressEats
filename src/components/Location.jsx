import { useSelector,useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import {toggleLocation } from "../utils/toggleSlice";
import { useRef,useState } from "react";
import { LOCATION_API,ADDRESS_API } from "../utils/constants";
import { getLocation } from '../utils/locationSlice';
import{CiLocationOn} from "react-icons/ci"


const Location = () =>{

    const searchText = useRef(null);

    const [searchData,setSearchData] = useState([]);

    const LocationOpen = useSelector((store)=>store.toggleData.isLocationOpen)

    const dispatch = useDispatch();

    const handleLocation = () =>{
        dispatch(toggleLocation());
    }

    const fetchAddress = async (place_id) => {
        try {
          const res = await fetch(ADDRESS_API + place_id);
          if (!res.ok) {
            const error = res.status;
            throw new Error(error);
          } else {
            const { data } = await res.json();
            dispatch(
              getLocation({
                city: data[0]?.address_components[0]?.short_name,
                lat: data[0]?.geometry?.location?.lat,
                lng: data[0]?.geometry?.location?.lng,
                address: data[0]?.formatted_address,
              })
            );
            window.location.reload();
          }
        } catch (err) {
          console.log(err);
        }
      };

    const Location = async (searchQuery, setSearchData) => {
        try {
          if (searchQuery !== '' && searchQuery?.length > 2) {
            const res = await fetch(LOCATION_API + searchQuery);
            if (!res.ok) {
              const error = res.status;
              throw new Error(error);
            } else {
              const json = await res.json();
              setSearchData(json?.data);
            }
          } else if (searchQuery === '') {
            setSearchData([]);
          }
        } catch (err) {
          
          console.log(err);
        }
      };

    const handleSearch = (searchQuery) =>{
    Location(searchQuery,setSearchData);
    }

    return (
        <div>
        <div
        className={`h-screen w-full md:w-4/12 z-[99999] bg-white fixed top-0 ${
           LocationOpen ? 'left-0 ' : '-left-full'
        } transition-all duration-500 right-0 `}
        >
        <div className="md:w-9/12 w-full absolute right-0 py-10">    
        
        <div className="text-3xl cursor-pointer right-5 top-6" onClick={handleLocation}>
        <IoCloseSharp  className="transition-all hover:opacity-70" />
        </div> 
        
        <div className="mt-7">
            <input 
            type="text" 
            placeholder="Enter your Search Location" 
            ref={searchText}
            onChange={()=>handleSearch(searchText.current?.value)}
            className="h-[58px] border-2 border-[#bebfc5] focus:outline-none focus:ring-1 focus:ring-[#bebfc5] focus:ring-offset-1 transition-all w-9/12 px-2 font-ProximaNovaMed text-lg text-[#282c3f]"
            />

          <ul className="top-[58px] left-0 right-0 shadow-lg w-full bg-white text-[#535665] z-10">
                {searchData &&
                  searchData?.map((item) => (
                    <li
                      key={item?.place_id}
                      className="cursor-pointer py-4 sm:py-6 px-3 sm:px-5 font-ProximaNovaMed text-sm sm:text-base border-b border-dashed border-[#bebfc5] flex items-center gap-5 hover:bg-slate-100 transition"
                      onClick={() => fetchAddress(item?.place_id)}
                    >
                      <div className="text-xl">
                        <CiLocationOn />
                      </div>
                      <p>{item?.description}</p>
                    </li>
                  ))}
            </ul>
        </div>
        </div> 
        
        </div>
        </div>
       )
}

export default Location;