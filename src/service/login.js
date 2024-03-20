import http from "../http-common";

const login = async (data) => {
  try {
    console.log("im here");
    const response = await http.post("/login", data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const logout = () => {
  // Implementation for logout
  console.log("Logout function needs implementation.");
};

export default {
  login,
  logout,
};







// import http from "../http-common";



// const login = async (data) => {
//   try {
//     const response = await http.post("/login", data);
//     return response.data;
//   } catch (error) {
//     console.error("Error during login:", error);
//     throw error;
//   }
// };



// export default {
//   showSignupForm,
//   showLoginForm,
//   login,
//   logout,
// };
// const showSignupForm = async () => {
//   try {
//     const response = await http.get("/register");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching signup form:", error);
//     throw error;
//   }
// };

// const showLoginForm = async () => {
//   try {
//     const response = await http.get("/login");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching login form:", error);
//     throw error;
//   }
// };

// const logout = async () => {
//   try {
//     const response = await http.get("/logout");
//     return response.data;
//   } catch (error) {
//     console.error("Error during logout:", error);
//     throw error;
//   }
// };