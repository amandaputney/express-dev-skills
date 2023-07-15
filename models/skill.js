const skills = [
    { id: 100, skill: 'Javascript Fundamentals', aquired: true },
    { id: 200, skill: 'Array Iterator Methods', aquired: true },
    { id: 300, skill: 'Express Framework', aquired: false },
    { id: 400, skill: 'MongoDB', aquired: false },
    { id: 500, skill: 'Bad Posture', aquired: true },
    { id: 600, skill: 'Relational Databases & SQL', aquired: false },
    { id: 700, skill: 'Fundamentals of React', aquired: false },
    { id: 800, skill: 'MERN-Stack Infrastructure', aquired: false }
];

module.exports = {
    getAll,
    getOne, create, deleteOne
};

function create(skill) {
    skill.id = Date.now() % 1000;
    skill.aquired = false;
    skills.push(skill);

};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function deleteOne(id) {
    id = parseInt(id);
    //find index 
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
};