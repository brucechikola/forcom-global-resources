import React from 'react'
import Footer from 'views/common/Footer'
import Registration from './components/Registration'
import Form from './components/Form'
import Button from 'components/shared/Button'

export default function Career() {
    return (
        <div
            className='w-full min-h-[100vh] bg-gray-100 flex items-center jusitfy-start flex-col text-[14px]'
        >
            <div className="w-[75%] mt-[40px] min-h-[100vh] text-slate-700 ">
                <div className="w-full text-slate-800">
                    <div className="text-[40px] font-bold text-slate-700">Career & Employment</div>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam iusto at ullam dolor porro perferendis nihil?
                        Facilis praesentium velit modi
                        est quasi qui provident tempora, libero laborum consectetur totam.
                        Laudantium nemo alias omnis asperiores quam, quod quas neque, nulla tenetur fugiat pariatur sapiente est rerum dolore eaque placeat voluptates
                        dicta vitae hic. Obcaecati optio dolorem magni dolorum aspernatur incidunt?
                    </p>
                </div>
                <Registration />
                <div className="my-2">Provide the required info below by filling in all the fields provided</div>
                <Form />

            </div>
            <Footer />
        </div>
    )
}
