import React from 'react'

export default function Role() {
    return (
        <div className='w-[80%] mx-auto min-h-[300px] grid grid-cols-2 gap-x-4 mt-[100px]'>
            <div className="w-full">
                <span className='text-third text-[11px] mb-3'>Construction Sector</span>
                <h1 className='text-[40px] font-bold w-full text-gray-700 m-0'>
                    <span><span className="text-tertiary">Our Role</span> In The Construction Sector</span>
                    <div className="w-[150px] h-[5px] bg-tertiary mt-3 rounded-md"></div>
                </h1>
                <p className="mt-5 text-[12px]">
                    Modernizing Infrastructure for Sustainable Habitation and Commercial Use. At the heart of our construction division lies a vision of transforming both rural and urban landscapes into modern, habitable, and affordable spaces. Our mission is to bring about positive change in people's lives by providing high-end, contemporary infrastructure that caters to diverse needs while promoting sustainability. Our construction division is driven by a commitment to uplifting communities and reshaping landscapes through the creation of modern, affordable, and sustainable infrastructure. By working collaboratively and embracing diverse perspectives, we aim to leave a legacy of positive change, transforming lives and inspiring future generations. Together, we envision a future where infrastructure fosters progress, inclusivity, and the well-being of all.
                    Our commitment to creating sustainable employment opportunities drives our engagement with skilled artisans and engineering professionals. We understand that the success of our projects rests on the expertise and dedication of these individuals. By providing them with opportunities to showcase their talents and contribute to meaningful projects, we empower artisans and professionals in the engineering sector, fostering a culture of growth and innovation within our organization.
                </p>
                <button className="bg-tertiary text-white mt-3 rounded-md w-[250px] h-[60px] text-[18px]">Join Us</button>
            </div>
            <div className="w-full  relative rounded-md">
                <div className="absolute right-[-50px] w-[70%] h-[80%] top-0 bg-tertiary z-[0] rounded-md"></div>
                <img src="img/others/model.png" className="z-[12] w-full h-[550px] object-cover relative bg-white rounded-md" />
            </div>
        </div>
    )
}
