# Beer?

**_Beer?_** is a web app to help groups of friends decide upon a place to drink. It was born out of a desire to dispense with those drawn-out discussions on social media when trying to agree a venue.

> View live demo [https://where-to-beer.herokuapp.com/](https://where-to-beer.herokuapp.com/)

## About

_Beer?_ provides a user-friendly platform for the event organiser to create an event, suggest a venue and share a link to a unique event page with their friends. Upon following this link, friends are able to suggest alternative pubs/venues, give reasons why and upvote each other’s suggestions.

**Team members**

- [Phil Berryman](https://github.com/philberryman)
- [Joe Lamb](https://github.com/lemonydesign)
- [Mel Ashby](https://github.com/lemonydesign)
- [Dan Geraghty](https://github.com/DanGRT)

## Installation & setup

- Clone this repo and run `npm install` to download the dependencies.
- Create a local PostgreSQL database and run the query in the `database.sql` file to set up the tables.
- Create a `.env` file at the root level of the app folder and add the following variables:

```
DB_NAME=[your database name]
DB_USERNAME=[your user name]
DB_PASSWORD=
```

## Technology

- React
- Express
- Node.js
- Handlebars
- Web sockets
- PostgreSQL

---

## Features

- Intuitive, mobile-first design.
- Events, members, venues and votes are held in a relational database.
- Unique, memmorable shareable event links are dynamically generated from adjective/noun combinations.
- Persistent log-in with localStorage: once a member has created a username and signed-in they can easily jump back into the event discussion.
- Live update with web sockets. Each new venue suggestion or vote added to any event triggers an update for all members of the event so they always see the most up to date info.
- Suggestions ranked according to popularity. The venue with the most votes appears at the top of the suggestions list.

---

## Future Plans

- Integration with GoogleMaps API to make venue suggestions easier.
- Password protection to give additional security to user login.
- Threading of discussion in relation to specific venues.
- Show list of event members and confirmed attendees to give everyone visibility of who’s going to be there.
- Desktop layout.
- In-app contacts list and invite sharing.
- Cross-browser testing (currently only Google and Firefox) and unit tests.
