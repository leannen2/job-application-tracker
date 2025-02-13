export const getJobs = () => {
  return fetch("http://localhost:8080/jobs")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("error occurred: ", error);
      throw error;
    });
};
