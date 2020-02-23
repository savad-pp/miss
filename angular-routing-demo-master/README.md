# Album App

A small app using Angular to demonstrate the routing.

## Angular Concepts
In this demo, following concepts are used.

* Components
* Services
* Observables
* Interfaces
* Routing
* Guards

### Protected routes
In this demo, there is an `AuthGuard` to protect few routes from unauthorized access. To do so, there is a fake authentication service which logs in and out the user.

The album's details page and secret page can not be viewed without login. Simply, click on login button and these 2 routes will be available.

## Libraries
This demo uses following third party libraries.

* [bootstrap](https://www.npmjs.com/package/bootstrap) - for UI
* [jquery](http://jquery.com/) - As a bootstrap depedency

## Development server

To install it on your local server, clone this repository and run `npm install`. Once the installation is completed,
run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.4.
