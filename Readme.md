## Project background

`NTCP_Diamond` (although we have just named it `Diamond`) - is an app we have tried building for project selection teams (to create and view projects based on four factors: Novelty, Technology, Complexity and Pace. These four categories have further types. Therefore, choosing particular types from these categories forms a four-sided shape we are referring to as `Diamond`). For example, the following are different `diamond`s for different projects:





![alt text](https://github.com/fcsiba/DIAMOND/blob/master/assets/sample1.png)
![alt text](https://github.com/fcsiba/DIAMOND/blob/master/assets/sample2.png)
![alt text](https://github.com/fcsiba/DIAMOND/blob/master/assets/sample3.png)

Project Mangers (with team members) will be using app for project management. Data (respondent's & project's profile) will be inserted in app. A project selection model (NTCP) will ask questions related to project selection. Project Team will then receive an interesting profile of the project inserted. A number of similar cases (previous projects) will be shown as well. The app will show the team what to take care of (recommendations), once the project is selected.	

## About the project

This is a MERN (MongoDB, ExpressJS, React-Native, NodeJS) stack application, where the app was built using React-Native (as front-end) and ExpressJS/NodeJS (with MongoDB) as backend.

Screens' code and all other front-end logic are contained in `src` folder and `App.js` file. Files such as `app.json`, `package.json`, `package-lock.json`, etc. defines the modules/dependencies required and unique description and data related to the project.

## About the backend

Backend NodeJS server of this app is deployed on heroku by the URL: `https://ntcpdiamond-backend.herokuapp.com`

The backend repository is contained in `diamond_backend_code` folder. It is also uploaded on BitBucket at: `https://immrharry@bitbucket.org/immrharry/ntcp-diamond-backend.git`

So there's no need to run the server/backend separately on your machine/device, you can access and use this project directly.

## To run the project on your local machine/device

This project was creted using `expo-cli`. In order to run this project on your machine/device, make sure you have NodeJS installed and `Expo` installed on your mobile device (since the app isn't yet deployed on Play Store or App Store, you will need Expo to run the app on either an Android or iOS device).
Clone/download and extract the repository on your PC. Navigate to the directory containing the repository and open terminal fro there. 

To install all the dependencies run: 

```npm install```

Then run: 

```expo start```

This will open the Metro Bundler on the browser at `localhost:19002`. If you have Expo application installed on your mobile, open the Expo application and scan the QR code (LAN version preferably) from the Metro Bundler browser which will then open the project on your mobile device.

## Authors

Authors of this project (along with ERP IDs):

Muhammad Hamza Siddiqui (13160), 
Muhammad Haris (13192), 
Osama Habib (13056)

