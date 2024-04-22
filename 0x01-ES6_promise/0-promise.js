function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);