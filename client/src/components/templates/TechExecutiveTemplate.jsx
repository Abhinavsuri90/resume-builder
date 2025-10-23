import React from 'react'

const TechExecutiveTemplate = ({ data, resumeData, accentColor }) => {
    // Support both data and resumeData props for compatibility
    const sourceData = data || resumeData || {}
    const {
        personal_info = {},
        professional_summary = "",
        skills = [],
        experience = [],
        education = [],
        project = [],
        accent_color = accentColor || "#1e40af"
    } = sourceData

    return (
        <div className="w-full bg-white text-gray-900 font-sans">
            {/* Header Section with Tech Executive Design */}
            <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white p-8">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                        {/* Profile Image */}
                        {personal_info.image && (
                            <div className="flex-shrink-0">
                                <img 
                                    src={personal_info.image} 
                                    alt="Profile" 
                                    className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-4 border-white/20 object-cover shadow-xl"
                                />
                            </div>
                        )}
                        
                        {/* Personal Info */}
                        <div className="flex-grow">
                            <h1 className="text-3xl lg:text-4xl font-bold mb-2 tracking-wide">
                                {personal_info.full_name || "Your Name"}
                            </h1>
                            <h2 className="text-xl lg:text-2xl text-blue-200 mb-4 font-light">
                                {personal_info.profession || "Tech Executive"}
                            </h2>
                            
                            {/* Contact Info Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm">
                                {personal_info.email && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>{personal_info.email}</span>
                                    </div>
                                )}
                                {personal_info.phone && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>{personal_info.phone}</span>
                                    </div>
                                )}
                                {personal_info.location && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>{personal_info.location}</span>
                                    </div>
                                )}
                                {personal_info.linkedin && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="truncate">{personal_info.linkedin}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-8">
                {/* Executive Summary */}
                {professional_summary && (
                    <section className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-slate-800">Executive Summary</h3>
                            <div className="flex-grow h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
                            <p className="text-gray-700 leading-relaxed text-lg font-light">
                                {professional_summary}
                            </p>
                        </div>
                    </section>
                )}

                {/* Core Competencies */}
                {skills.length > 0 && (
                    <section className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-slate-800">Core Competencies</h3>
                            <div className="flex-grow h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                            {skills.map((skill, index) => (
                                <div key={index} className="group">
                                    <div className="bg-white border border-slate-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:bg-blue-700"></div>
                                            <span className="text-sm font-medium text-slate-700">{skill}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Professional Experience */}
                {experience.length > 0 && (
                    <section className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-2xl font-bold text-slate-800">Professional Experience</h3>
                            <div className="flex-grow h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                        </div>
                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                                        {/* Timeline Connector */}
                                        <div className="absolute -left-4 top-8 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                                        {index < experience.length - 1 && (
                                            <div className="absolute -left-2.5 top-12 w-0.5 h-full bg-blue-200"></div>
                                        )}
                                        
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-800 mb-1">
                                                    {exp.position}
                                                </h4>
                                                <h5 className="text-lg font-semibold text-blue-700 mb-2">
                                                    {exp.company}
                                                </h5>
                                            </div>
                                            <div className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-medium">
                                                {exp.start_date} - {exp.is_current ? "Present" : exp.end_date}
                                            </div>
                                        </div>
                                        
                                        <div className="text-gray-700 leading-relaxed">
                                            {exp.description.split('\n').map((line, i) => (
                                                <p key={i} className="mb-2 last:mb-0">{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Key Projects */}
                {project.length > 0 && (
                    <section className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-2xl font-bold text-slate-800">Key Projects & Initiatives</h3>
                            <div className="flex-grow h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {project.map((proj, index) => (
                                <div key={index} className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">
                                                {proj.name}
                                            </h4>
                                            <span className="text-sm text-blue-700 font-medium bg-blue-100 px-2 py-1 rounded">
                                                {proj.type}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        {proj.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {education.length > 0 && (
                    <section>
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-2xl font-bold text-slate-800">Education</h3>
                            <div className="flex-grow h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-all duration-200">
                                    <h4 className="text-lg font-bold text-slate-800 mb-1">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h4>
                                    <h5 className="text-blue-700 font-semibold mb-2">{edu.institution}</h5>
                                    <div className="flex justify-between items-center text-sm text-slate-600">
                                        <span>{edu.graduation_date}</span>
                                        {edu.gpa && <span className="font-medium">GPA: {edu.gpa}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Footer Design Element */}
            <div className="h-2 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800"></div>
        </div>
    )
}

export default TechExecutiveTemplate