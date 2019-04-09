import axios from 'axios';
const Geolocation = function() {
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
    };
    if ('geolocation' in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
        /* geolocation IS NOT available */
        alert('Your browser does not support geolocation.');
    }

    function success(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let APIKey = '0syNCAG2AB8v0TFVEmnwnIMKwD3AD6GA';
        axios
            .get(
                'http://open.mapquestapi.com/geocoding/v1/reverse?location=' +
                    lat +
                    ',' +
                    long +
                    '&key=' +
                    APIKey
            )
            .then(function(response) {
                // handle success
                let state = response.data.results[0].locations[0]['adminArea3'];
                let data = {
                    query: state,
                    recommended: true
                };

                console.log(state);
                axios({
                    method: 'post',
                    url: '/',
                    data: data,
                    responseType: 'document'
                })
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
};

export default Geolocation;
