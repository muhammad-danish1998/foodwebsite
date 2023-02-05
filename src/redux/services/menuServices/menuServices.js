import axios from "axios";
import { contentType, axiosUrl } from "../../../apiUrl";


export const getAddonsMenu = (menu_id) => {
  const token = localStorage.getItem("jwt_token");

  return new Promise((ressolve, reject) => {
    const endpoint = axiosUrl(`/ajax/_api_ajax_load_addons.php?menu=50&option=${menu_id}`);

    axios
      .get(endpoint, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => {
        debugger;
        ressolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};