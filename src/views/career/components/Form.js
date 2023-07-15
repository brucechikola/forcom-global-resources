
import { useFormik } from 'formik'
import React from 'react'
import { basicSchema } from 'schema/validation'
import Stage1 from './Stage1'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'components/shared/Button'
import { setRegistrationStage } from 'store/career/careerSlice'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
export default function Form() {
    const { registration_stage } = useSelector(state => state.career)
    const disptach = useDispatch()
    console.log(registration_stage)
    const onNextPrev = (e, next) => {
        e.preventDefault()
        if (next) {
            if (registration_stage < 5) {
                disptach(setRegistrationStage(registration_stage + 1))
            }
        }
        else {
            if (registration_stage > 1) {
                disptach(setRegistrationStage(registration_stage - 1))
            }
        }
    }
    const onSubmit = (values) => {

    }
    const { values, touched, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            type_of_registration: '',
            sector: '',
            organization: '',
            domain_name: '',
            email_address: '',
            country: '',
            town: '',
            address: '',
            tpin: '',
            registration_no: '',
            contact_no: '',
            is_vat_registered: '',
            vat_no: ''
        },
        validationSchema: basicSchema,
        onSubmit
    })

    return (
        <div>
            <form onSubmit={handleSubmit} className=' flex flex-col w-full bg-white min-h-[50vh] flex items-center justify-between flex-col rounded-md p-5'>
                {registration_stage === 1 && <Stage1 errors={errors} values={values} />}
                {registration_stage === 2 && <Stage2 errors={errors} values={values} />}
                {registration_stage === 3 && <Stage3 errors={errors} values={values} />}
                <div className="w-full mt-10 flex-end items-center justify-end flex ">
                    <Button onClick={(e) => onNextPrev(e, false)} className="w-[200px] mr-10">Previous Stage</Button>
                    <Button onClick={(e) => onNextPrev(e, true)} className="w-[200px] bg-tertiary text-white hover:bg-indigo-900">Next Stage</Button>
                </div>
            </form>
        </div>
    )
}
