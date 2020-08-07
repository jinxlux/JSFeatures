/*
change the background image of a page according to the current time and specific time ranges given
 */
function changeBackGround() {
    //if no arguments, show default photo
    if (arguments.length > 0) {
        var date = new Date();
        // test here by uncomment
        // date.setHours(7);
        for (var i = 0; i < arguments.length; i++) {
            var limitList = arguments[i].split('-');
            var start = parseInt(limitList[0]);
            var end = parseInt(limitList[1]);
            var hour = date.getHours();
            //test if argument is valid            
            if (limitList.length != 2 || !(start === start && end === end)) {
                console.log("wrong argumen: " + arguments[i]);
                continue;
            }
            //test whether current time is in the right range as given         
            if ((start <= end && hour >= start && hour <= end) ||
                // time range which includes midnight point need to be considered
                (start > end && ((hour >= start && hour <= 23) || (hour >= 0 && hour <= end)))) {
                var url = 'imgs/' + (i + 1) + '.jpg';
                //test if image exist
                if (resourcesExist(url)) {
                    document.body.style.backgroundImage = 'url(' + url + ')';
                    return;
                } else {
                    console.log(url + ' not exist');
                    continue;
                }
            }
        }
    }
    //test if default image exist
    if (resourcesExist('imgs/default.jpg')) {
        document.body.style.backgroundImage = 'url(imgs/default.jpg)';
    } else {
        console.log("Default background not exist");
    }
}

/* 
 */
function resourcesExist(url) {
    var http;
    if (window.XMLHttpRequest) {
        // most morden browsers allowed
        http = new XMLHttpRequest();
    } else {
        //consider old version IE
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    http.open('Get', url, false);
    http.send();
    return http.status != 404;

}