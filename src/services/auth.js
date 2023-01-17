import axios from "axios";

const url = "http://localhost:5000";

async function register(email, password, isAdmin) {
  //   console.log({ email, password, isAdmin });
  const res = await axios.post(`${url}/api/user`, {
    email,
    password,
    isAdmin,
  });
  console.log(res);
}

const authService = {
  register,
};

export default authService;
