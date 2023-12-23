const Footer = () =>{
    return (
        <div className="w-full ">

            <div className="bg-gray-100 flex justify-center gap-10 p-2 flex-wrap">

                <h1 className="font-mono font-extrabold text-2xl tracking-wide w-[450px] text-gray-700">For better experience,download the Swiggy app now</h1>
                <div className="flex items-center gap-5">
                    <img className="w-55 h-14" alt="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" />
                    <img className="w-55 h-14" alt="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" />
                </div>

            </div>
        <div className="bg-black flex p-10 justify-evenly display-none ">
            
                    <ul>
                    <li className="text-white font-bold">Company</li>
                    <li className="text-gray-400">About</li>
                    <li className="text-gray-400">Careers</li>
                    <li className="text-gray-400">Team</li>
                    <li className="text-gray-400">Swiggy One</li>
                    <li className="text-gray-400">Swiggy Instamart</li>
                    <li className="text-gray-400">Swiggy Genie</li>
                   </ul>
                    
            <div>

                   <ul className="list-none">
                   <li className="text-white font-bold">Contact us</li>
                   <li className="text-gray-400">Help & Support</li>
                   <li className="text-gray-400">Partner with us</li>
                   <li className="text-gray-400">Ride with us</li>
                   </ul>

                   <ul className="list-none pt-5">
                   <li className="text-white font-bold">Legal</li>
                   <li className="text-gray-400">Terms & Conditions</li>
                   <li className="text-gray-400">Cookie Policy</li>
                   <li className="text-gray-400">Privacy Policy</li>
                   </ul>

            </div> 

                   <ul className="list-none">
                   <li className="text-white font-bold">We deliver to:</li>
                   <li className="text-gray-400">Bangalore</li>
                   <li className="text-gray-400">Gurgaon</li>
                   <li className="text-gray-400">Hyderabad</li>
                   <li className="text-gray-400">Delhi</li>
                   <li className="text-gray-400">Mumbai</li>
                   <li className="text-gray-400">Pune</li>
                   <li className="text-gray-400">Many more...</li>
                   </ul>       
        </div>

         <div className="container flex items-center justify-center h-[40px] bg-black text-white mx-auto">
         <p className="font-ProximaNovaBold text-2xl">Made with ❣️ by Ankit Singh</p>
        </div>
     
        </div>
    )
}

export default Footer;