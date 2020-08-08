/**
 * Get how much time left from current time point to the end time point.
 * Show the time left to the tag location by the id given
 * @param {Date} endtime end time point
 * @param {string} id id for locating the tag, so the time left can be shown there
 * @param {Number} interval If calling function set interval for counting down, it will
 * Clear interval when the the time left is 0; Interval will be ignored otherwise
 */
function showTimeLeft(endtime, id, interval) {
    // test whether arguments received are legal
    if (!(endtime instanceof Date && typeof(id) === 'string')) {
        console.log('give a Date type argument');
        return;
    }

    var leftInSeconds = parseInt(endtime.valueOf() / 1000 - (new Date().valueOf() / 1000));

    // handle 0 time left
    if (leftInSeconds <= 0) {
        alert('finished!');
        if (typeof(interval) == 'number') {
            clearInterval(interval);
        }
    }

    // calculate time left
    var day = parseInt(leftInSeconds / 60 / 60 / 24);
    var hour = parseInt(leftInSeconds / 60 / 60 % 24);
    var min = parseInt(leftInSeconds / 60 % 60);
    var seconds = parseInt(leftInSeconds % 60);

    // choose what form of count down. 00 hours left or 0 hours left
    var resultList = addZeroFront(day, hour, min, seconds);
    var result = resultList[0] + ' days ' + resultList[1] + ' hours ' + resultList[2] + ' minutes ' + resultList[3] + ' seconds left';
    // var result = day + ' days ' + hour + ' hours ' + min + ' minutes ' + seconds + ' seconds left';

    document.getElementById(id).innerText = result;
}

/**
 * give unlimited number of numbers. If number < 10, put a zero before the head. 
 * All numbers will be saved as strings in theresult list.
 * @returns a list of strings. 
 */
function addZeroFront() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        var temp = arguments[i];
        if (typeof(temp) == 'number' && temp < 10) {
            result.push('0' + temp);
        } else {
            result.push(String(temp));
        }
    }
    return result;
}

/**
 * Keep counting down until 0 time left. 
 * @param {Date} endtime end time point
 * @param {string} id id for locating the tag, so the time left can be shown there
 */
function countDown(endtime, id) {
    // test whether arguments received are legal
    if (!(endtime instanceof Date && typeof(id) === 'string')) {
        console.log('give a Date type argument');
        return;
    }

    // test whether a future time point is given
    if (parseInt(endtime.valueOf() / 1000 - (new Date().valueOf() / 1000)) <= 0) {
        console.log('time given has been pased! give a future time point!');
        // document.getElementById(id).innerText = '0 days 0 hours 0 minutes 0 seconds left';
        document.getElementById(id).innerText = '00 days 00 hours 00 minutes 00 seconds left';
        return;
    }

    //count down
    showTimeLeft(endtime, id);
    var interval = setInterval(function() {
        showTimeLeft(endtime, id, interval);
    }, 1000);
}