export async function api(props) {
  return new Promise((resolve, reject) => {
    google.script.run
      .withFailureHandler((err) => {
        reject(err);
      })
      .withSuccessHandler((res) => {
        if (typeof res == "string") {
          resolve(JSON.parse(res));
        }
        resolve(res);
      })
      [props.action](props);
  });
}
