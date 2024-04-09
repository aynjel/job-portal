import Hero from "../../components/Hero/Hero";
import HomeCards from "../../components/HomeCards/HomeCards";
import JobListings from "../../components/JobListings/JobListings";
import ViewAllJobs from "../../components/ViewAllJobs/ViewAllJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Home;
