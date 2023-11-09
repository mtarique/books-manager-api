# Books Manager API

## Introduction

This API allows you to manage a collection of books. You can perform various operations like adding a book, retrieving a list of books, getting book details, updating a book, and deleting a book.

## YouTube Video Link
https://youtu.be/21unOF6koo4

# Local setup and running instructions
## Prerequisites
1. NodeJS Version 16+
2. MongoDB Version 7.0
3. Git
4. Code Editor
## Setup the project locally
1. Open terminal or command prompt
2. Navigate to folder where you want to clone the repository
3. Clone the repository from GitHub  
   ```git clone https://github.com/your-repo-url.git```
5. Navigate to cloned project directory
   ```cd books-manager-api```
6. Install the project dependencies using npm
   ```npm install```
7. Create .env file in the root directory of the cloned project and add following variables
   ```
   PORT=3000
   DB_HOST=mongodb://localhost:27017/books_manager_db
   ```
8. Run the application using below command
   ```npm start```
   
# Testing the API
You can use tools like Postman or VS Code Thunder Client Extension to test the API endpoints locally. The base URL for local testing is usually http://localhost:port/api/, where port is the port number mentioned when you started the application.

# API Endpoints Documentation
## Base URL

The base URL for all API endpoints is: `https://bookmanager-rrb8.onrender.com/api`

## Authentication

This API does not require authentication for now. Ensure that your requests are made over HTTPS for security.

## Error Responses

This API returns standard HTTP status codes to indicate the success or failure of a request. In case of an error, additional error details may be provided in the response body.

### Common HTTP Status Codes

- 200 OK: The request was successful.
- 201 Created: The resource was successfully created.
- 400 Bad Request: The request was malformed or invalid.
- 404 Not Found: The requested resource was not found.
- 500 Internal Server Error: An error occurred on the server.

## Endpoints

### Add a Book

**POST /add-book**

Add a new book to the collection.

**Request Body:**

```json
{
  "title": "JavaScript: The Good Parts", 
  "author": "Douglas Crockford ", 
  "summary": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code."
}
```

**Response:**

- 201 Created: New book successfully added. Returns the newly created book.

- 400 Bad Request: If the request body is invalid or missing required fields.

### Get List of Books

**GET /books**

Retrieve a list of all books in the collection.

**Response:**

- 200 OK: Returns a list of all books in the collection.

### Get Book Details

**GET /book/:id**

Retrieve the details of a specific book by its ID.

**Parameters:**

- `id` (string): The unique ID of the book.

**Response:**

- 200 OK: Returns the details of the requested book.

- 404 Not Found: If the book with the provided ID does not exist.

### Update a Book

**PUT /book/:id**

Update the details of a specific book by its ID.

**Parameters:**

- `id` (string): The unique ID of the book.

**Request Body:**

```json
{
  "title": "JavaScript: The Good Parts - Updated", 
  "author": "Douglas Crockford Updated", 
  "summary": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code."
}
```

**Response:**

- 200 OK: The book was successfully updated. Returns the updated book.

- 400 Bad Request: If the request body is invalid or missing required fields.

- 404 Not Found: If the book with the provided ID does not exist.

### Delete a Book

**DELETE /book/:id**

Delete a specific book by its ID.

**Parameters:**

- `id` (string): The unique ID of the book.

**Response:**

- 204 No Content: The book was successfully deleted.

- 404 Not Found: If the book with the provided ID does not exist.

## API Deployment
I have deployed this API on Render.com which can be accessed at base api URL `https://bookmanager-rrb8.onrender.com/api`.
1. Created a free account on https://render.com/
2. Added a new web service by clicking on Add New + button there
3. Then deployed directly from my GIT repository
4. Run the following command in Render.com project setting wizard
   `npm install`
   `npm start`
6. Updated the ENVIRONMENT VARIABLES
   ```
   PORT=3000
   DB_HOST=My atlas mongodb connection string
   NODE_VERSION=16.0.0
   ```


**Test:** Get list of books by hitting `https://bookmanager-rrb8.onrender.com/api/books` in your browsers address bar or use any tools like Postman or Thunder Client.

## Conclusion

This API allows you to manage a collection of books by providing endpoints for adding, retrieving, updating, and deleting books. Please make sure to use the correct HTTP methods and provide valid request bodies where required.
