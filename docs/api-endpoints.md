# API Endpoints

## Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Tasks

- `GET /api/tasks`
  - Tasks search and index
  - accepts `description/title` text to search tasks in database
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`
- `GET /api/tasks/:id/review`

### Taskers

- `GET /api/taskers`
- `POST /api/taskers`
- `GET /api/taskers/:id`
- `DELETE /api/taskers/:id`


### Bonus

- `GET /api/taskers/:id/reviews`
  - look up all reviews for a given tasker
- `GET /api/users/:id/reviews`
  - Find all the reviews posted by a user
