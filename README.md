# Updated Robert Elias Branch
# Backend for How-To App

https://howto5.herokuapp.com/

| HTTP | Path                 |  Desc                                       |
| GET  | /api/users/          |  Gets the full list users                   |
| POST | /api/users/register  |  Register                                   | Doesn't need token.
| POST | /api/users/login     |  Login                                      | Doesn't need token.

| GET  | /api/study/          |  Gets all of the study posts                |
| GET  | /api/study/:id       |  Gets all of the study posts by post ID     |
| GET  | /api/study/user/:id  |  Gets all of the study posts by that userid |
| POST | /api/study/          |  Adds a new study post to the database.     |
| PUT  | /api/study/:id       |  Updates a study post on database.          |
| DELETE | /api/study/:id     |  Adds a new study post to the database.     |

| GET  | /api/time/           |  Gets all of the time posts                 |
| GET  | /api/time/:id        |  Gets all of the time posts by post ID      |
| GET  | /api/time/user/:id   |  Gets all of the time posts by user ID      |
| POST | /api/time/           |  Adds a new time post to the database.      |
| PUT  | /api/time/:id        |  Updates a time post on database.           |
| DELETE | /api/time/:id      |  Adds a new time post to the database.      |
    
    
    
    
    {
        "username": "robert",
        "password": "password1"
    }

    {
        "title": "Post title",
        "description": "Post description"
    }