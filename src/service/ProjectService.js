import axios from "axios";

const projectURL = "http://127.0.0.1:8000/api/clients";
const projectAddURL = "http://127.0.0.1:8000/api/add-client";
const projectDeleteURL = "http://127.0.0.1:8000/api/delete-client";
const projectEditURL = "http://127.0.0.1:8000/api/update-client";

export const getAllProjects = async (id) => {
  id = id || "";
  return await axios.get(`${projectURL}/${id}`);
};

export const addProjects = async (projectsDetails) => {
  return await axios.post(projectAddURL, projectsDetails);
};

export const editProjects = async (id, projectsDetails) => {
  return await axios.put(`${projectEditURL}/${id}`, projectsDetails);
};

export const deleteProjects = async (id) => {
  return await axios.delete(`${projectDeleteURL}/${id}`);
};
