
import React from 'react'

interface SectionHeaderProps {
  sectionId: string
  sectionName: string
  sectionNumber: string
  sectionDescription: string
}

const SectionHeader = ({ sectionId, sectionName, sectionNumber, sectionDescription }: SectionHeaderProps) => {
  return (
    <div id={sectionId} className="flex flex-col items-center mb-6">
      <div className="flex items-center gap-x-4 font-dosis mt-2">
        <h1 className="text-6xl sm:text-[12rem] text-primary font-bold">{sectionNumber}</h1>
        <h1 className="text-8 font-bold text-slate-800 mt-9 border-slate-800 border-y py-2 text-2xl sm:text-5xl font-grotesk">{sectionName}</h1>
      </div>
      <p className="text-lg sm:text-4xl font-medium text-slate-800 font-grotesk">{sectionDescription}</p>
    </div>
  )
}

export default SectionHeader

