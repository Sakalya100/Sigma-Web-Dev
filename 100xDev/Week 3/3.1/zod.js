// Zod is a library that helps us to validate the data that is sent to 
// the server
// It is a schema validation library
const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

const schema = zod.array(zod.number()); 
// This schema checks if the data is an array of numbers

app.get("/kidney-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const validatedKidneys = schema.safeParse(kidneys);
    if(!validatedKidneys.success) {
        res.status(400).json({
            error: "Invalid data",
            details: validatedKidneys.error
        });
    } else {
        res.send("Kidney checkup completed");
    }
});

//zod can be also used separately to validate data
//Example 1
// {
//     email: string, should look like an email
//     password: string, should be at least 8 characters long
// }

const emailschema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});
// This schema checks if the data is an object with email and password
// and if the email is a valid email and the password is at least 8 characters long
// if not then it will return an error

// Example to use as a validation function
const { log } = require('console');
const zod = require('zod');

function validateInput(input){
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  })

  const response = schema.safeParse(input);
  console.log(response);
}

input = {
  email: 'test@gmail.com',
  password: '12345678'
}

validateInput(input)


