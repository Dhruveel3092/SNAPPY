import React, { useState,useEffect } from "react";
import CreatableSelect from "react-select/creatable";


const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [product,setProduct] = useState({skills:[]});
  useEffect(() => {
    console.log(product);
  }, [product]);
  const handleChange = (e) => {
    setProduct({...product, [e.target.name] : e.target.value});
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct(prevProduct => ({ ...prevProduct, skills: selectedOption }));
  };
  

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" }
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job title</label>
              <input
                type="text"
                defaultValue={"Web developer"}
                name = "jobTitle"
                id = "jobTitle"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                name = "companyName"
                id = "comapnyName"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                name = "minPrice"
                id = "minPrice"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                name = "maxPrice"
                id = "maxPrice"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary type</label>
              <select className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New-York"
                name = "jobLocation"
                id = "jobLocation"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="Date"
                placeholder="Ex: 2024-03-23"
                name = "jobPostingDate"
                id = "jobPostingDate"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
               
                className="create-job-input"
              >
                <option value="">Choose your experience</option>
                <option value="NoExperience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets</label>
            <CreatableSelect       
              defaultValue={selectedOption}
              onChange = {setSelectedOption}
              name="skills"
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your company logo URL: https://weLive.com/img1"
                name = "companyLogo"
                id = "companyLogo"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                
                className="create-job-input"
              >
                <option value="">Select your job-type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              placeholder="Job Description"
              defaultValue={
                "Ia ama asnca ANDs N nxc msnxcmx mZXcnzmxn Oemnca mdnsmMZXnbc xbd"
              }
              name = "jobDescription"
                id = "jobDescription"
                onChange={handleChange}
            ></textarea>
          </div>

          {/* Last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              placeholder="your email"
              name = "jobPostedBy"
                id = "jobPostedBy"
                onChange={handleChange}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2
           rounded-sm-cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
