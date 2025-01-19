//import React from 'react';
//import PropTypes from 'prop-types';

function EducationalPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-center gap-1 mb-1">
        <img src='https://cdn-icons-png.flaticon.com/128/123/123402.png' alt="Education" className="w-7 h-7" />
        <h2 className="font-bold text-sm" style={{ color: resumeInfo?.themeColor }}>
          Education
        </h2>
      </div>

      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.Education.map((education, index) => (
        <div key={index} className="my-4">
          <div className="flex justify-between text-xs ">
            <div>
              <h2 className="text-sm font-bold" style={{ color: resumeInfo?.themeColor }}>
                {education.universityName}
              </h2>
              <h2 className="text-xs flex justify-between" style={{ color: resumeInfo?.themeColor }}>
                {education?.degree} in {education?.major}
              </h2>
            </div>
            <span style={{ color: resumeInfo?.themeColor }}>{education?.startDate} - {education?.endDate}</span>
          </div>
          <p className="text-xs my-3 font-sans">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}

// EducationalPreview.propTypes = {
//   resumeInfo: PropTypes.shape({
//     themeColor: PropTypes.string,
//     education: PropTypes.arrayOf(
//       PropTypes.shape({
//         universityName: PropTypes.string.isRequired,
//         degree: PropTypes.string.isRequired,
//         major: PropTypes.string.isRequired,
//         startDate: PropTypes.string.isRequired,
//         endDate: PropTypes.string.isRequired,
//         description: PropTypes.string,
//       })
//     ).isRequired,
//   }).isRequired,
// };

export default EducationalPreview;
