require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const db = pgp({
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD

});

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');


// This function is shared by both the Post and Get routes for event
const getEventFromDb = (eventName) => {
  
  return Promise.all([
    db.one('SELECT * FROM event WHERE name = $1', [eventName]),
    db.any('SELECT suggestion.venue_name, suggestion.reason, suggestion.postcode, member.name, suggestion.id AS "id", event.id  AS "event_id" FROM suggestion, member, event WHERE event.name = $1 AND suggestion.member_id = member.id AND event.id = suggestion.event_id', [eventName]),
    db.any('SELECT  event.id AS "eventId", vote.id AS "voteId" , suggestion.id AS "suggestionId", member.id AS "memberId", member.name AS "memberName" FROM vote, member, suggestion, event WHERE event.name = $1 AND vote.suggestion_id = suggestion.id AND event.id = suggestion.event_id AND member.id = vote.member_id GROUP BY event.id, suggestion.id, vote.id, member.name, member.id', [eventName])
  ])
    .then(([event, suggestions, votes]) => ({ event: event, suggestions: suggestions, votes: votes }))
    .catch((error) => {console.log(error)})
}


// POST / INSERT :: New Event
// This endpoint creates an entry in member, event, member_event and suggestion tables
app.post('/api/event', (req, res) => {
  const { memberName, eventName, dateTime, venueName, venuePostcode, venueReason } = req.body
  Promise.all([
    db.one('INSERT INTO member (name) VALUES ($1) RETURNING id', [memberName]),
    db.one('INSERT INTO event (name, date_time) VALUES ($1, $2) RETURNING id', [eventName, dateTime])
  ])
    .then(([memberId, eventId]) => {
      return Promise.all([
        db.none('INSERT INTO member_event (member_id, event_id) VALUES ($1, $2)', [memberId.id, eventId.id]),
        db.one('INSERT INTO suggestion (member_id, event_id, venue_name, reason, postcode) VALUES ($1, $2, $3, $4, $5) RETURNING id', [memberId.id, eventId.id, venueName, venueReason, venuePostcode])
      ])
        .then(() => getEventFromDb(eventName))
        .then((eventData) => res.json(eventData))
    })
    .catch((error) => {
      res.json({ error: error.message })
    })
})


// PUT / UPDATE :: Event
app.put('/api/event/:eventId', (req, res) => {
  const eventId = req.params.eventId
  const { name } = req.body
  db.one('UPDATE event SET name = ($1) WHERE id = $2 RETURNING id', [name, eventId])
    .then(updatedEventId => {
      res.json(updatedEventId)
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
})

// DELETE :: My Event

// GET :: View event
// This endpoint creates an object containing event details (from event table) and suggestions for that event (from suggestions table)
app.get('/api/event/:eventId', (req, res) => {
  const eventId = req.params.eventId
  getEventFromDb(eventId).then((eventData) => {
    res.json(eventData)
  })
    .catch((error) => {
      res.json({ error: error.message })
    })
})


// POST :: New Suggestion
app.post('/api/suggestion', (req, res) => {
  const { venueName, reason, memberId, eventId, postcode } = req.body
  db.one('INSERT INTO suggestion (venue_name, reason, member_id, event_id, postcode) VALUES ($1, $2, $3, $4, $5) RETURNING id', [venueName, reason, memberId, eventId, postcode])
    .then(suggestionId => res.json(suggestionId))
    .catch(error => {
      res.json({ error: error.message });
    })
})

// PUT ::

// DELETE :: My Suggestion

// POST :: Vote on Suggestion
app.post('/api/vote', (req, res) => {
  const { memberId, suggestionId } = req.body
  console.log(memberId, suggestionId)
  db.one('INSERT INTO vote (suggestion_Id, member_Id) VALUES ($1, $2) RETURNING id', [suggestionId, memberId])
    .then(voteId => res.json(voteId))
    .catch(error => {
      res.json({ error: error.message });
    })
})

// DELETE :: Vote on Suggestion

app.delete('/api/vote', (req, res) => {
  const { memberId, suggestionId } = req.body
  db.none('DELETE FROM vote where member_id = $1 AND suggestion_id =$2', [memberId, suggestionId])
    .then(() => res.status(204).json({ message: 'vote deleted' }))
    .catch(error => {
      res.json({ error: error.message });
    })
})

// POST :: New Member
app.post('/api/member', (req, res) => {
  const { memberName } = req.body
  db.one('INSERT INTO member (name) VALUES ($1) RETURNING id, name', [memberName])
    .then(memberDetails => res.json(memberDetails))
    .catch(error => {
      res.json({ error: error.message });
    })
})

// GET :: Member details
app.get('/api/member/:memberId', (req, res) => {
  const memberId = req.params.memberId
  db.one('SELECT * FROM member WHERE id = $1', [memberId])
    .then(memberDetails => res.json(memberDetails))
    .catch((error) => {
      res.json({ error: error.message })
    })
})

app.use((req, res) => {
  res.render('index');
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Listening on port number ${port}`);
});
