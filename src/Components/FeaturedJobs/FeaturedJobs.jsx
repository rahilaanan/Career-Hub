import { useEffect, useState } from "react";

import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] =useState([]);
    //not the best way
    const [dataLength,setDataLength] =useState(4);
    useEffect ( ()=>{
fetch ('/public/jobs.json')
.then(res => res.json())
.then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
            <h2 className="text-4xl text-center font-bold">Featured Jobs: {jobs.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0,dataLength).map(job =><Job key={job.id} job={job}></Job> )
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn bg-orange-500 text-white font-bold">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;