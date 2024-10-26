const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

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

  app.get("/", (req, res) => {
    res.send("Server is running!");
});


  app.get("/students", (req, res) => {
    res.json(studentsData);
  });

  app.get("/students/:name", (req, res) => {
    const student = studentsData[req.params.name];
    if (student) {
      res.json(student);
    } else {
      res.status(404).send("Name not found");
    }
  });


  app.get("/students/:name/email", (req, res) => {
    const student = studentsData[req.params.name];
    if (student) {
      res.json({email : student.email});
    } else {
      res.status(404).send("Email not found");
    }
  });




  app.post("/students", (req, res) => {
    const { name, email, websites } = req.body;
    if (studentsData[name]) {
      return res.status(400).send("Name already exists");
    }
    studentsData[name] = { name, email, websites };
    res.status(201).json(
{
  "message": "Student added successfully",
  "student": req.body
 
});
});



app.post("/students/:name/websites", (req, res) => {
    const { name } = req.params;
    const { website } = req.body;
    if (!studentsData[name]) {
        return res.status(404).send("Student not found");
    }

    studentsData[name].websites.push(website);



        res.status(201).json(
            {
              "message": "Student added successfully",
              "student": studentsData[name]});
             
     
            });
    




 
