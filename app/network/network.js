import axios from "react-native-axios";

const client = axios.create({
  baseURL: "https://api.foursquare.com/"
});

client.interceptors.request.use(config => {
  console.log(config);

  return config;
});

const request = function(options) {
  const onSuccess = function(response) {
    console.debug("Request Successful!", response.data);
    return response.data;
  };

  const onError = function(error) {
    console.log("Request Failed:", error.response);
    return Promise.reject(error.response);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
