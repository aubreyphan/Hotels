angular.module('meanhotel').factory('hotelDataFactory', hotelDataFactory);

function hotelDataFactory($http) {
  return {
    hotelList: hotelList,
    hotelDisplay: hotelDisplay,
    postReview: postReview
  };

  function hotelList() {
    return $http.get('/api/hotels?count=10').then(complete).catch(failed);
  }

  function hotelDisplay(hotelId) {
    return $http.get('/api/hotels/' + hotelId).then(complete).catch(failed);
  }

  function postReview(hotelId, review) {
    return $http.post('/api/hotels/' + hotelId + '/reviews', review).then(complete).catch(failed);
  }

  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error.statusText);
  }

}
