import axios from 'axios';

// Module to populate actiivty feed with results of api call
export default function activityFeed(breweryID) {
    const url = `/api/activity-feed?breweryID=${breweryID}`;

    axios.get(url).then(function(response) {
        console.log(response.data);
        var html = ejs.render(templates.activityFeed, {
            checkins: response.data.activityFeed
        });
        document.getElementById('activity-feed').innerHTML = html;
    });
}
