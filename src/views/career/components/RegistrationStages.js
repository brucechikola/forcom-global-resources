import React from 'react'
import RegStage from './RegStage'

export default function RegistrationStages() {
    return (
        <div className='w-full my-5 min-h-[50px] bg-gray-200 rounded-md grid grid-cols-5 overflow-hidden text-slate-700 text-[13px]'>
            <RegStage title="Primary Info" index={1} />
            <RegStage title="Questionaire" index={2} />
            <RegStage title="SWORT Analysis" index={3} />
            <RegStage title="Work Experience" index={4} />
            <RegStage title="Education" index={5} />

        </div>
    )
}
