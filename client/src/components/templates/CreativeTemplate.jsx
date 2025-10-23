import React from 'react'

const CreativeTemplate = ({ data, resumeData, accentColor }) => {
    // Support both data and resumeData props for compatibility
    const sourceData = data || resumeData || {}
    const {
        personal_info = {},
        professional_summary = "",
        skills = [],
        experience = [],
        education = [],
        project = [],
        accent_color = accentColor || "#ec4899"
    } = sourceData

    return (
        <div className="w-full bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 text-gray-800 font-sans">
            {/* Creative Header */}
            <div className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-pink-400 rounded-full -translate-x-16 -translate-y-16"></div>
                    <div className="absolute top-20 right-10 w-24 h-24 bg-purple-400 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-orange-400 rounded-full translate-y-20"></div>
                </div>
                
                <div className="relative z-10 p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Profile Image with Creative Border */}
                        {personal_info.image && (
                            <div className="flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 rounded-full p-1">
                                    <div className="bg-white rounded-full p-2">
                                        <img 
                                            src={personal_info.image} 
                                            alt="Profile" 
                                            className="w-28 h-28 lg:w-32 lg:h-32 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* Personal Info with Creative Typography */}
                        <div className="flex-grow text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                                {personal_info.full_name || "Your Name"}
                            </h1>
                            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-4 font-light tracking-wide">
                                {personal_info.profession || "Creative Professional"}
                            </h2>
                            
                            {/* Creative Contact Cards */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                {personal_info.email && (
                                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-pink-200">
                                        <span className="text-sm text-gray-700">{personal_info.email}</span>
                                    </div>
                                )}
                                {personal_info.phone && (
                                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-purple-200">
                                        <span className="text-sm text-gray-700">{personal_info.phone}</span>
                                    </div>
                                )}
                                {personal_info.location && (
                                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-orange-200">
                                        <span className="text-sm text-gray-700">{personal_info.location}</span>
                                    </div>
                                )}
                            </div>
                            
                            {/* Portfolio Link */}
                            {personal_info.website && (
                                <div className="mt-4">
                                    <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                                        🌐 {personal_info.website}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content with Creative Layout */}
            <div className="p-8 lg:p-12">
                {/* Creative Summary */}
                {professional_summary && (
                    <section className="mb-10">
                        <div className="relative">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg">
                                    ✨
                                </span>
                                About Me
                            </h3>
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                                <p className="text-gray-700 leading-relaxed text-lg font-light">
                                    {professional_summary}
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Creative Skills Showcase */}
                {skills.length > 0 && (
                    <section className="mb-10">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">
                                🎨
                            </span>
                            Creative Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => {
                                const colors = [
                                    'from-pink-400 to-pink-600',
                                    'from-purple-400 to-purple-600',
                                    'from-orange-400 to-orange-600',
                                    'from-blue-400 to-blue-600',
                                    'from-green-400 to-green-600',
                                    'from-indigo-400 to-indigo-600'
                                ];
                                const colorClass = colors[index % colors.length];
                                
                                return (
                                    <div key={index} className={`bg-gradient-to-r ${colorClass} text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 cursor-default`}>
                                        <span className="font-medium text-sm">{skill}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Experience with Creative Timeline */}
                {experience.length > 0 && (
                    <section className="mb-10">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg">
                                🚀
                            </span>
                            Creative Journey
                        </h3>
                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative">
                                    {/* Creative Timeline */}
                                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 to-purple-300"></div>
                                    <div className="absolute left-4 top-8 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                                    
                                    <div className="ml-16 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-200">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-800 mb-2">
                                                    {exp.position}
                                                </h4>
                                                <h5 className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                                                    {exp.company}
                                                </h5>
                                            </div>
                                            <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
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

                {/* Creative Projects Gallery */}
                {project.length > 0 && (
                    <section className="mb-10">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-lg">
                                💎
                            </span>
                            Featured Projects
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {project.map((proj, index) => {
                                const gradients = [
                                    'from-pink-500 to-purple-600',
                                    'from-purple-500 to-blue-600',
                                    'from-blue-500 to-green-600',
                                    'from-green-500 to-orange-600',
                                    'from-orange-500 to-pink-600'
                                ];
                                const gradientClass = gradients[index % gradients.length];
                                
                                return (
                                    <div key={index} className="group relative">
                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                            <div className={`w-full h-2 bg-gradient-to-r ${gradientClass} rounded-full mb-4`}></div>
                                            
                                            <h4 className="text-xl font-bold text-gray-800 mb-2">
                                                {proj.name}
                                            </h4>
                                            <span className={`inline-block bg-gradient-to-r ${gradientClass} text-white text-xs px-3 py-1 rounded-full font-medium mb-3`}>
                                                {proj.type}
                                            </span>
                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                {proj.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Education with Creative Cards */}
                {education.length > 0 && (
                    <section>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg">
                                🎓
                            </span>
                            Education
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                                    <div className="w-full h-1 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full mb-4"></div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h4>
                                    <h5 className="text-purple-700 font-semibold mb-3">{edu.institution}</h5>
                                    <div className="flex justify-between items-center text-sm text-gray-600">
                                        <span className="bg-gradient-to-r from-indigo-100 to-pink-100 px-3 py-1 rounded-full">
                                            {edu.graduation_date}
                                        </span>
                                        {edu.gpa && (
                                            <span className="bg-gradient-to-r from-pink-100 to-purple-100 px-3 py-1 rounded-full font-medium">
                                                GPA: {edu.gpa}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Creative Footer */}
            <div className="h-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500"></div>
        </div>
    )
}

export default CreativeTemplate