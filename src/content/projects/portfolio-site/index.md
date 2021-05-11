---
title: "Coffee Shop - Backend"
tags: ["Project", "Udacity", "REST API", "Python", "Flask"]
date: "2020-10-08"
---

# Coffee Shop
*frontend using Ionic Framework- Angular JS, backend using Flask RESTful API*

[![Edit with Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jyrj/Coffee-Shop-WebAPP)


A ready to deploy web app to show the functionality of Identity Access management and authorization using Auth0. Implemented using FLASK RESTful API, PostgreSQL, SQLAlchemy.

The application meet follwing specifications:

<p>1) Display graphics representing the ratios of ingredients in each drink. </p>
<p>2) Allow public users to view drink names and graphics. </p>
<p>3) Allow the shop baristas to see the recipe information. </p>
<p>4) Allow the shop managers to create new drinks and edit existing drinks. </p>

{Can be modified according to need! For any help, start an issue in the repository}

## Web Application Structure

The App is structured into:

1. [`./backend/`](https://github.com/jyrj/Coffee-Shop-WebAPP/tree/main/backend/README.md)
2. [`./frontend/`](https://github.com/jyrj/Coffee-Shop-WebAPP/tree/main/frontend/README.md)

## About the Stack

Application is desiged with some key functional areas:

### Backend

The `./backend` directory contains a completed Flask server with a SQLAlchemy. Flask endpoints and API are tested on Python 3.7

[View the README.md within ./backend for more details.](https://github.com/jyrj/Coffee-Shop-WebAPP/tree/main/backend/README.md)

### Frontend

The `./frontend` directory contains a complete Ionic frontend to consume the data from the Flask server. When trying to deploy, define environment variables found within (./frontend/src/environment/environment.ts) to reflect the Auth0 configuration details set up for the backend app. 

[View the README.md within ./frontend for more details.](https://github.com/jyrj/Coffee-Shop-WebAPP/tree/main/frontend/README.md)

### Dependency issue found when using Python 3.7.x (x>0)

Use a virtual environment and add the corresponding dependencies (preferrably using a conda environment)

### *Scope for improvement:*

<p>- Although the endpoints are secured, still XSS hasn't been covered. </p>
<p>- Perfest AuthO authorization example, frontend needs to be improved. </p>
<p>- Currently learning ReactJS to implement frontend. </p>