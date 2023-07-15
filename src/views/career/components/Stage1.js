import Column from 'components/shared/Column'
import InputField from 'components/shared/InputField'
import React from 'react'

export default function ({ errors, values }) {
    return (
        <div className="grid w-full grid-cols-2 gap-x-5">
            <Column>
                <InputField
                    label="Provide your first name"
                    labelClassName="text-[13px]"
                    placeholder="First Name"
                    className="h-[50px]"
                />
                {/* <Select
                            options={kyc_content.company_group}
                            value={values.type_of_registration}
                            onChange={handleChange}
                            id="type_of_registration"
                            placeholder='Type of registration'
                            className="w-full h-[45px]"
                        /> */}
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="Provide your last name"
                    labelClassName="text-[13px]"
                    placeholder="Last Name"
                    className="h-[50px]"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="Provide your other names"
                    labelClassName="text-[13px]"
                    placeholder="Other Names"
                    className="h-[50px]"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="Provide your email"
                    labelClassName="text-[13px]"
                    placeholder="Email"
                    className="h-[50px]"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="Provide your contact number"
                    labelClassName="text-[13px]"
                    placeholder="Contact Number"
                    className="h-[50px]"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>
            <Column>
                <InputField
                    label="Provide Province"
                    labelClassName="text-[13px]"
                    placeholder="Province"
                    className="h-[50px]"
                />
                <small className='text-red-500 mb-5'>{errors.type_of_registration}</small>
            </Column>

        </div>
    )
}
