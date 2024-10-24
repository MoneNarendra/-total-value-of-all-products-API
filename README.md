 ### API 

 #### Path: `/total_amount`

 #### Method: `POST`

- **Request**

```
Content-Type: application/json

{
    "products": [
        {"name": "Product A", "price": 10, "quality": 2},
        {"name": "Product B", "price": 20, "quality": 3},
	{"name": "Product C", "price": 15, "quality": 5}
    ]
}
```

- **Scenario 1**

  - **Description**:

    Receives a list of product objects (containing name, price, and quality) and returns the total value of all products in the list. 

  - **Response 1**
    - **Status code**
      ```
      200
      ```
    - **Body**
      ```
      totalValue
      ```

  - **Response 2**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Missing price or quality for product "${name}".
      ```

  - **Response 3**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      No products provided.
      ```
Link: "https://total-value-of-all-products-api.onrender.com"
