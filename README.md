# FastRabbit

[FastRabbit][homepage] is a web application for users to request services from "taskers" who are hourly freelancers. FastRabbit is inspired by TaskRabbit and allows users to choose the task they need completed, specify the date and location, and select the freelancer and price.

Ken Lee is the designer and site owner of FastRabbit.

![FastRabbit Homepage: http://caskrabbit.herokuapp.com/#/][imagelink]

## Features

- User authentication, editing and guest account
- Select a task to outsource
- Use a calendar and Google Places Autocomplete API to specify date and location
- Browse Task Freelancers for the most appropriate one
- Specify duration and price of the task
- Cancel unwanted task requests


![demo_user task requests: https://caskrabbit.herokuapp.com/#/tasks/2/task_requests][link]

## Project Design

FastRabbit was built in under two weeks.

A [Design Mockup][readme] was used to ensure accurate and timely completion of features.

A [Database Mockup][schema] was prepared alongside the design proposal.

## Code Foundation

FastRabbit is a single-page application built with using React-Redux(js) on the frontend and Ruby-on-Rails for the backend. 

- [Rails Backend][backend]
- [React-Redux Frontend][frontend]

## Upcoming Features

FastRabbit is still very much a work in progress.  

Upcoming features are imminent in the [Upcoming][upcoming] outline.

[imagelink]:http://res.cloudinary.com/dsaxhw9ii/image/upload/v1485130075/front-page_ecqngt.png
[link]:http://res.cloudinary.com/dsaxhw9ii/image/upload/v1485130620/demo-tasks_owrva7.png
[schema]: ./docs/schema.md
[readme]: ./docs/README.md
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
[future]: ./docs/future.md
[homepage]:http://caskrabbit.herokuapp.com/#/
