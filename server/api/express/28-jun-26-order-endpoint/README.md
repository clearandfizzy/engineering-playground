## Order Endpoint

This folder contains the order endpoint used by the Express app.

### Run the app

From the repository root:

```bash
make start
```

### Related demo

From the `server/` folder, run the TypeScript event bus demo with:

```bash
npm run eventbus:demo
```

The server listens on `http://localhost:3000`.

### Endpoint

`GET /api/orders/:id`

Optional `include` values:

- `customer`
- `delivery`
- `items`

Unknown `include` values are ignored.

### Copy/paste CURL example

```bash
curl --request GET \
  --url 'http://localhost:3000/api/orders/123?include=customer,delivery,items' \
  --header 'Accept: application/json'
```
