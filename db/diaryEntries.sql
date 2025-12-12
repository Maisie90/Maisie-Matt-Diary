DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT GENERATED ALWAYS AS IDENTITY,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    time TIME NOT NULL DEFAULT CURRENT_TIME,
    category VARCHAR(50) NOT NULL,
    diary_entry TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO diary (category, diary_entry) VALUES
('Work', 'Reviewed quarterly reports and prepared notes for leadership.'),
('Personal', 'Had lunch at a local bistro and tried a new pasta dish.'),
('Exercise', 'Did a 45-minute strength training session at the gym.'),
('Work', 'Met with the design team to finalize UI changes.'),
('Personal', 'Ran errands, including grocery shopping and picking up packages.'),
('Hobby', 'Worked on a digital art illustration for a personal project.'),
('Work', 'Completed code reviews and updated documentation.'),
('Personal', 'Went for a walk during lunch and grabbed a smoothie.'),
('Exercise', 'Attended a yoga class at the community center.'),
('Hobby', 'Played an online multiplayer game with friends for an hour.')