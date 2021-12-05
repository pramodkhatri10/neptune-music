-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');

INSERT INTO songs (id, song_title, notes) 
VALUES (2, 'Twinkle Twinkle', 'C5 C5 G5 G5 A5 A5 G5 F5 F5 E5 E5 D5 D5 C5 G5 G5 F5 F5 E5 E5 D5 G5 G5 F5 F5 E5 E5 D5 C5 C5 G5 G5 A5 A5 G5 F5 F5 E5 E5 D5 D5 C5');

INSERT INTO songs (id, song_title, notes) 
VALUES (3, 'Lost Woods', 'D4 A4 A4 E4 B4 C12 F4 C5 C5 E4 B4 C12 D4 A4 A4 E4 B4 C12 F4 C5 C5 E4 B4 C12 D4 F4 B4 D4 F4 B4 E5 F5 E5 F5 E5 C5 A4 A4 D4 F4 G4 A4 A4 D4 F4 G4 E4 D4 F4 B4 D4 F4 B4 E5 F5 E5 F5 E5 C5 A4 A4 D4 F4 G4 A4 A4 D4
');

INSERT INTO songs (id, song_title, notes) 
VALUES (4, 'Mary Had a Little Lamb', 'E3 D2 C1 D2 E3 E3 D2 D2 D2 E3 E3 E3 E3 D2 C1 D2 E3 E3 E3 E3 D2 D2 E3 D2 C1');
