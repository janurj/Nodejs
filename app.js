const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password!==confirmPassword){
    return res.status(400).send('Password is not matching');
  }
  
  // Here, you can perform validation checks on the received data
  // For simplicity, let's just log the data for now
  console.log('Received data:', { username, email, password, confirmPassword });

  // You can send a response back to the client if needed
  res.send('Login successful.Received your login details!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
