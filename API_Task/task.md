## Task: Creating API Endpoints Using an In-Memory Object for Student Data

### Overview

You will be handling the following:

- **Three GET requests**:
    1. Get all students' data
    2. Get individual student details by name
    3. Get a student's email by name
- **Two POST requests**:
    1. Add a new student’s details
    2. Add a fourth website link to an existing student

All requests will operate on an **in-memory JavaScript object (`studentsData`)** containing student data (name, email, and a list of websites).

---

### Data Structure

Example `studentsData` object:

```jsx
let studentsData = {
  "Rahul Sharma": {
    email: "rahul.sharma@codinggita.com",
    websites: [
      "http://rahuls-portfolio.com",
      "http://rahulblogs.com",
      "http://rahulprojects.com"
    ]
  },
  "Anjali Mehta": {
    email: "anjali.mehta@codinggita.com",
    websites: [
      "http://anjalisdesigns.com",
      "http://anjalitech.com",
      "http://anjalicode.com"
    ]
  }
};

```

---

## API Endpoints

### 1. GET Request: Retrieve All Student Data

- **Endpoint:** `/students`
- **Method:** `GET`
- **Description:** Retrieves all student details (names, emails, and websites).

**Example Request (Postman):**

```
GET /students

```

**Example Response:**

```json
{
  "Rahul Sharma": {
    "email": "rahul.sharma@codinggita.com",
    "websites": [
      "http://rahuls-portfolio.com",
      "http://rahulblogs.com",
      "http://rahulprojects.com"
    ]
  },
  "Anjali Mehta": {
    "email": "anjali.mehta@codinggita.com",
    "websites": [
      "http://anjalisdesigns.com",
      "http://anjalitech.com",
      "http://anjalicode.com"
    ]
  }
}

```

---

### 2. GET Request: Retrieve Individual Student Details by Name

- **Endpoint:** `/students/:name`
- **Method:** `GET`
- **Description:** Retrieves the details of a student based on their name.

**Example Request (Postman):**

```
GET /students/Rahul Sharma

```

**Example Response:**

```json
{
  "email": "rahul.sharma@codinggita.com",
  "websites": [
    "http://rahuls-portfolio.com",
    "http://rahulblogs.com",
    "http://rahulprojects.com"
  ]
}

```

---

### 3. GET Request: Retrieve a Student's Email by Name

- **Endpoint:** `/students/:name/email`
- **Method:** `GET`
- **Description:** Retrieves only the email address of a student by their name.

**Example Request (Postman):**

```
GET /students/Anjali Mehta/email

```

**Example Response:**

```json
{
  "email": "anjali.mehta@codinggita.com"
}

```

---

### 4. POST Request: Add a New Student

- **Endpoint:** `/students`
- **Method:** `POST`
- **Description:** Adds a new student to the `studentsData` object.
- **Request Body:** Must include `name`, `email`, and `websites` array.

**Example Request (Postman):**

```
POST /students

```

**Example Body:**

```json
{
  "name": "Raj Patel",
  "email": "raj.patel@codinggita.com",
  "websites": [
    "http://rajportfolio.com",
    "http://rajblogs.com",
    "http://rajcode.com"
  ]
}

```

**Example Response:**

```json
{
  "message": "Student added successfully",
  "student": {
    "Raj Patel": {
      "email": "raj.patel@codinggita.com",
      "websites": [
        "http://rajportfolio.com",
        "http://rajblogs.com",
        "http://rajcode.com"
      ]
    }
  }
}

```

---

### 5. POST Request: Add a Fourth Website to an Existing Student

- **Endpoint:** `/students/:name/websites`
- **Method:** `POST`
- **Description:** Adds a fourth website to an existing student’s `websites` array.
- **Request Body:** Must include `website`.

**Example Request (Postman):**

```
POST /students/Rahul Sharma/websites

```

**Example Body:**

```json
{
  "website": "http://rahulsocialmedia.com"
}

```

**Example Response:**

```json
{
  "message": "Website added successfully",
  "student": {
    "Rahul Sharma": {
      "email": "rahul.sharma@codinggita.com",
      "websites": [
        "http://rahuls-portfolio.com",
        "http://rahulblogs.com",
        "http://rahulprojects.com",
        "http://rahulsocialmedia.com"
      ]
    }
  }
}

```
