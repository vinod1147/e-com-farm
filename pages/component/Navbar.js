import React from 'react';
import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    return (
        <div>
            <div className='flex w-full'>
                <header className="text-gray-600 body-font shadow-lg w-[100%]">
                    <div className=" mx-auto flex flex-wrap p-[1.3rem] flex-col md:flex-row items-center">
                        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            {/* <Image src={'/logo.jpg'} width={'10'} height={'10'}></Image > planning to add image to the navbar */}
                            {/* use color for lime or red or green or lime or emerald or sky */}
                            <Link href={'/'}><a href=""><div className="text-xl">Richer Lands</div></a></Link>
                        </div>
                        <nav className="ml-7 flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-red-600 font-bold text-lg font-sans cursor-pointer">Home</a>
                            <Link href={'/about'}><a className="mr-5 hover:text-red-600 font-bold text-lg font-sans cursor-pointer">About</a></Link>
                            <Link href={'/contact'}><a className="mr-5 hover:text-red-600 font-bold text-lg font-sans cursor-pointer">Contact</a></Link>
                            <Link href={'/shop'}><a className="mr-5 hover:text-red-600 font-bold text-lg font-sans cursor-pointer">Shop</a></Link>
                            {/* THIS IS CODE FOR THE DROPDOWN MENU */}
                            <a className="mr-5 font-bold text-lg font-sans cursor-pointer">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="hover:text-red-600 font-bold text-gray-700 hover:bg-gray-50">Shop</Menu.Button>
                                    </div>

                                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base')}>Account settings</a>)}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base')}>Support</a>)}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-base')}>License</a>)}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button type="submit" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'text-left px-4 py-2 text-base')}>Sign out</button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </a>
                        </nav>
                    </div>
                </header >
            </div >
        </div>
    );
}

export default Navbar;