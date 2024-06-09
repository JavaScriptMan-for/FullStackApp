const express = require('express');
const app = express();

const ENV = 'development';
const DOMAIN = ENV === 'development' ? 'localhost' : '';
const PORT = 5000;
const path = require('path')

app.use(express.json({ extended: false }));


let serObj = {
  name: 'Ivan',
  surname: 'Minevsky',
  age: 14,
  gender: 'man',
  technology: ['react', 'vue', 'html/css', 'javascript/typescript', 'others']
}
app.get('/api', (req, res) => {
  try {

    res.json(
   serObj
    );
  } catch (err) {
    res.status(500)
    .json({error: err.message });
  }
});

app.listen(PORT, `${DOMAIN}`, () => {
  console.log(`Сервер запущен по порту ${PORT}`);
});