const main = require('../build/Debug/main.node');
const { Student } = main;
const stu = new Student(11, 22, "yizhan");
console.log(stu, stu.id, stu.age, stu.name);