# Updated Robert Elias Branch
# Backend for How-To App

- Field contents are not checked for formatting or proper data. *Garbage in, garbage out.*
- Check the `getById` output example below for the fields to send.
- `POST` - all fields are required *except id*.
- `PUT` - all fields are required ***including*** *id*.

| HTTP | Path               | route method | Desc                           | Data|
| GET  | /api/users/        | getAll       | Gets the full list of all usrs. | Returns an array of `getById` objects.|

# BE


# `hack it` Table

- Field contents are not checked for formatting or proper data. *Garbage in, garbage out.*
- Check the `getById` output example below for the fields to send.
- `POST` - all fields are required *except id*.
- `PUT` - all fields are required ***including*** *id*.

| HTTP | Path               | route method | Desc                                   | Data|
|-|-|-|-|-|
| GET  | /api/users/        | getAll       | Gets the full list of all users. | Returns an array of `getById` objects.|
| GET  | /api/users/:id     | getById      | Gets the users at that id.             | Returns a `getById` object.|
| POST | /api/users/        | add          | Adds a user | **Expects** `getById` json object *without id*. **Returns** `getById` object.|
| PUT  | /api/user/        | change       | Edits an existing user. | **Expects** `getById` json object ***including id***. **Returns** an object: `message: `Thanks for registering, ${userData.username}!`,`.||
| DEL  | /api/celeb/del/:id | remove       | Deleted celeb at that id.              | Returns an object: `{"status": ###,    "success": [[1\|0]],    "msg": "DELETE successful."}`|||||||


## `getById` object example

```
{
	"id": 2,
	"title": "How to migrate on node.js part2",
	"description": "You will figure out when you see this data set...",
	
}
```
---

# `users` Table

| HTTP | Path               | Desc                                   | Data|
|-|-|-|-|
| POST | /api/users/register | Registers new user. | Expects `{"username":"", "password":"}`|
||||Returns `{ "id":##, "username":""}`|
| POST | /api/auth/login    | Logs in a user.   |  Expects `{"username":"", "password":""}`|
||||Returns `loginObj` below.|
||||`create`/`update`/`delete` of users *must* have HTTP header `Authorization: <token>`|
||||Use `admin` flag to limit access to the form used for `create`/`update`/`delete` of celebs.|


## `loginObj` object example
```
{
	"token": "",
	"id": "",
	"username": "",
	"email": "",
	"admin": [[true | false]]
}
```
---

# `scores` Table

| HTTP | Path               | route method | Desc                                   | Data|
|-|-|-|-|-|
| GET  | /api/users/scores/:id| getAllScoresForUser  | Gets  all scores for a user. | ***Requires Auth Token.*** Given an id in the path, returns an array of `score` objects including scores table id.|
| POST  | /api/users/score   | setOneUserScore |  Saves one score.  | ***Requires Auth Token.*** **Expects** `score` json object. **Returns** the db id.|
| GET  | /api/users/topten| getTopTen  | Gets ten highest scores. | Returns an array of `topten` objects.|

## `score` object example
```
{
	"score": 14,
	"user_id": 1,
	"time": 17
}
```

## `topten` object example
```
{
	"score": 17,
	"time": 42,
	"username": "Glibber"
},
```

---
*Tables made with https://www.tablesgenerator.com/markdown_tables#*