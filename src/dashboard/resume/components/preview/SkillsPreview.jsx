import React from 'react'

function SkillsPreview({ resumeInfo }) {
    return (
        <div className='my-6'>
            <div className="flex items-center justify-center gap-1 mb-2">
                <img src='https://cdn-icons-png.flaticon.com/128/10262/10262344.png' alt="Education" className="w-7 h-7" />
                <h2 className="font-bold text-sm" style={{ color: resumeInfo?.themeColor }}>
                    Skills
                </h2>
            </div>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            <div className='grid grid-cols-2 gap-3 my-4'>
                {resumeInfo?.Skills.map((skill, index) => (
                    <div key={index} className='flex items-center justify-between'>
                        <h2 className='text-xs'>{skill.name}</h2>
                        <div className='h-2 bg-gray-200 w-[120px]'>
                            <div className='h-2'
                                style={{
                                    backgroundColor: resumeInfo?.themeColor,
                                    width: skill?.rating * 20 + '%'
                                }}
                            >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsPreview