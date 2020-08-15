/**
 * show or hide password in a specific input by clicking the relative eye icon
 * @param {*} iconId id of the icon img
 * @param {*} inputId id of the input
 */
function showHidePassword(iconId, inputId) {
    var eyeIcon = document.getElementById(iconId);
    var input = document.getElementById(inputId);
    var close = true;
    eyeIcon.onclick = function() {
        if (close) {
            eyeIcon.src = 'icons/openEye.png';
            input.type = 'text';
            close = false;
        } else {
            eyeIcon.src = 'icons/closeEye.png';
            input.type = 'password';
            close = true;
        }
    }

}