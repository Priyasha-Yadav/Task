## Task: Creating API Endpoints Using an In-Memory Object for Student Data

Overview:

You will be handling the following:

Three GET requests:

1. Get all students' data.


2. Get individual student details by name.


3. Get a student's email by name.



Two POST requests:

1. Add a new student’s details.


2. Add a fourth website link to an existing student.




All requests will operate on an in-memory JavaScript object (studentsData) containing student data (name, email, and a list of websites).


---

Data Structure:

Here’s an example structure for the studentsData object:

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

1. GET Request 1: Retrieve All Student Data

Endpoint: /students

Method: GET

Description: This request retrieves all student details (names, emails, and websites).


Example Request in Postman:

GET /students

Example Response:

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


---

2. GET Request 2: Retrieve Individual Student Details by Name

Endpoint: /students/:name

Method: GET

Description: This request retrieves the details of a student based on their name.


Example Request in Postman:

GET /students/Rahul Sharma

Example Response:

{
  "email": "rahul.sharma@codinggita.com",
  "websites": [
    "http://rahuls-portfolio.com",
    "http://rahulblogs.com",
    "http://rahulprojects.com"
  ]
}


---

3. GET Request 3: Retrieve a Student's Email by Name

Endpoint: /students/:name/email

Method: GET

Description: This request retrieves only the email address of a student by their name.


Example Request in Postman:

GET /students/Anjali Mehta/email

Example Response:

{
  "email": "anjali.mehta@codinggita.com"
}


---

4. POST Request 1: Add a New Student

Endpoint: /students

Method: POST

Description: This request adds a new student to the studentsData object. You’ll need to send the name, email, and a list of websites in the request body.


Example Request in Postman:

POST /students

Example Body (JSON):

{
  "name": "Raj Patel",
  "email": "raj.patel@codinggita.com",
  "websites": [
    "http://rajportfolio.com",
    "http://rajblogs.com",
    "http://rajcode.com"
  ]
}

Example Response (after addition):

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


---

5. POST Request 2: Add a Fourth Website to an Existing Student

Endpoint: /students/:name/websites

Method: POST

Description: This request adds a fourth website to an existing student’s websites array.


Example Request in Postman:

POST /students/Rahul Sharma/websites

Example Body (JSON):

{
  "website": "http://rahulsocialmedia.com"
}

Example Response (after website addition):

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
