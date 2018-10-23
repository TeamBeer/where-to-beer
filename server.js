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
  const {name} = req.body
  db.one('INSERT INTO event (name) VALUES ($1) RETURNING id', [name])
  .then(eventId => res.json(eventId))
  .catch(error => {
    res.json({error: error.message});
  })
})

// PUT / UPDATE :: Event
app.put('/api/event/:eventId', (req, res) => {
  const eventId = req.params.eventId
  const {name} = req.body
  console.log(`api.put req.body :: ${req.body}`)
  console.log(`api.put eventId :: ${eventId}`)
  db.one('UPDATE event SET name = ($1) WHERE eventId = $2 RETURNING id', [name, eventId])
  .then(updatedEvent => {
    console.log(`api.put :: ${updatedEvent}`)
    res.json(updatedEvent)
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
    .then((event) => {
      res.json(event)
    })
    .catch((error) => {
      res.json({error: error.message})
    })
  })


// POST :: New Suggestion
app.post('/api/suggestion', (req, res) => {
  const {venueName, reason, memberId, eventId, postcode} = req.body
  db.one('INSERT INTO suggestion (venue_name, reason, member_id, event_id, postcode) VALUES ($1, $2, $3, $4) RETURNING id', [venueName,reason, memberId, eventId, postcode])
  .then(suggestionId => res.json(suggestionId))
  .catch(error => {
    res.json({error: error.message});
  })
})

// PUT :: 

// DELETE :: My Suggestion

// POST :: Vote on Suggestion
app.post('/api/vote', (req, res) => {
  const {memberId, suggestionId} = req.body
  db.one('INSERT INTO vote (suggestion_Id, member_Id) VALUES ($1, $2) RETURNING id', [memberId,suggestionId])
  .then(voteId => res.json(voteId))
  .catch(error => {
    res.json({error: error.message});
  })
})



// DELETE :: Vote on Suggestion




app.listen(8080, function(){
  console.log('Listening on port 8080');
});
