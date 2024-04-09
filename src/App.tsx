import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import axios from "axios";
import { JobDTO } from "./models/Job";
import Home from "./pages/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Jobs from "./pages/JobsPage/JobsPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage/JobPage";
import AddJobPage from "./pages/AddJobPage/AddJobPage";
import EditJobPage from "./pages/EditJobPage/EditJobPage";

const App = () => {
  // Add a new job
  const addJob = async (newJob: JobDTO) => {
    await axios.post("api/jobs", newJob);
  };

  // Delete a job
  const deleteJob = async (id: string) => {
    await axios.delete(`api/jobs/${id}`);
  };

  // Update a job
  const updateJob = async (job: JobDTO) => {
    await axios.put(`api/jobs/${job.id}`, job);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id/edit"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
