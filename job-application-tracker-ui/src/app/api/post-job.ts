import { Job } from "@/lib/definitions";
const url = "http://localhost:8080/add-job";

export const addJob = (job: any): Promise<Job> => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
