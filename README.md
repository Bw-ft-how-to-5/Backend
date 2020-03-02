# Backend for How-To App

- Field contents are not checked for formatting or proper data. *Garbage in, garbage out.*
- Check the `getById` output example below for the fields to send.
- `POST` - all fields are required *except id*.
- `PUT` - all fields are required ***including*** *id*.

| HTTP | Path               | route method | Desc                           | Data|
| GET  | /api/content/        | getAll       | Gets the full list of all celebrities. | Returns an array of `getById` objects.|