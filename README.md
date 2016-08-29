This application is a basic assignment which reads data from the data source and displays it on the UI. 
The data here belongs to a feed which consists of status updated and photos shared by different users.
Data is updated every 30 seconds.

**Libraries used**
This application is made using AngularJS (v1.5.8) as a framework.
Addition to this Bootstrap(v3.3.7) is also used.

**Process used**
npm(Node package manager) is used to download local-we-server to host the application locally.
Bower is downloaded using npm for the library management purpose.

References to this are availabel in package.json file.

AngularJS, Bootstrap and jQuery(Bootstrap dependency) is downloaded using Bower.

References to this are available in bower.json file.

**Things covered**
-Took two different data sources with different data. (data.json and data_new.json).
-Loaded the  data one after the other after every 30 seconds to implement infinite data locally.
-Panel is used to display the data in the form of feed.
-If the scroll is not at top and new data is populated, a button appears which helps the user to scroll to top.
-Note: Only two types of feeds are handled. (status type and photo type).
-Folder structure is made keeping in mind modularity in the application.
-Comments are provided whereever felt necessary.

**Improvements that can be made**
-More functionalities could be added.
-Scroll position could be maintained when new data is populated.
-Task runner (grunt or gulp) could be added.
-Code quality could be checked using jshint or jslint etc.
-Unit test cases could be written.
-Error handling could be done at different levels.
-SASS or less could be user for css.

**How to run the code**
Prerequisites:
Node should be installed on the system.

-Run following command from the command line inside app directory.
npm run start

This will host the code locally at 3000 port. This can be accessed using localhost:3000 from the browser.
You can use the application now.

NOTE: node_modules and bower_components folder is already shared in this folder.
If libraries and dependencies needs to be downloaded again, following commands must be run.
-npm installed
-bower installed
-npm run start