const express = require('express');
const app = express();
const axios = require('axios');

//allow the API connection
let allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);

//get latest statistiques route
app.get('/api/data/:id', async (req, res) => {
  const countryName = req.params.id;
  if (!countryName) {
    return res.status(404).send('NOT A VALID URL');
  }
  try {
    const resp = await axios.get(
      `https://api.covid19api.com/live/country/${countryName}/status/confirmed`
    );
    const data = await resp.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: 'something went wrong' });
  }
});

//get daily statistiques route
app.get('/api/daily_data/:id', async (req, res) => {
  const countryName = req.params.id;
  if (!countryName) {
    return res.status(404).send('NOT A VALID URL');
  }
  try {
    const resp = await axios.get(
      `https://api.covid19api.com/dayone/country/${countryName}`
    );
    const data = resp.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: 'something went wrong' });
  }
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('the app working on port ' + PORT);
});
