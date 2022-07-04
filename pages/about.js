import React from 'react';
import Link from 'next/link'

const About = () => {
    return (
        <div>
            <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
                <img className='w-24 md:w-36 mb-10 object-cover object-center rounded' src="/logo.jpg" alt="Company Logo" />
                <div className='text-center lg:w-2/3 w-full'>
                    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Lorem ipsum dolor sit amet.</h1>
                    <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente voluptas voluptates. Fugiat itaque aut qui adipisci, sunt sit, laboriosam ad rem voluptatum temporibus maxime consequatur eum quibusdam, omnis ducimus incidunt tenetur culpa error earum. Dolorum quasi temporibus exercitationem quisquam reiciendis sit perspiciatis, nostrum nobis tenetur perferendis sunt ut, quas dolore id quidem non illo repudiandae ratione magnam labore iusto totam. Omnis culpa, laudantium dolore ut excepturi eaque modi in esse iure nam dolor cupiditate quis sunt reiciendis! Alias voluptatibus similique recusandae modi, aliquam laudantium veniam. Nam facilis beatae, deleniti iusto maxime numquam quibusdam possimus soluta molestiae quas consequatur temporibus?</p>
                    <div className='flex justify-center'>
                        <Link href={'/shop'}>
                            <button className='inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'>
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
