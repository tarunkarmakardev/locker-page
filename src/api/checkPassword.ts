import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

const checkPassword = async (payload: string) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_BACKEND_URL}/check-password`,
      {
        password: window.btoa(payload),
      }
    );
    if (!data.message) {
      throw new Error();
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export default checkPassword;
