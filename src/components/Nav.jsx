import {Logo, Bell, SearchIcon} from "../assets"

export default function Nav () {
    return (
        <nav className='flex items-center justify-between pt-4 pb-4 px-7 fixed top-0 w-full bg-white z-50'>
            <Logo className='w-24' />

            <form className='search-bar flex '>
                <input type="text" placeholder='Search' className='border border-gray-300 rounded-l-3xl block w-500 h-8 p-5 font-custom focus:outline-none focus:border-blue-400 input'/>

                <button className='flex justify-center items-center border border-gray-300 border-l-0 rounded-r-3xl cursor-pointer w-20 hover:bg-gray-100 searchIcon'>
                    <SearchIcon/>
                </button>

            </form>

            <div className='notification'>
                <Bell />
            </div>
        </nav>
    )
}