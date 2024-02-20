####Envelope Budget API

This API provides functionalities to manage envelopes for budgeting purposes. Envelopes represent different spending categories, and users can update, retrieve, and delete envelopes as needed.
### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/beardedbarista/budget-tracker-api
   ```

2. Install dependencies using npm:

   ```bash
   npm install
   npm install morgan
   npm install body-parser
   ```

### Start the server

To start the server, run the following command:

```bash
npm start
```


Retrieve All Envelopes

    URL: /envelopes
    Method: GET
    Description: Retrieves all envelopes with their corresponding budget information.
    Response:
        200 OK: Returns a JSON array containing all envelopes.
        404 Not Found: If no envelopes are found.

Retrieve Envelope by ID

    URL: /envelopes/:id
    Method: GET
    Description: Retrieves a specific envelope by its ID.
    Parameters:
        id: The unique identifier of the envelope.
    Response:
        200 OK: Returns the envelope with the specified ID.
        404 Not Found: If the envelope with the given ID does not exist.

Update Envelope Budget

    URL: /envelopes/:id
    Method: PUT
    Description: Updates the budget of a specific envelope.
    Parameters:
        id: The unique identifier of the envelope.
    Request Body:
        budget: The new budget value for the envelope.
    Response:
        200 OK: Indicates successful update of the envelope budget.
        404 Not Found: If the envelope with the given ID does not exist.

Delete Envelope

    URL: /envelopes/:id
    Method: DELETE
    Description: Deletes a specific envelope by its ID.
    Parameters:
        id: The unique identifier of the envelope.
    Response:
        200 OK: Indicates successful deletion of the envelope.
        404 Not Found: If the envelope with the given ID does not exist.

Testing with Postman

    Open Postman.
    Set the request method (GET, PUT, DELETE).
    Enter the API endpoint URL based on the desired functionality.ContributingContributing

### Endpoints

#### Get all envelopes
- **GET** `/envelopes`

Returns an array of all envelope objects.

#### Get single envelope
- **GET** `/envelopes/:id`

Returns the envelope object with the given id.

#### Create an envelope
- **POST** `/envelopes`

Creates a new envelope. Expects a JSON object with `name` and `budget` properties in the request body.

#### Update an envelope
- **PUT** `/envelopes/:id`

Updates the budget for the envelope with the given id. Expects a JSON object with the new `budget` value in the request body.

#### Delete an envelope
- **DELETE** `/envelopes/:id`

Deletes the envelope with the given id.

### Models
The `envelopes` array in `models/envelopes.js` contains the initial set of envelopes.

Each envelope has an `id`, `name`, and `budget` property.


Pull requests are welcome! Feel free to contribute to this project.

License
This project is licensed under the MIT License.



