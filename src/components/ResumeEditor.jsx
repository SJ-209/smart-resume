import { useState } from "react";

const ResumeEditor = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [summary, setSummary] = useState("");
    const [workExperience, setWorkExperience] = useState([]);

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

    return (
        <div className="flex flex-col rounded flex-1 p-10 bg-gray-50 ml-[10px] gap-4">
            <h2 className="text-black">Work Experience</h2>
            <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name" 
                className="border p-2 mb-[5px] rounded" />
            <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 mb-[5px] rounded" />
            <input 
                type="tel" 
                placeholder="Phone Number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border mb-[5px] p-2 rounded" />
            <input 
                type="Url" 
                placeholder="Linkedin Profile" 
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                className="border mb-[5px] p-2 rounded" />
            <textarea 
                placeholder="Summary" 
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="border p-2 rounded h-32" />
            
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
                        className="border p-2 rounded w-full mb-2"
                    />
                    <input 
                        type="text"
                        placeholder="Company"
                        value={job.company}
                        onChange={(e) => handleJobChange(index, "company", e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                    />
                    <input 
                        type="text"
                        placeholder="Start Date"
                        value={job.startDate}
                        onChange={(e) => handleJobChange(index, "startDate", e.target.value)}
                        className="border p-2 rounded w-full mb-2"    
                    />
                    <input 
                        type="text"
                        placeholder="End Date"
                        value={job.endDate}
                        onChange={(e) => handleJobChange(index, "endDate", e.target.value)}
                        className="border p-2 rounded w-full mb-2"    
                    />
                    <textarea
                        type="text"
                        placeholder={"Job Description"}
                        value={job.description}
                        onChange={(e) => handleJobChange(index, "description", e.target.value)}
                        className="border p-2 rounded w-full mb-2 h-32"
                    />
                </div>
            ))}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-black">Summary</label>
                <textarea 
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={4}
                    placeholder="Write a short summary about yourself..."
                />
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">{fullName || "Your Name"}</h2>
                <p>{email || "Email goes here"}</p>
                <p>{phoneNumber || "Phone number"}</p>
                <p>{linkedIn || "LinkedIn URL"}</p>
                <p className="mt-4">{summary || "Summary/About Me section..."}</p>
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4 text-black">Resume Preview</h2>
                {workExperience.map((job, index) => (
                    <div key={job.id} className="bg-white p-4 rounded shadow mb-4">
                        <h3 className="text-lg font-semibold">{job.jobTitle}</h3>
                        <p className="text-black">{job.company}</p>
                        <p className="text-black">{job.startDate} - {job.endDate}</p>
                        <p className="mt-2">{job.description}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
  };
  
  export default ResumeEditor;