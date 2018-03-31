# vsphere-ts

Basic NodeJS example to list VM's using the vSphere REST API

## Requirements
Make sure you have the following installed:

[nodejs](https://nodejs.org/en/)

Install TypeScript

    npm install -g typescript

This sample uses Microsoft's [ms-rest-js](https://github.com/Azure/ms-rest-js) npm package installed below.

## Install
To run the sample after cloning the repo first update the host on line 5:

    let host = "https://sc2-rdops-vm06-dhcp-195-173";

Then install npm modules and start the watcher which will automatically execute index.ts

    npm install
    npm start
    
