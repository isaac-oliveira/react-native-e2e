const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', async (req, res) => {
  const {email, password} = req.body;

  await delay(3000);

  if (!(email.toLowerCase() === 'isaac@gmail.com' && password === 'abc123')) {
    return res.status(500).json({
      message: 'Usuário e/ou senha inválido',
    });
  }
  return res.status(200).json({
    name: 'Isaac',
  });
});

app.get('/data', async (_req, res) => {
  await delay(3000);
  return res.status(200).json(['1', '2', '3', '4', '5']);
});

const delay = async time => {
  await new Promise(resolve => setTimeout(resolve, time));
};

module.exports = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
