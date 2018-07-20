import request from "../network/network";

function getVenues() {
  return request({
    url: `v2/venues/search?ll=13.34,74.74&client_id=MVGGWLVSD2MHOQAR5JMY0B5XY3EN1OGDZHETEAPGAN5PVG4U&client_secret=PCYFA3FUX4YE4A5PP2CKKGEYBC0YURIPPGMXHKYLWGJQJJ5B&v=20180719&categoryId=4d4b7105d754a06374d81259`,
    method: "GET"
  });
}
function getDetails(VENUE_ID) {
  return request({
    url: `v2/venues/${VENUE_ID}?&client_id=MVGGWLVSD2MHOQAR5JMY0B5XY3EN1OGDZHETEAPGAN5PVG4U&client_secret=PCYFA3FUX4YE4A5PP2CKKGEYBC0YURIPPGMXHKYLWGJQJJ5B&v=20180719`,
    method: "GET"
  });
}

function getPopularVenues() {
  return request({
    url: `v2/venues/explore?ll=13.34,74.74&client_id=MVGGWLVSD2MHOQAR5JMY0B5XY3EN1OGDZHETEAPGAN5PVG4U&client_secret=PCYFA3FUX4YE4A5PP2CKKGEYBC0YURIPPGMXHKYLWGJQJJ5B&v=20180719&categoryId=4d4b7105d754a06374d81259`,
    method: "GET"
  });
}
function getCoffeeVenues() {
  return request({
    url: `v2/venues/search?ll=13.34,74.74&client_id=MVGGWLVSD2MHOQAR5JMY0B5XY3EN1OGDZHETEAPGAN5PVG4U&client_secret=PCYFA3FUX4YE4A5PP2CKKGEYBC0YURIPPGMXHKYLWGJQJJ5B&v=20180719&categoryId=4bf58dd8d48988d1e0931735`,
    method: "GET"
  });
}

function getLunchVenues() {
  return request({
    url: `v2/venues/search?ll=13.34,74.74&client_id=MVGGWLVSD2MHOQAR5JMY0B5XY3EN1OGDZHETEAPGAN5PVG4U&client_secret=PCYFA3FUX4YE4A5PP2CKKGEYBC0YURIPPGMXHKYLWGJQJJ5B&v=20180719&categoryId=4bf58dd8d48988d147941735`,
    method: "GET"
  });
}

const Services = {
  getVenues,
  getDetails,
  getPopularVenues,
  getCoffeeVenues,
  getLunchVenues
};

export default Services;
