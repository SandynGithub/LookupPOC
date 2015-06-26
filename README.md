# LookupPOC
This is POC about how to create sample bower component and use it in our project. this is just a POC and not ready for a stand alone module yet.

Current Bower component consists of
1) lookup model class(angular service) to pass data between two apps
2) lookupController to handle the calls between lookup pages
3) lookup router to handle flow between pages
4) html files of each pages
5) CSS class

Notes to remember
All the above angular classes should be defined under a different module name to that of webpos ones
Avoid creating bower dependency for the lookupComponent. Make it standalone as it much as it could be. JS library dependencies like angular/jquery / tracekit should be ok. If you are creating new bower dependency that is not there in our main app, then it has to be added in respective bower.json  consuming app folder

How to refer bower component inside our app

Add the new bower component  in bower.json under snapcard/snapcard [ code looks like below]
"lookup": "https://github.com/SandynGithub/LookupPOC.git"

Then run bower install under snapcard/snapcard


When you see you lookup package under bower components, you are good to start config changes to refer lookup in your app

1) Add the new lookup js dependencies in main.js to be used as angular services
lookup: 'lib/lookup/app/js/controllers/lookupCCController', lookupModel: 'lib/lookup/app/js/services/lookupCCDataService', lookupRoutes: 'lib/lookup/app/js/lookupCCRoutes'

2) Configure the bower component router to your current app by adding “lookupRoutes” in the list of requirejs objects in the block calling angular.bootstrap in main.js

3) In app.js define those new  bower component angular service and controller whose files are referenced in main.js [ add “lookup” and “lookupModel” on depends list]
 
4) initialize new modules created in the bower component ‘LookupCCControllers' and  'LookupCCServices' by adding it as part of app creation line in app.’s [ add it as part of var app = app.module(…..) ]

5) if your consuming app is snap card, then change “card-enroll-ctrl.js” to add model dependency and set the model with cancel url path and consumingApp path and call the lookup flow
by invoking the first page of lookup flow which is again in that model.

and you are good.







