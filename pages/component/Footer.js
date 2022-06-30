import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font ">
                <div className='flex'>
                    <div className=" px-20 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                            <a className="flex title-font font-medium items-center  md:justify-start justify-center text-gray-900">
                                {/* <Image src="/codeswear.jpg" alt="Company Logo" width="83" height="83"></Image > */}
                                <img src="/codeswear.jpg" alt="" />
                                {/* <span className="ml-3 text-xl">Aggregate Agro</span> */}
                            </a>
                            <p className="mt-2 text-lg text-black">Agriculture, the clever way</p>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="hover:cursor-pointer text-black hover:text-red-600">Fertilizers</a>
                                    </li>
                                    <li>
                                        <a className="hover:cursor-pointer text-black hover:text-red-600">Equipment</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <Link href={'/contact'}><a className="hover:cursor-pointer text-black hover:text-red-600">Contact Us</a></Link>
                                    </li>
                                    <li>
                                        <Link href={'/about'}><a className="hover:cursor-pointer text-black hover:text-red-600">About Us</a></Link>
                                    </li>
                                    <li>
                                        <Link href={'/return'}><a className="hover:cursor-pointer text-black hover:text-red-600">Return Policy</a></Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICY</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="hover:cursor-pointer text-black hover:text-red-600">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="hover:cursor-pointer text-black hover:text-red-600">Terms and Conditions</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <img src="/pay.png" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 RicherLands.com — All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
