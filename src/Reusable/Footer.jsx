import logo from '../assets/feature/logo.png.webp'
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from "react-router-dom";
const Footer = () => {
    return (


        <section className="bg-white">
            <div className="max-w-screen-xl px-4 pt-20 pb-10 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="" />
                </div>
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            BackGround Removal Service
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Cliping Path Service
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            E-commarce Products Photo Editing
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Ghost Mannequin Services
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Image Masking Service
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Photo Retouching Services
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Image Shadow Making Service
                        </Link>
                    </div>
                </nav>


                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link className="lg:text-xl text-lg mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            About us
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="lg:text-xl text-lg    mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Blogs
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="lg:text-xl text-lg    mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Portfolios
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="lg:text-xl text-lg    mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Pricing
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link className="lg:text-xl text-lg   mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                            Contact us
                        </Link>
                    </div>

                </nav>


            </div>
            <hr className="my-6 border-gray-200 w-full sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className='grid grid-cols-12 lg:max-w-7xl mx-auto py-4 w-full'>
                <div className='lg:col-span-3 order-3 md:order-1 col-span-12 text-md lg:text-lg leading-6  text-gray-400'>
                    <p className='flex justify-center items-center text-center'>
                        © 2022 Graphics it bd.
                    </p>
                </div>

                <div className='lg:col-span-6 col-span-12 order-1 md:order-2 lg:py-0 py-3'>
                    <nav className="flex flex-wrap  justify-center ">
                        <div className="px-5 font-semibold text-[#8A94A6]">
                            <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                                Affiliate Program
                            </Link>
                        </div>
                        <div className="px-5 font-semibold text-[#8A94A6]">
                            <Link to='/privacypolicy'
                            className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                                Privecy Poliycy
                            </Link>
                        </div>
                        <div className="px-5 font-semibold text-[#8A94A6]">
                            <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                                Terms And Condition
                            </Link>
                        </div>
                        <div className="px-5 font-semibold text-[#8A94A6]">
                            <Link className="text-lg  mb-2 cursor-pointer hover:text-[#ff8a00] transition-all duration-300 ease-in-out leading-6  text-[#4f5864]">
                                FAQ
                            </Link>
                        </div>

                    </nav>
                </div>

                <div className='lg:py-0 py-3 lg:col-span-3 col-span-12 order-2 md:order-3'>
                    <div className="flex flex-wrap justify-center gap-5">
                        <Link className="text-gray-400 text-2xl hover:text-[#ff8a00]">

                            <span><BiLogoFacebook></BiLogoFacebook></span>

                        </Link>
                        <Link className="text-gray-400 text-2xl hover:text-[#ff8a00]">

                            <AiOutlineInstagram></AiOutlineInstagram>
                        </Link>
                        <Link className="text-gray-400 text-2xl hover:text-[#ff8a00]">

                            <AiOutlineTwitter></AiOutlineTwitter>
                        </Link>
                        <Link className="text-gray-400 text-2xl hover:text-[#ff8a00]">

                            <AiFillYoutube></AiFillYoutube>
                        </Link>
                        <Link className="text-gray-400 text-2xl hover:text-[#ff8a00]">

                            <AiFillLinkedin></AiFillLinkedin>
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Footer;