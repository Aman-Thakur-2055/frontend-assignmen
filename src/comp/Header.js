import React, { useState } from 'react'
import {AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import Search from '../comp/Search';
import { useNavigate } from 'react-router-dom';


function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate()
  return (
      <>
            <header>
            <div className='text-white max-w-screen-lg mx-auto'>
                <div className='container mx-auto py-4  md:px-0'>
                    <nav className='flex items-center justify-between'>
                        <div className='flex gap-8 items-center'>
                            <span className='text-2xl cursor-pointer' onClick={()=>navigate(`/`)}>Trend<span className='text-red-500'>Trove</span></span>
                            <span className='text-2xl cursor-pointer hidden md:block' onClick={()=>navigate(`/`)}>Home</span>
                        </div>
                        <div className='flex gap-8 justify-between items-center'>
                          <AiOutlineSearch size={24} onClick={()=>setShowSearch(true)}/>
                          <AiOutlineHeart size={24}/>
                          <AiOutlineShoppingCart size={24}/>
                            
                        </div>

                    </nav>
                </div>
                
            </div>
            {showSearch &&  <Search setShowSearch={setShowSearch}/>}
        </header>
       
      </>
  )
}

export default Header