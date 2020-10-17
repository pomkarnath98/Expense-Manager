# Expense Manager API
## Register
### POST URL - `/api/register`

REQUEST

    {
      "name": "Full Name",
      "email": "email@gmail.com"
      "password": "mypassword",
    }
RESPONSE

Success (Status Code - `200`)

    "User Registered Successfully!"

Failure (Status Code - `400`)

    "Email already exists in the database"
## Login
### POST URL - `/api/login`

REQUEST

    {
      "email": "email@gmail.com",
      "password": "mypassword"
    }
RESPONSE

Success (Status Code - `200`)
    
    {
      "user_id": "5f81fbac719d6f3b1ce706ab",
      "message": "Logged in Successfully!"
    }
Failure (Status Code - `400`)

    "User doesn't exist!"

Failure (Status Code - `400`)

    "Invalid password!"
    
## Summary
### GET URL - `api/summary/<user_id>`

Success (Status Code - 200)

    {
        "totalIncome": 185000,
        "totalExpense": 109000,
        "balance": 76000
    }

## Transaction
### POST URL - `/api/transaction`

REQUEST

    {
      "user_id": "5f872c309366d723406042hd",
      "title": "House Rent",
      "type": "Debit",
      "amount": 30000,
    }
RESPONSE

Success (Status Code - `200`)

    {
        "_id": "5f87324f7b6cee0fd063e078",
        "user_id": "5f81fbac719d6f3b1ce706ab",
        "title": "House Rent",
        "type": "Debit",
        "amount": 30000,
        "date": "October 14th 2020, 10:45:59 pm",
        "timestamp": 1602695759,
        "__v": 0
    }

Error (Status Code - `400`)

    "title" length must be at least 3 characters long

### GET URL - /api/fivetransaction/<user_id>

Success (Status Code - 200)

    [
     {
        "_id": "5f85ffa6105be0428ccd0326",
        "user_id": "5f81f30fb05eac40f8a16e42",
        "title": "Income Tax",
        "type": "Debit",
        "amount": 20000,
        "date": "October 14th 2020, 12:57:34 am",
        "timestamp": 1602617254,
        "__v": 0
      },
      {
        "_id": "5f85ff8e105be0428ccd0325",
        "user_id": "5f81f30fb05eac40f8a16e42",
        "title": "Home Accessories",
        "type": "Debit",
        "amount": 10000,
        "date": "October 14th 2020, 12:57:10 am",
        "timestamp": 1602617230,
        "__v": 0
      },
      {
        "_id": "5f85ff56105be0428ccd0324",
        "user_id": "5f81f30fb05eac40f8a16e42",
        "title": "Laundry",
        "type": "Debit",
        "amount": 700,
        "date": "October 14th 2020, 12:56:14 am",
        "timestamp": 1602617174,
        "__v": 0
      },
      {
        "_id": "5f85ff38105be0428ccd0323",
        "user_id": "5f81f30fb05eac40f8a16e42",
        "title": "Land Income",
        "type": "Credit",
        "amount": 50000,
        "date": "October 14th 2020, 12:55:44 am",
        "timestamp": 1602617144,
        "__v": 0
      },
      {
        "_id": "5f85ff1f105be0428ccd0322",
        "user_id": "5f81f30fb05eac40f8a16e42",
        "title": "Television",
        "type": "Debit",
        "amount": 30000,
        "date": "October 14th 2020, 12:55:19 am",
        "timestamp": 1602617119,
        "__v": 0
      }
    ]

Success (Status Code - `200`)

    []

### GET URL - /api/getTrans/<user_id>(?page=<page_no>&type=<transaction_type(all/credit/debit)>)

`Note: query is optional. If not given, by default page = 1 and type = all`

Success (Status Code - 200)

    {
      "next": {
        "page": 3
      },
      "prev": {
        "page": 1
      },
      "current": [
        {
            "_id": "5f85ff56105be0428ccd0324",
            "user_id": "5f81f30fb05eac40f8a16e42",
            "title": "Laundry",
            "type": "Debit",
            "amount": 700,
            "date": "October 14th 2020, 12:56:14 am",
            "timestamp": 1602617174,
            "__v": 0
        },
        {
            "_id": "5f85ff38105be0428ccd0323",
            "user_id": "5f81f30fb05eac40f8a16e42",
            "title": "Land Income",
            "type": "Credit",
            "amount": 50000,
            "date": "October 14th 2020, 12:55:44 am",
            "timestamp": 1602617144,
            "__v": 0
        }
      ]
    }

Success (Status Code - `200`)

    {
        "current": []
    }
