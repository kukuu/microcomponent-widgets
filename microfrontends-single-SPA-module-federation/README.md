

# Microfrontend: Single SPA v Module Federation:
The main difference between module federation and single-spa is the way they handle the sharing and reuse of modules. 
Module federation uses a central “entry” point for each module, while single-spa uses a “shell” application to load and manage different micro frontends.

Single SPA helps to bring code from other platforms, perhaps from S3 in the form of individual Parcels.

With Single SPA, JavaScript has to be first loaded onto the page. Conventioanally done using System JS.Single SPA then takes over the orchestration - allowing the different libraries (REACT, VUE, Svelte, Angular  - etc) used to build the parcels handshaking with the same life cycle methods, and further displaying the Web application.

Replacing System JS with Federated Modules allows moving the code for the Parcels back into the application allowing for easier maintenance and also continue the sharing of the Parcels between the applications.

Webpack plays a key role in the handshaking and configuration to aggregate the different Parcels onto the page.

# Getting Started

```sh
yarn install
yarn start
```

Open [http://localhost:3001](http://localhost:3001).


