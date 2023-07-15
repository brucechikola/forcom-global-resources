import Column from 'components/shared/Column'
import InputField from 'components/shared/InputField'
import React from 'react'

export default function ({ errors, values }) {
    return (
        <div className="grid w-full grid-cols-2 gap-x-5">
            <Column>
                <InputField
                    label="What type of a person are you?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="What can you do for the company ?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="By how much will our revenue increase in a year/s if you join the company ?"
                    labelClassName="text-[13px]"
                    placeholder="Indicate figures eg (k50, 000.00) & how"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="What strategy will you use to achieve the above growth in the said period?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="What kind of tools or help do you need to achieve this growth?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="What will be the cost of these tools that you require to effectively deliver?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="How much time do you anticipate to spend everyday in order to achieve these goals?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="What is your expected gross salary per month?"
                    labelClassName="text-[13px]"
                    placeholder="Indicate the Amount"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="How do you propose to deal with loss of revenue by the company if it's a result of your inefficiency and negligence? What measures should the company take to recover the loss?"
                    labelClassName="text-[13px]"
                    placeholder="Indicate the Amount"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="Would you wish to take advance salary from the corporation or any other institutions and how do you propose that it should be recovered?"
                    labelClassName="text-[13px]"
                    placeholder="Indicate the Amount"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="What kind of Empowerment/ capacity building would you want should you be employed by the corporation?"
                    labelClassName="text-[13px]"
                    placeholder="Indicate the Amount"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="What do you understand about the Corporation objectives and Values? How can the corporation grow?"
                    labelClassName="text-[13px]"
                    placeholder="Indicate the Amount"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
        </div>
    )
}
