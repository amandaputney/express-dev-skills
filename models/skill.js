const skills = [
    { id: 1, skill: 'Javascript Fundamentals', aquired: true },
    { id: 2, skill: 'Array Iterator Methods', aquired: true },
    { id: 3, skill: 'Express Framework', aquired: false },
    { id: 4, skill: 'MongoDB', aquired: false },
    { id: 5, skill: 'Bad Posture', aquired: true },
    { id: 6, skill: 'Relational Databases & SQL', aquired: false },
    { id: 7, skill: 'Fundamentals of React', aquired: false },
    { id: 8, skill: 'MERN-Stack Infrastructure', aquired: false }
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}