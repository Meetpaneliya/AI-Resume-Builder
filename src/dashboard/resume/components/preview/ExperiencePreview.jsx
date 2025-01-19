//import React from 'react'

function ExperiencePreview({ resumeInfo }) {
    return (
        <div className='my-6'>
            <div className="flex items-center justify-center gap-2 mb-2">
                <img src='https://cdn-icons-png.flaticon.com/128/4995/4995049.png' alt="Education" className="w-6 h-6" />
                <h2 className="font-bold text-sm" style={{ color: resumeInfo?.themeColor }}>
                    Professional Experience
                </h2>
            </div>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            {resumeInfo?.Experience?.map((experience, index) => (
                <div key={index} className='my-3'>
                    <div className="flex justify-between mb-3">
                        <div>
                            <h2 className='text-sm font-bold'
                                style={{
                                    color: resumeInfo?.themeColor
                                }}>{experience?.title}</h2>
                            <h2 className='text-xs flex justify-between' style={{
                                    color: resumeInfo?.themeColor
                                }}>{experience?.companyName},
                                {experience?.city},
                                {experience?.state}
                            </h2>
                        </div>

                        <span className="text-xs mt-2" style={{
                                    color: resumeInfo?.themeColor
                                }}>{experience?.startDate} To {experience?.currentlyWorking ? 'Present' : experience.endDate} </span>
                    </div>


                    <div className='text-xs font-sans my-2' dangerouslySetInnerHTML={{ __html: experience?.workSummery }} />
                </div>
            ))}
        </div>
    )
}

export default ExperiencePreview