import { JobType } from "../types";

function Job(job: JobType) {
  return (
    <tr>
      <td>{job.id}</td>
      <td>{job.company}</td>
      <td>{job.role}</td>
      <td>{job.submittedAt}</td>
      <td>{job.oaDeadline}</td>
      <td>
        {job.link != null && (
          <a
            href={job.link != null ? job.link : undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        )}
      </td>
      <td>{job.stage}</td>
    </tr>
  );
}

export default Job;
