export const actionTypes = {
  SET_PROJECTS: "SET_PROJECTS",
  ADD_PROJECT: "ADD_PROJECT",
  EDIT_PROJECT: "EDIT_PROJECT",
  DELETE_PROJECT: "DELETE_PROJECT",
};

export function setProjects(projects) {
  return { type: actionTypes.SET_PROJECTS, projects };
}

export function addProjectAction(projectsDetails) {
  return { type: actionTypes.ADD_PROJECT, projectsDetails };
}

export function editProjectAction(projectsDetails) {
  return { type: actionTypes.EDIT_PROJECT, projectsDetails };
}

export function deleteProjectAction(projectsDetails) {
  return { type: actionTypes.DELETE_PROJECT, projectsDetails };
}
