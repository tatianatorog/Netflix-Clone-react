import axios from "axios";

/** base url to make request to the themoviedatabase */

const instance = axios.create({
   baseURL: "https://api.themoviedb.org/3",
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar
// The axios.create() function creates a new Axios instance. When you require('axios'), you get back an the default Axios instance. The reason why you would create an instance is to set custom defaults for your application.

export default instance;
