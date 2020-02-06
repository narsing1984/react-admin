import axios from "axios";

/* axios service handler for making api calls */
async function serviceHandler(config) {
    let options = {};
    options = {
        method: config.method,
        headers: (config.headers)?config.headers:{"Content-Type": "application/json"},
        data: config.data,
        url: config.url
    };
    return await axios(options)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}
/* axios service handler for making api calls */

export default serviceHandler;
