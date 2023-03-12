import axios from "axios";


const AuthService = {
  login: async (email, password) => {
    return await axios
      .post(`http://ec2-52-72-83-242.compute-1.amazonaws.com/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        // check if repsonse contains token
        if (res.data.data.token) {
          // set user to local storage
          localStorage.setItem("user", JSON.stringify(res.data.data));
        }
        return res.data;
      });
  },
  signup: async (fullname, email, username, password) => {
    return await axios
      .post(`http://ec2-52-72-83-242.compute-1.amazonaws.com/auth/register`, {
        fullname,
        email,
        username,
        password,
      })
      .then((res) => {
        return res.data;
      });
  },
  getUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
  logout: () => {
    localStorage.removeItem("user");
  },
};

export default AuthService;
