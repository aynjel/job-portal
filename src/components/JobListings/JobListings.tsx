import { useState, useEffect } from "react";
import axios from "axios";
import JobListing from "../JobListing/JobListing";
import { JobDTO } from "../../models/Job";
import { BallTriangle } from "react-loader-spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState<JobDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? "/api/jobs?_limit=3&_sort=id" : "/api/jobs";
        const { data } = await axios.get(apiUrl);
        const revertData = data.reverse();
        setJobs(revertData);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Jobs"}
        </h2>
        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <BallTriangle color="#6366F1" height={80} width={80} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
