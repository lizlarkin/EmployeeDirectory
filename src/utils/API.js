import axios from "axios";

export default {
  getEmployeeByLocation: function(nat) {
    return axios.get("https://randomuser.me/api/?nat=" + nat);
}
}