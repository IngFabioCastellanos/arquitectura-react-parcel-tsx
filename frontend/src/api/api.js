export async function api(props) {
  return new Promise((resolve, reject) => {
    google.script.run
      .withFailureHandler((err) => {
        reject(err);
      })
      .withSuccessHandler((res) => {
        resolve(JSON.parse(res));
      })
      [props.action](props);
  });
}
