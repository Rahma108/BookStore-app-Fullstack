// NavBar....................

import navbarBg from '../../assets/navbar-background.png'
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import LogoHome from '../../assets/HomeLogo.png'
import Bell from '../../assets/Bell.png'
import navbarProfile from '../../assets/navbar-profile.png'
function Navbar() {
        const [isOpen, setIsOpen] = useState(false);
        const toggleMenu = () => setIsOpen(!isOpen);
        return (
            <>
            <div className='relative'>
                <div className='top-0 left-0 w-full z-50 fix'>
                    <img
                        src={navbarBg} 
                        alt="Navbar Illustration"
                        className="w-full h-20"
                    />
                </div>
                <div className='absolute top-0 w-full'>
                <nav className=" border-amber-900/30 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center gap-3">
                            <div >
                                <img
                                    src={LogoHome} 
                                    alt="Home Illustration"
                                    className="h-16 w-16 md:mt-2.5 block"
                                    />
                            </div>

                            <div className="hidden sm:block mt-2.5">
                                <span className="text-2xl font-bold tracking-tight text-amber-400">NETH</span>
                                <span className="text-xl font-semibold text-white">BOOKPOINT</span>
                            </div>

                            {/* Logo صغير في الموبايل */}
                            <span className="sm:hidden text-2xl font-bold text-amber-400 mt-2.5">NETH</span>
                            

                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-10 space-x-reverse h-auto">
                            <Link to="/" className="text-gray-300 hover:text-amber-400 transition px-3 py-2 rounded-md text-lg font-medium">
                            Home
                            </Link>
                            <Link to="/about" className="text-gray-300 hover:text-amber-400 transition px-3 py-2 rounded-md text-lg font-medium">
                            About 
                            </Link>
                            <Link to="/shop" className="text-gray-300 hover:text-amber-400 transition px-3 py-2 rounded-md text-lg font-medium">
                            Shop
                            </Link>
                            <Link to="/delivery" className="text-gray-300 hover:text-amber-400 transition px-3 py-2 rounded-md text-lg font-medium">
                            Delivery Team
                            </Link>
                            <div >
                                <img
                                    src={Bell} 
                                    alt="Home Illustration"
                                    className='mr-5'
                                    />
                            </div>
                                <div >
                                    <Link to="/profile"  onClick={() => setIsOpen(false)} >
                                <img
                                    src={navbarProfile} 
                                    alt="Home Illustration"
                                    />
                                
                                </Link>
                                </div>
                        </div>

                        {/* Mobile Burger Button */}
                        <div className="lg:hidden  h-auto">
                            <button
                            onClick={toggleMenu}
                            className="text-amber-400 hover:text-amber-300 focus:outline-none"
                            aria-label="Toggle menu"
                            >
                            {isOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                            </button>
                        </div>

                        </div>
                    </div>

        {/* Mobile Menu */}
        <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out h-auto${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <div className="bg-black border-t px-4 py-3 space-y-2  h-auto" >
            <Link
                to="/"
                className="block text-gray-300 hover:bg-white/15 hover:text-amber-400 px-4 py-4 rounded-md text-xl font-medium"
                onClick={() => setIsOpen(false)}
            >
            Home
            </Link>
            <Link
                to="/about"
                className="block text-gray-300 hover:bg-white/15 hover:text-amber-400 px-4 py-4 rounded-md text-xl font-medium"
                onClick={() => setIsOpen(false)}
            >
            About
            </Link>
            <Link
                to="/shop"
                className="block text-gray-300 hover:bg-white/15 hover:text-amber-400 px-4 py-4 rounded-md text-xl font-medium"
                onClick={() => setIsOpen(false)}
            >
            Shop
            </Link>
            <Link
                to="/delivery"
                className="block text-gray-300 hover:bg-white/15 hover:text-amber-400 px-4 py-4 rounded-md text-xl font-medium"
                onClick={() => setIsOpen(false)}
            >
                Delivery Team
            </Link>

                <div >
                            <div>
                            <img
                                    src={Bell} 
                                    alt="Home Illustration"
                                    className='ml-3 mb-5'

                                    />
                            </div>
                            {/* click go to profile */}
                                <div >
                                    <Link to="/profile"  onClick={() => setIsOpen(false)} >
                                <img
                                    src={navbarProfile} 
                                    alt="Home Illustration"
                                    />
                                
                                </Link>
                                </div>
                </div>

            </div>

        </div>
                </nav>
                </div>
            </div>
    

    </>
        )



}

export default Navbar
