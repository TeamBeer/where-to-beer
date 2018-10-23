-- basic table set up
CREATE DATABASE beer_db;

CREATE TABLE member (
  id serial,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

  CREATE TABLE event (
    id serial,
    name varchar(50) NOT NULL UNIQUE,
    date_time TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
  );

  CREATE TABLE member_event (
  id serial,
  member_id INT NOT NULL,
  event_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (member_id) REFERENCES member (id),
  FOREIGN KEY (event_id) REFERENCES event (id)
);

CREATE TABLE suggestion (
  id SERIAL,
  venue_name VARCHAR(50) NOT NULL,
  reason TEXT,
  postcode VARCHAR(9) NOT NULL,
  member_id INT NOT NULL,
  event_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (member_id) REFERENCES member (id),
  FOREIGN KEY (event_id) REFERENCES event (id)
);

CREATE TABLE vote (
  id SERIAL,
  member_id INT NOT NULL,
  suggestion_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (member_id) REFERENCES member (id),
  FOREIGN KEY (suggestion_id) REFERENCES suggestion (id)
);

-- initialising first group, for testing purposes

INSERT INTO member (name) VALUES ('Phil');
INSERT INTO member (name) VALUES ('Joe');
INSERT INTO member (name) VALUES ('Mel');
INSERT INTO member (name) VALUES ('Dan');

INSERT INTO event (name, date_time) VALUES ('electric-dog', '2018-10-23T13:14:17Z');

INSERT INTO member_event (member_id, event_id) VALUES (1, 1);
INSERT INTO member_event (member_id, event_id) VALUES (2, 1);
INSERT INTO member_event (member_id, event_id) VALUES (3, 1);
INSERT INTO member_event (member_id, event_id) VALUES (4, 1);

INSERT INTO suggestion (venue_name, postcode, reason, member_id, event_id) VALUES ('The Castle', 'E1 3RT', 'Pool Table', 1, 1);
INSERT INTO suggestion (venue_name, postcode, reason, member_id, event_id) VALUES ('The Junction', 'W4 5NT', 'Quiz Night', 4, 1);

INSERT INTO vote (member_id, suggestion_id) VALUES (1, 1);
INSERT INTO vote (member_id, suggestion_id) VALUES (2, 1);
INSERT INTO vote (member_id, suggestion_id) VALUES (3, 1);
INSERT INTO vote (member_id, suggestion_id) VALUES (4, 2);
