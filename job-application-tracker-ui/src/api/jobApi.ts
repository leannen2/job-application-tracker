import axios from "axios";

export const fetchJobs = () => {
  return axios
    .get("http://localhost:8080/jobs")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error occurred: ", error);
      throw error;
    });
};
