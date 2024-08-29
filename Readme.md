# Contact Api
Simple Contact API to perform CRUD operation(Create, read, update, delete) by using `node.js`, `express.js`, and `MongoDB`

## Get Request 
```
GET https://localhost:8000/api/contact
```

API Response:
```javascript
{
  "success": true,
  "data": [
    {
      "_id": "66cf215e653d7c3a1c7bfa70",
      "name": "Sachin Kumar",
      "email": "...",
      "phone": ...,
      "__v": 0,
      "createdAt": "2024-08-28T13:08:46.369Z",
      "updatedAt": "2024-08-28T13:08:46.369Z"
    },
   ...
   
  ]
}

```

## Post Request
```
POST http://localhost:8000/api/contact
```
Body
```javascript

{
    name: "Sachin Kumar",
    email: "your_email",
    phone: "your phone Number"
}
```

API Response:
```javascript
{
  "message": "Contact created successfully"
}

```

## Put Request
```
PUT http://localhost:8000/api/contact/:id
```
body
```javascript
{
    name: "Sachin Kumar",
    email: "your_email",
    phone: "your phone Number"
}
```

Api Response
```javascript
{
  "success": true,
  "data": "Contact updated successfully"
}
```


## Delete Request
```
DELETE http://localhost:8000/api/contact/:id
```
Api Response
```javascript
{
  "success": true,
  "message": "Contact deleted successfully"
}
````

## Get Request by id
```
GET http://localhost:8000/api/contact/id
```

API Response:
```javascript
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

