# JSFeatures
common features implemented by javascript for many websites 

## dfBackgroundTime
Users can change background images of their pages by calling changeBackGround() in feature.js.
ChangeBackGround() receive unlimited number of arguments, and they should be in the string form of 'integer-integer'.
'integer-integer' is a time range. For example, '8-17' means 8am - 5pm. Integer should be in the range of 0 - 23.
Therefore, the background of pages while be changed automatically when the current time is in one of the time range given.
If users give arguments in wrong form, or they do not give any arguments, the default bacground image will be shown.
Also, if current time does not in any of time ranges given, default background image will be shown.

**IMPORTANT:** 

Users shoud have a directory called imgs (url for image resources can be changed in source codes in feature.js if users do not want to have one directory called imgs for saving background images).
Images in imgs should be named as following pattern: ***1.jpg, 2.jpg, 3.jpg, etc.***
Hence, 1.jpg will be the pages' background when the current time is in first time range give. So are following images.
Default image called ***default.jpg*** should also be inclued in the imgs directory.
If images of specific time range do not exist, default image should be shown. If default image does not exist either, pages will have white background.

**Other Functions May Try**

In features.js, a function called resourcesExist(url) exists. It can detect whether a resource requested exist in the server side.
It is mainly creted as a helper function for changeBackGround(), but users can use it for their own purpose if they would like to check resources.

## countdown
This is very common feature we can see in many sites today.
Users can call countDown(endtime, id) in the javascript file to implement countdown feature in their page.
Endtime is the time point users would like to end the countdown.
Id is the id of a specific html element where users would like to shown their countdown.
(Users can modify basic if they try to change the form of countdown, or if they try to locate elements by class, tag name,tec.)

## passwordHideShow
This is a common feature for many password input field. When users clicking the eye icon, we can see the
password. When they click the icon again, the password is hidden. 
In html file, img element of the eye should have a specific id, and input field relates to that icon should
also have one. Therefore, it is easy to figure out which eye icon relates to a identical input field. 
Also, if anyone would like to use showHidePassword(iconId, inputId) in the js file directly, they have to have a directory which includes 2 icons, which shoud be called 'closeEye.png' and 'openEye.png' separately. Otherwise, they need to modify the code. CSS style can use the setting in the index.html.
