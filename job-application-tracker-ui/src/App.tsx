import "./App.css";
import Job from "./components/Job";
import jobList from "./data/jobs-list-example.json";
import { fetchJobs } from "./api/jobApi";
import { useState, useEffect } from "react";
import { JobType } from "./types";

function App() {
  const [jobs, setJobs] = useState<Array<JobType>>([]);
  const [error, setError] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof JobType;
    direction: string;
  }>({ key: "id", direction: "ascending" });

  useEffect(() => {
    fetchJobs()
      .then((data) => {
        setJobs(data);
        setError("");
      })
      .catch((error) => {
        setError(error);
        setJobs([...jobList]);
      });
  }, []);

  useEffect(() => {
    const sortedJobs = [...jobs];
    console.log(sortConfig);
    if (sortConfig) {
      sortedJobs.sort((a, b) => {
        const key = sortConfig.key;
        const direction = sortConfig.direction;

        const valueA = a[key];
        const valueB = b[key];

        if (
          valueA !== undefined &&
          valueB !== undefined &&
          valueA !== null &&
          valueB !== null
        ) {
          if (valueA < valueB) {
            return direction === "ascending" ? -1 : 1;
          }
          if (valueA > valueB) {
            return direction === "ascending" ? 1 : -1;
          }
        }

        return 0;
      });
    }
    setJobs([...sortedJobs]);
    console.log("jobs", jobs);
  }, [sortConfig]);

  const handleSort = (key: keyof JobType) => {
    console.log("handle sort");
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="App">
      <h1 id="tracker-list-header">Job Application Tracker</h1>
      <table border={1}>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>ID</th>
            <th onClick={() => handleSort("company")}>Company</th>
            <th onClick={() => handleSort("role")}>Role</th>
            <th onClick={() => handleSort("submittedAt")}>Submitted At</th>
            <th onClick={() => handleSort("oaDeadline")}>OA Deadline</th>
            <th onClick={() => handleSort("link")}>Link</th>
            <th onClick={() => handleSort("stage")}>Stage</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <Job {...job} key={job.id} />
          ))}
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
