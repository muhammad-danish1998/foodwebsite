import { toast } from "react-toastify";

import {
  login,
  register,
  // resetPassword,
  // createNewPassword,
  // logout,
} from "../../services/authServices/authServices";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTRATION, REGISTRATION_FAIL } from "../types/actionTypes";

export const registerUser =
  (state, navigate) => async dispatch => {
  
    dispatch({type: REGISTRATION});
    try {
    
      const response = await register(state);
      console.log("response", response);

      if (response.type == "success") {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response,
        });
        localStorage.setItem("userid", response.data.id);
        // setLoading(false);
        toast.success(response?.msg);

        // setState({
        //   full_name: "",
        //   email: "",
        //   phone: "",
        //   identity_img: [],
        //   password: "",
        //   oldPwd: "",
        // });
      }
      else{
        dispatch({
          type: REGISTRATION_FAIL,
          payload: 'Failed to fetch data',
        });
        console.log("hh", response)
        toast.error(response?.errorarr);
        // setLoading(false);
      }
    } catch (e) {
      console.log(e);
      // toast.error(error?.errorarr);
      // setLoading(false);
    }
  };

export const loginUser = (state, navigate) => async dispatch => {
  dispatch({type: LOGIN});

  try {
    const response = await login(state);

    if (response.success === 1) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      let message = "";
      localStorage.setItem("userid", response.data.id);
      // setLoading(false);
      toast.success(`Login Successfull${message}`);
    }
    if (response.success === 0) {
      // setLoading(false);
      dispatch({
        type: LOGIN_FAIL,
        payload: 'Failed to fetch data',
      });
      if (response.message) {
        toast.error(response.message);
      } else if (response.data) {
        toast.error(response.data);
      }
    }
  } catch (error) {
    // setLoading(false);
  }
};

// export const resetPass = (email, navigate, setLoading) => async () => {
//   try {
//     const response = await resetPassword(email);

//     if (response.message) {
//       setLoading(false);
//       navigate("/confirm-email");
//     }

//     if (response.success === 0) {
//       toast.error(response.message);
//       setLoading(false);
//     }
//   } catch (err) {
//     console.log(err);
//     if (err) {
//       setLoading(false);
//     }
//   }
// };

// export const createNewPass =
//   (state, id, navigate, setLoading, setState) => async () => {
//     try {
//       const response = await createNewPassword(state, id);

//       if (response.data) {
//         setLoading(false);
//         toast.success(response.data);

//         setState({
//           password: "",
//           confirmPassword: "",
//         });
//       }

//       if (response.success === 0) {
//         toast.error(response.data);
//         setLoading(false);
//       }
//     } catch (err) {
//       console.log(err);
//       if (err) {
//         setLoading(false);
//       }
//     }
//   };

// export const logoutUser = (navigate) => () => {
//   navigate("/login");
//   logout();
// };
