## Coffee World Backend

Backend API for the Vue.js "Coffee World" project.

## Tech

- Node.js
- Express
- CORS
- Nodemon (for confort)

## API Endpoints

- `GET /item` – current item 
- `GET /item/next` – next item  
- `GET /item/prev` – previous item
- `GET /item/:id` – item by index

Each response:

```json
{
  "index": 0,
  "total": 5,
  "item": {
    "title": "...",
    "desc": "...",
    "img": "..."
  }
}
