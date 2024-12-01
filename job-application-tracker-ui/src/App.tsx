import "./App.css";
import Job from "./components/Job";
import jobList from "./data/jobs-list-example.json";
import { fetchJobs } from "./api/jobApi";
import { useState, useEffect } from "react";
import { JobType } from "./types";

function App() {
  const [jobs, setJobs] = useState<Array<JobType>>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchJobs()
      .then((data) => {
        setJobs(data);
        setError("");
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 id="tracker-list-header">Job Application Tracker</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Role</th>
            <th>Submitted At</th>
            <th>OA Deadline</th>
            <th>Link</th>
            <th>Stage</th>
          </tr>
        </thead>
        <tbody>
          {error === "" && jobs.map((job) => <Job {...job} key={job.id} />)}
          {error !== "" && jobList.map((job) => <Job {...job} key={job.id} />)}
        </tbody>
      </table>
      {error !== "" && (
        <p id="error-text">
          Backend is not currently running, so example data has been loaded.
        </p>
      )}
    </div>
  );
}

export default App;
