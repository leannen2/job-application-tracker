import "./App.css";
import Job from "./components/Job";
import jobList from "./data/jobs-list-example.json";
import { fetchJobs } from "./api/jobApi";
import { useState, useEffect } from "react";
import { JobType } from "./types";
import { ReactComponent as ArrowUp } from "./assets/arrow-up.svg";
import { ReactComponent as ArrowDown } from "./assets/arrow-down.svg";

function App() {
  const [jobs, setJobs] = useState<Array<JobType>>([]);
  const [error, setError] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof JobType;
    direction: string;
  }>({ key: "id", direction: "ascending" });

  useEffect(() => {
    fetchJobs()
      .then((data: any) => {
        setJobs(data);
        setError("");
      })
      .catch((error: any) => {
        setError(error);
        setJobs([...jobList]);
      });
  }, []);

  // sort jobs when sortConfig changes
  useEffect(() => {
    const sortedJobs = [...jobs];
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
        } else {
          if (valueA === undefined || valueA === null) {
            return direction === "ascending" ? -1 : 1;
          } else {
            return direction === "ascending" ? 1 : -1;
          }
        }

        return 0;
      });
    }
    setJobs([...sortedJobs]);
  }, [sortConfig]);

  const handleSort = (key: keyof JobType) => {
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

  const getSortIcon = (key: keyof JobType) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <ArrowUp className="sort-icon" />
      ) : (
        <ArrowDown className="sort-icon" />
      );
    }
    return <ArrowUp className="sort-icon" style={{ visibility: "hidden" }} />;
  };

  return (
    <div className="App">
      <h1 id="tracker-list-header">Job Application Tracker</h1>
      <div id="table-container">
        <table border={1}>
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>
                ID
                {getSortIcon("id")}
              </th>
              <th onClick={() => handleSort("company")}>
                Company
                {getSortIcon("company")}
              </th>
              <th onClick={() => handleSort("role")}>
                Role
                {getSortIcon("role")}
              </th>
              <th onClick={() => handleSort("submittedAt")}>
                Submitted At
                {getSortIcon("submittedAt")}
              </th>
              <th onClick={() => handleSort("oaDeadline")}>
                OA Deadline
                {getSortIcon("oaDeadline")}
              </th>
              <th onClick={() => handleSort("link")}>
                Link
                {getSortIcon("link")}
              </th>
              <th onClick={() => handleSort("stage")}>
                Stage
                {getSortIcon("stage")}
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <Job {...job} key={job.id} />
            ))}
          </tbody>
        </table>
      </div>

      {error !== "" && (
        <p id="error-text">
          Backend is not currently running, so example data has been loaded.
        </p>
      )}
    </div>
  );
}

export default App;
