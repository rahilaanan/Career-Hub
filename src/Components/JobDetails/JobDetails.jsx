import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs =useLoaderData();
    const {id}= useParams();
    const idInt =parseInt(id);
    const job =jobs.find(job => job.id === idInt);

    console.log(job)
    return (
        <div>
            <h2>Job details of:{id} </h2>
            <div className="grid gap-4 grid-cols-4">
                <div className="border-2 md: col-span-3 ">
                    <h2>Details coming here</h2>
                </div>
                <div className="border-2">
                    <h2>Job Details</h2>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;