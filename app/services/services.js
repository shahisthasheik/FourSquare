import request from "../network/network";

function getVenues() {
  return request({
    url: `v2/venues/search?ll=12.91,74.86&client_id=XCSOTOHEQXKVDTUJPXYDV022OT3V4MT0EFBXGBOVUVG12VNS&client_secret=D3W4DXPSMUTQR0ZWK5JT0M5QR2CAO0CHF2VR3THN3G3BB2G5&v=20180718&categoryId=4d4b7105d754a06374d81259`,
    method: "GET"
  });
}
function getDetails(VENUE_ID) {
  return request({
    url: `v2/venues/${VENUE_ID}?&client_id=XCSOTOHEQXKVDTUJPXYDV022OT3V4MT0EFBXGBOVUVG12VNS&client_secret=D3W4DXPSMUTQR0ZWK5JT0M5QR2CAO0CHF2VR3THN3G3BB2G5&v=20180718&categoryId=4d4b7105d754a06374d81259`,
    method: "GET"
  });
}

const Services = {
  getVenues,
  getDetails
};

export default Services;
