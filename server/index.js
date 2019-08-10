const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex')(require('./knexfile'));

const PORT = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

knex.on('query', ({ sql }) => console.log(sql));

app.get('/palettes', async (_, res) => {
  const [palettes] = await knex('palettes').distinct();
  res.send(palettes.palettes);
});

app.post('/post-palette', async (req, res) => {
  const response = await knex('palettes')
    .where({ id: 1 })
    .update({ palettes: JSON.stringify(req.body) });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
