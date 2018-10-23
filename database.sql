-- basic table set up

CREATE DATABASE beer_db


CREATE TABLE member (
  id serial,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

  CREATE TABLE event (
    id serial,
    name varchar(50) NOT NULL UNIQUE,
    PRIMARY KEY (id)
  );

  CREATE TABLE member_map (
  id serial,
  member_id INT NOT NULL,
  event_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (member_id) REFERENCES member (id),
  FOREIGN KEY (event_id) REFERENCES event (id)

);

CREATE TABLE suggestions (
  id SERIAL,
  venue_name VARCHAR(50) NOT NULL,
  reason VARCHAR(50) NOT NULL,
  suggester_id INT NOT NULL,
  event_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (suggester_id) REFERENCES member (id),
  FOREIGN KEY (event_id) REFERENCES event (id)
);

-- initialising first group, for testing purposes

INSERT INTO member (name) VALUES ('Phil');
INSERT INTO member (name) VALUES ('Joe');
INSERT INTO member (name) VALUES ('Mel');
INSERT INTO member (name) VALUES ('Dan');

INSERT INTO event (name) VALUES ('electric-dog');

INSERT INTO member_map (member_id, event_id) VALUES (1, 1);
INSERT INTO member_map (member_id, event_id) VALUES (2, 1);
INSERT INTO member_map (member_id, event_id) VALUES (3, 1);
INSERT INTO member_map (member_id, event_id) VALUES (4, 1);

INSERT INTO suggestions (venue_name, reason, suggester_id, event_id) VALUES ('The Castle', 'Pool Table', 1, 1);
INSERT INTO suggestions (venue_name, reason, suggester_id, event_id) VALUES ('The Junction', 'Quiz Night', 4, 1);
