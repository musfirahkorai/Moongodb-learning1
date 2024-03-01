// CREATE
var courses = [
    {
        name: "Musfiras web dev free course",
        price: 0,
        assignments: 12,
        projects: 45
    },
    {
        name: "Advanced JavaScript",
        price: 49.99,
        assignments: 15,
        projects: 30
    },
    {
        name: "Python for Data Science",
        price: 79.99,
        assignments: 10,
        projects: 20
    }
];

db.courses.insertMany(courses);

// READ
db.courses.find({ price: 0 });

// UPDATE
db.courses.updateOne({ price: 0 }, { $set: { price: 100 } });

// DELETE
db.courses.deleteOne({ price: 100 });

