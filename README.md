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

**Other Functions May Try **

In features.js, a function called resourcesExist(url) exists. It can detect whether a resource requested exist in the server side.
It is mainly creted as a helper function for changeBackGround(), but users can use it for their own purpose if they would like to check resources.
