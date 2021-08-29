const express = require ('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Adding Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// test the express.js connection
// app.get('/', (req, res) =>{
//     return res.json({
//         message: "Hello World"
//     });
// });








// Default response for any other request (Not Found)
// This route will override all others—so make sure that this is the last one.
app.use((req, res) => {
    res.status(404).end();
  });
// add function that will start the express.js server on port 3001
// this code will be added at the bottom of the server.js file
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});