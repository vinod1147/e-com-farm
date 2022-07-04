import React from 'react';

const Contact = () => {
    return (
        <div className='max-w-screen-xl md:mt-24 px-4 md:px-8 lg:px-12 xl:px-26 py-16 mx-auto  text-gray-900 rounded-lg '>
            <div className='flex flex-col justify-center items-center'>
                <div className="">
                    <h2 className='text-center text-3xl font-bold leading-tight'>Lets talk about everything!</h2>
                    <img className='pt-4 h-40 mx-auto py-2' src="/logo.jpg" alt="Company Logo" />
                    <p className='text-center text-xl lg:text-2xl font-medium leading-tight'>Feel free to ask us anything!</p>
                    <p className='py-4 px-4 text-md lg:text-md leading-tight text-center'>If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</p>
                    <div className='flex justify-between'>
                        <div className='text-center px-5 md:px-0 md:text-left py-10'>
                            <span className='font-bold'>Corporate Address</span>
                            <br />
                            CWH Solutions
                            <br />
                            94, Ghair Saifuddin Domehla Road,
                            <br />
                            Rampur, Uttar Pradesh, 244901
                        </div>
                        <div className='text-center px-5 md:px-0 md:text-left py-10'>
                            <span className='font-bold'>Customer Support</span>
                            <br />
                            Call/Whatsapp: +919284767320
                            <br />
                            Email: customercare@richerland.com
                            <br />
                            Morning: 9AM - 6PM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
