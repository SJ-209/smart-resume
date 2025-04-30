import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ResumeEditor = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [summary, setSummary] = useState("");
    const [workExperience, setWorkExperience] = useState([]);

    const [education, setEducation] = useState([
        {
            id: uuidv4(),
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            description: ""
        },
    ])

    const handleAddJob = () => {
        setWorkExperience([
            ...workExperience,
            {
                id:"",
                jobtitle: "",
                company: "",
                startDate: "",
                endDate: "",
                description: ""
            }
        ]);
        console.log(workExperience);
    }

    const handleJobChange = (index, field, value) => {
        const updatedJobs = [...workExperience];
        updatedJobs[index][field]=value;
        setWorkExperience(updatedJobs);
    }

    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...education];
        updatedEducation[index][field] = value;
        setEducation(updatedEducation);
    }

    return (
        <div className="flex flex-col rounded flex-1 p-10 bg-gray-50 ml-[10px] gap-4">
            <h2 className="text-black">Work Experience</h2>
            <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name" 
                className="border p-2 mb-[5px] rounded text-black" />
            <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 mb-[5px] rounded text-black" />
            <input 
                type="tel" 
                placeholder="Phone Number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border mb-[5px] p-2 rounded text-black" />
            <input 
                type="Url" 
                placeholder="Linkedin Profile" 
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                className="border mb-[5px] p-2 rounded text-black" />
            <textarea 
                placeholder="Summary" 
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="border p-2 rounded h-32 text-black" />
            
            <button
                onClick={handleAddJob}
                >
                    Add Job Experience
            </button>
            {workExperience.map((job,index) =>(
                <div key={job.title} className= "bg-white p-4 rounded shadow mb-4">
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={job.jobtitle}
                        onChange={(e) => handleJobChange(index, "jobtitle", e.target.value)}
                        className="border p-2 rounded w-full mb-2 text-black"
                    />
                    <input 
                        type="text"
                        placeholder="Company"
                        value={job.company}
                        onChange={(e) => handleJobChange(index, "company", e.target.value)}
                        className="border p-2 rounded w-full mb-2 text-black"
                    />
                    <input 
                        type="text"
                        placeholder="Start Date"
                        value={job.startDate}
                        onChange={(e) => handleJobChange(index, "startDate", e.target.value)}
                        className="border p-2 rounded w-full mb-2 text-black"    
                    />
                    <input 
                        type="text"
                        placeholder="End Date"
                        value={job.endDate}
                        onChange={(e) => handleJobChange(index, "endDate", e.target.value)}
                        className="border p-2 rounded w-full mb-2 text-black"    
                    />
                    <textarea
                        type="text"
                        placeholder={"Job Description"}
                        value={job.description}
                        onChange={(e) => handleJobChange(index, "description", e.target.value)}
                        className="border p-2 rounded w-full mb-2 h-32 text-black"
                    />
                </div>
            ))}
            {education.map((edu, index) => (
                <div key={edu.id} className="bg-white p-4 rounded shadow mb-4">
                    <input
                        type="text"
                        placeholder="School Name"
                        value={edu.school}
                        onChange={(e) => handleEducationChange(index, "school", e.target.value)}
                        className="border p-2 rounded w-full mb-2 text-black"
                    />
                    <input 
                        type="text"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                        className="border p-2 rounded w-full mb-2 text-black"
                    />
                    <input 
                        type="text"
                        placeholder="Start Date"
                        value={edu.startDate}
                        onChange={(e) => handleEducationChange(index, "startDate", e.target.value)}
                        className="border p-2 rounded w-full mb-2 text-black"    
                    />
                    <input 
                        type="text"
                        placeholder="End Date"
                        value={edu.endDate}
                        onChange={(e) => handleEducationChange(index, "endDate", e.target.value)}
                        className="border p-2 rounded w-full mb-2 text-black"    
                    />
                    <textarea
                        type="text"
                        placeholder={"Description"}
                        value={edu.description}
                        onChange={(e) => handleEducationChange(index, "description", e.target.value)}
                        className="border p-2 rounded w-full mb-2 h-32 text-black"
                    />
                </div>
            ))}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-black">Summary</label>
                <textarea 
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full p-2 border rounded text-black"
                    rows={4}
                    placeholder="Write a short summary about yourself..."
                />
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">{fullName || "Your Name"}</h2>
                <p>{email || "Email goes here"}</p>
                <p>{phoneNumber || "Phone number"}</p>
                <p>{linkedIn || "LinkedIn URL"}</p>
                <p className="mt-4 text-black">{summary || "Summary/About Me section..."}</p>
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4 text-black">Resume Preview</h2>
                <h3 className="text-lg font-bold mb-2 text-blue-600">Work Experience</h3>
                {workExperience.map((job) => (
                    <div key={job.id} className="bg-white p-4 rounded shadow mb-4">
                        <h3 className="text-lg font-semibold text-black">{job.jobTitle || "Job Title"}</h3>
                        <p className="text-black">{job.company || "Company"}</p>
                        <p className="text-black">{job.startDate} - {job.endDate}</p>
                        <p className="mt-2 text-black">{job.description}</p>
                    </div>
                ))}
                <h3 className="text-lg font-bold mt-6 mb-2 text-blue-600">Education</h3>
                {education.map((edu) => (
                    <div key={edu.id} className="bg-white p-4 rounded shadow mb-4">
                        <h3 className="text-lg font-semibold text-black">{edu.degree}</h3>
                        <p className="text-black">{edu.school || "School Name"}</p>
                        <p className="text-black">{edu.startDate} - {edu.endDate}</p>
                        <p className="mt-2 text-black">{edu.description}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
  };
  
  export default ResumeEditor;