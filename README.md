# Library Management System On Hyperledger

## Bring up Fabric containers

Run `docker-compose up -d`. Test it with `docker ps -a` to see all the containers are up and running.

## Generate Business network archive 

Run `composer archive create --archiveFile lmsbook.bna --sourceType lmsbook/ --sourceName lmsBook` to generate bna file.
## Deploy Business network archive

Run `composer network deploy -a lmsbook.bna -p hlfv1 -i admin -s adminpw` to deploy it locally.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
