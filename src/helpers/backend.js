import serviceHandler from "./serviceHandler";
import apiconfig from "../constants/URL";

/* Backend service for login */
export function configureBackend() {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          // let params = JSON.parse(opts.body);
          // let config = {
          //     url: apiconfig.LOGIN,
          //     method: "POST",
          //     data: {
          //         username: params.username,
          //         password: params.password
          //     }
          // };
          // serviceHandler(config)
          //     .then(response => {
          //         console.log(response)
          //         if (response.message == "success") {
          //             let responseJson = {
          //                 id: response.id,
          //                 name: response.name,
          //                 user_type: response.user_type,
          //                 photo: response.photo,
          //                 role: "Admin",
          //                 token: response.token
          //             };
          //             resolve({ ok: true, json: () => responseJson });
          //         } else {
          //             reject(response.errorMsg);
          //         }
          //     })
          //     .catch(error => {
          //         console.log(error);
          //     });
          let responseJson = {
            id: "1",
            name: "David Salmon",
            photo: "",
            role: "Admin",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFNhbG1vbiIsImlhdCI6MTUxNjIzOTAyMn0.W4SWZfHc7YORwK2wGHr8427eCv0AXOWblCNC54BrAoo"
          };
          resolve({ ok: true, json: () => responseJson });
          return;
        }
        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
/* Backend service for login */
