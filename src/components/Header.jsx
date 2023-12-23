
import { logo } from "../utils/constants";
import{CiLocationOn} from "react-icons/ci"
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy,IoIosRestaurant } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleLocation } from "../utils/toggleSlice";
import { Link } from "react-router-dom";
import {MdOutlineRestaurantMenu} from "react-icons/md"

import Location from "./Location";


const Header = () =>{
    
    const cartItems = useSelector((store) => store.cartData.items);
    const MenuOpen = useSelector((store)=>store.toggleData.isOpen);
    const LocationOpen = useSelector((store)=>store.toggleData.isLocationOpen)

    const UserLocation = useSelector((store) => store.locationData.userLocation);


    const dispatch = useDispatch();

    const handleMenu = () =>{
        dispatch(toggleMenu());
    }

    const handleLocation = () =>{
        dispatch(toggleLocation());
    }

    return (
     <div className="w-full bg-white shadow-lg fixed z-10 p-2">
        <header className="w-full md:w-9/12 p-3 bg-white h-[60px] m-auto"> 

        <nav className = "container flex items-center justify-between mx-auto">
          
        <div className="flex items-center left-div">
          <Link to ="/">
          <img src={logo} alt="logo" className="h-[40px]" />
          </Link>
          
          <button
          type="button"
          className="hidden xl:block text-sm ml-2 sm:ml-5 cursor-pointer text-black hover:text-orange-500 transition font-ProximaNovaThin w-2/4 sm:w-auto text-center"
          onClick={handleLocation}
          >  
            <div className="flex items-center">
            <CiLocationOn className="text-2xl font-bold"/> 
            {UserLocation?.address}
            </div>
          </button>

          <button
           type="button"
           className="xl:hidden text-sm ml-10 sm:ml-5 cursor-pointer  text-black hover:text-orange-500 transition font-ProximaNovaThin text-center flex gap-1"
           onClick={handleLocation}
            >
                <div className="text-xl">
                  <CiLocationOn />
                </div>
                Location
          </button>
 
        </div>
        
        {LocationOpen && <Location />}
    
          <ul className="items-center hidden xl:flex gap-10">
            <Link to = "/"><li className="flex items-center gap-2 font-semibold cursor-pointer text-sm hover:text-orange-500">Home</li></Link>
            <Link to = "/offers"><li className="flex items-center gap-2 font-semibold cursor-pointer text-sm hover:text-orange-500"><BiSolidOffer/>Offers</li></Link>
            <Link to = "/about"> <li className="flex items-center gap-2 font-semibold cursor-pointer text-sm hover:text-orange-500"><IoIosHelpBuoy/>About</li></Link>
            <Link to="/cart" className="transition hover:text-black">
            <li className="flex items-center gap-2 font-semibold cursor-pointer text-sm hover:text-orange-500">
                       <div className="group flex items-center gap-2">
                        <svg
                        className="fill-[#60b246] stroke-2 stroke-[#60b246] overflow-hidden group-hover:fill-orange-500 group-hover:stroke-orange-500"
                        viewBox="-1 0 37 32"
                        height="20"
                        width="20"
                        fill= "#60b246"
                        >
                        <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path> 
                        </svg>
                        <span className="absolute p-[6px] text-sm font-ProximaNovaSemiBold group-hover:text-white">
                        {cartItems.length}
                        </span>    
                        Cart  
                       </div>          
                       </li>
            </Link>
          </ul>
          
          <div className="mr-1 text-2xl cursor-pointer xl:hidden" onClick={handleMenu}>
            <IoIosRestaurant className="transition-all rotate-90 hover:opacity-70" />
          </div>

        </nav>
        </header>

    <div
        className={`h-screen w-full z-[99999] bg-white fixed top-0 ${
          MenuOpen ? 'left-0' : '-left-full'
        } right-0 transition-all duration-500`}
      >
        <div
          className="absolute text-3xl cursor-pointer right-5 top-6"
          onClick={handleMenu}
        >
          <MdOutlineRestaurantMenu className="transition-all hover:opacity-70" />
        </div>

        <ul className="flex flex-col items-center justify-center h-full gap-16 text-2xl text-customblack-1 font-GrotBlack">

        <Link to = "/"><li onClick={handleMenu} className="flex items-center gap-2 font-semibold cursor-pointer text-2xl hover:text-orange-500">Home</li></Link>
        <Link to = "/offers"><li onClick={handleMenu} className="flex items-center gap-2 font-semibold cursor-pointer text-2xl hover:text-orange-500"><BiSolidOffer/>Offers</li></Link>
        <Link to = "/about"> <li onClick={handleMenu} className="flex items-center gap-2 font-semibold cursor-pointer text-2xl hover:text-orange-500"><IoIosHelpBuoy/>About</li></Link>
         
        <Link to="/cart" className="transition-all hover:opacity-70">
          <li onClick={handleMenu} className="relative ml-10 nav-items text-2xl">
                <>
                  <span className="absolute -translate-y-1/2 top-1/2 -left-10">
                    <svg
                      className="fill-[#60b246] stroke-0 stroke-[#60b246] overflow-hidden"
                      viewBox="-1 0 37 32"
                      height="50"
                      width="30"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                    <span className="absolute text-base text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-GrotBlack">
                      {cartItems.length}
                    </span>
                  </span>
                </>
              <span className="text-2xl font-semibold">Cart</span>
          </li>
          </Link>

        </ul>
      </div> 
    </div>
      
    )
}

export default Header;