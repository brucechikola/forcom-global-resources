import Column from 'components/shared/Column'
import InputField from 'components/shared/InputField'
import React from 'react'

export default function ({ errors, values }) {
    return (
        <div className="grid w-full grid-cols-2 gap-x-5">
            <Column>
                <InputField
                    label="What are your Strengths"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="What are your Weaknesses ?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="Opportunities ?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="Threats?"
                    labelClassName="text-[13px]"
                    placeholder="Give a brief summary"
                    className="h-[40px] bg-gray-50 text-[13px]"
                    type="textArea"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
        </div>
    )
}
