# Updated Robert Elias Branch
# Backend for How-To App

- Field contents are not checked for formatting or proper data. *Garbage in, garbage out.*
- Check the `getById` output example below for the fields to send.
- `POST` - all fields are required *except id*.
- `PUT` - all fields are required ***including*** *id*.

| HTTP | Path               | route method | Desc                           | Data|
<<<<<<< HEAD
| GET  | /api/content/        | getAll       | Gets the full list of all celebrities. | Returns an array of `getById` objects.|
=======
| GET  | /api/content/        | getAll       | Gets the full list of all celebrities. | Returns an array of `getById` objects.|
>>>>>>> 93dd9fd8c8e7ba28cac386cb69da4b831d936863
{
        "id": 1,
        "username": "robert",
        "password": "password1"
    }