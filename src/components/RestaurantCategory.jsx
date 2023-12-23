import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import RestaurantMenuList from './RestaurantMenuList';

const RestaurantCategory = (props) => {
  const {data, handleShowItem , ShowItem } = props;

  const handleItemShown = ()=>{
    handleShowItem();
  }
  return (
  <>

  {/* {Accordian Header} */}
  <div onClick={handleItemShown} className='flex items-center justify-between px-3 py-5 text-left shadow-md cursor-pointer sm:p-6'>

    <h2 className='text-custombold-3 sm:text-lg font-ProximaNovaBold'>
      {data?.title}({data?.itemCards?.length})
    </h2>
    <div className='text-xl text-custombold-3'>
     {ShowItem?<IoIosArrowUp/> : <IoIosArrowDown />}
    </div>   
  </div>

  {ShowItem && <RestaurantMenuList items={data?.itemCards} />}


   {/* Accordion Body */}
   
  </>
  )
}

export default RestaurantCategory