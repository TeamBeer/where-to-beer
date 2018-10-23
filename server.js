const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.render('index');
});


// POST / INSERT :: New Event
app.post('/api/event', (req, res) => {
  const {username, reason, dateTime} = req.body
  db.one('INSERT INTO group (username, dateTime, reason) VALUES ($1, $2, $3) RETURNING id', [username,reason, dateTime])
  .then(data => res.json(data))
  .catch(error => {
    res.json({error: error.message});
  })
})

// PUT / UPDATE :: My Event
app.put('/api/event/:groupId', (req, res) => {
  const groupId = req.params.groupId
  const {username, reason, dateTime} = req.body
  console.log(`api.put req.body :: ${req.body}`)
  console.log(`api.put groupId :: ${groupId}`)
  db.one('UPDATE group SET username = ($1), reason = ($2), dateTime = ($3) WHERE groupId = $4 RETURNING id', [username, reason, dateTime, groupId])
  .then(data => {
    console.log(`api.put :: ${data}`)
    res.json(data)
  })
  .catch((error) => {
    res.json({error: error.message});
  });
})

// DELETE :: My Event

// GET :: View event
app.get('/api/event/:eventId', (req, res) => {
  const eventId = req.params.eventId
  db.any('SELECT * FROM event WHERE eventId = $1', [eventId])
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.json({error: error.message})
    })
  })


// POST :: New Suggestion
// DELETE :: My Suggestion

// POST :: Vote on Suggestion
// DELETE :: Vote on Suggestion




app.listen(8080, function(){
  console.log('Listening on port 8080');
});
