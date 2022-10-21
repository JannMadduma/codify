export const actionTypes = {
  SET_LOGGEDIN: "SET_LOGGEDIN",
};

export function setFreelancers(user) {
  return {
    type: actionTypes.SET_LOGGEDIN,
    loggedIn: user,
  };
}
