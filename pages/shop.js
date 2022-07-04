import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Shop = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24">
                    <div className="text-5xl font-semibold text-center px-5 pb-8">Categories</div>
                    <div className="flex flex-wrap justify-center">
                        <Link href={'/fertilizers'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="/fertilizer.jpg" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Fertilizers</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link href={'/seeds'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="/seed.jpg" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Seeds</h1>
                                        <p className="leading-relaxed">The Seeds You Need - Get Quality Seeds at RicherLands at reasonable price</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link href={'/equipment'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="/drone.jpg" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Farming Equipment</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link href={'/weedicides'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="https://dummyimage.com/420x260" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Weedicides</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link href={'/herbicides'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="/herbicides.png" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Herbicides</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link href={'/pesticides'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="/pesticides.jpg" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Pesticides</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link href={'/organicfertilizer'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="/organicfarming.jpg" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Organic Fertilizers</h1>
                                        <p className="leading-relaxed">Because we care about farming - Get the best out of the all</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link href={'/'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="https://dummyimage.com/420x260" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">REMAINING</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                        <Link href={'/'}>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer m-4">
                                <a className="block relative h-72 rounded-lg overflow-hidden">
                                    <Image alt="ecommerce" layout='fill' className="w-full h-full block absolute inset-0 object-cover object-center" src="https://dummyimage.com/420x260" />
                                    <div className="px-8 py-10 relative rounded-lg z-10 w-full h-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">RICHERLANDS</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">REMAINING</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </a>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shop;
