
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} =job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className="w-24" src={logo}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="space-x-3">
            <button className="px-4 py-2 font-bold border-2 rounded-lg border-orange-400 text-orange-300">{remote_or_onsite}</button>
            <button className="px-4 py-2 font-bold border-2 rounded-lg border-orange-400 text-orange-300">{job_type}</button>
          </div>
          <div className="flex items-center m-2">
          <CiLocationOn className="text-xl" />
          {location}
          <BsCurrencyDollar className="text-lg" />
       <p>Salary: {salary}</p>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn bg-orange-500 text-white font-bold">View Details</button></Link>
          </div>
        </div>

      </div>
    );
};

export default Job;