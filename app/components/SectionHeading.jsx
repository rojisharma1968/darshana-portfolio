import React from 'react'

const SectionHeading = ({ text, colorText, align = 'text-center' }) => {
    return (
        <h2 className={` text-2xl md:text-4xl font-bold ${align}`}>{text} <span className="text-gradient inline-block">{colorText}</span></h2>
    )
}

export default SectionHeading