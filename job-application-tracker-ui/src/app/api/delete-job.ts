const baseUrl = "http://localhost:8080/jobs";

export const deleteJob = (jobId: string) => {
  return fetch(`${baseUrl}/${jobId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
    });
};
