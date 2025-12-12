DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT GENERATED ALWAYS AS IDENTITY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    category VARCHAR(50) NOT NULL,
    diary_entry TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO diary (date, time, category, diary_entry) VALUES
('2025-12-01', '08:15:00', 'Work', 'Reviewed quarterly reports and prepared notes for leadership.'),
('2025-12-01', '12:30:00', 'Personal', 'Had lunch at a local bistro and tried a new pasta dish.'),
('2025-12-01', '18:45:00', 'Exercise', 'Did a 45-minute strength training session at the gym.'),
('2025-12-02', '09:00:00', 'Work', 'Met with the design team to finalize UI changes.'),
('2025-12-02', '13:15:00', 'Personal', 'Ran errands, including grocery shopping and picking up packages.'),
('2025-12-02', '19:30:00', 'Hobby', 'Worked on a digital art illustration for a personal project.'),
('2025-12-03', '08:45:00', 'Work', 'Completed code reviews and updated documentation.'),
('2025-12-03', '12:10:00', 'Personal', 'Went for a walk during lunch and grabbed a smoothie.'),
('2025-12-03', '17:50:00', 'Exercise', 'Attended a yoga class at the community center.'),
('2025-12-04', '20:00:00', 'Hobby', 'Played an online multiplayer game with friends for an hour.')