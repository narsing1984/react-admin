/* AUTH */
let apiconfig = {};

const local = {
  //Assests
  ASSETS_URL: "http://localhost:5000",
  //Auth
  LOGIN: "http://localhost:5000/auth/login",
  GET_SETTINGS: "http://localhost:5000/settings/get",
  UPDATE_SETTINGS: "http://localhost:5000/settings/update",
};

const prod = {};

// Default to dev if not set
if (process.env.NODE_ENV === "development") {
  apiconfig = local;
} else if (process.env.NODE_ENV === "production") {
  apiconfig = prod;
}

export default { ...apiconfig };
