// USER

db.users.insertMany([
  {
    user_id: 1,
    name: "Surya",
    email: "surya@gmail.com",
    mentor_id: 1,
  },
  {
    user_id: 2,
    name: "Kavitha",
    email: "kavitha@gmail.com",
    mentor_id: 2,
  },
  {
    user_id: 3,
    name: "Maran",
    email: "maran@gmail.com",
    mentor_id: 4,
  },
  {
    user_id: 4,
    name: "Subash",
    email: "subash@gmail.com",
    mentor_id: 7,
  },
  {
    user_id: 5,
    name: "Jenifer",
    email: "jeni@gmail.com",
    mentor_id: 6,
  },
  {
    user_id: 6,
    name: "kundhavai",
    email: "kundhavai@gmail.com",
    mentor_id: 1,
  },
  {
    user_id: 7,
    name: "Vanthiyathevan",
    email: "vanthiyathevan@gmail.com",
    mentor_id: 2,
  },
  {
    user_id: 8,
    name: "Mathi",
    email: "mathi@gmail.com",
    mentor_id: 4,
  },
  {
    user_id: 9,
    name: "Subramani",
    email: "smani@gmail.com",
    mentor_id: 3,
  },
  {
    user_id: 10,
    name: "Amirtha",
    email: "amirtha@gmail.com",
    mentor_id: 6,
  },
]);

// CODEKATA

db.codekata.insertMany([
  {
    user_id: 1,
    problems: 80,
  },
  {
    user_id: 2,
    problems: 75,
  },
  {
    user_id: 3,
    problems: 127,
  },
  {
    user_id: 4,
    problems: 50,
  },
  {
    user_id: 5,
    problems: 77,
  },
  {
    user_id: 6,
    problems: 200,
  },
  {
    user_id: 7,
    problems: 240,
  },
  {
    user_id: 8,
    problems: 320,
  },
  {
    user_id: 9,
    problems: 150,
  },
  {
    user_id: 10,
    problems: 170,
  },
]);

// TOPIC

db.topics.insertMany([
  {
    topic_id: 1,
    topic: "Html",
    topic_date: new Date("29-sep-2020"),
  },
  {
    topic_id: 2,
    topic: "Css",
    topic_date: new Date("1-oct-2020"),
  },
  {
    topic_id: 3,
    topic: "Javascript",
    topic_date: new Date("5-oct-2020"),
  },
  {
    topic_id: 4,
    topic: "React",
    topic_date: new Date("20-oct-2020"),
  },
  {
    topic_id: 5,
    topic: "NodeJs",
    topic_date: new Date("27-oct-2020"),
  },
]);

// TASK

db.tasks.insertMany([
  {
    task_id: 1,
    topic_id: 1,
    user_id: 1,
    task: "Html task",
    due_date: new Date("30-sep-2020"),
    submitted: true,
  },
  {
    task_id: 2,
    topic_id: 2,
    user_id: 2,
    task: "Css task",
    due_date: new Date("2-oct-2020"),
    submitted: true,
  },
  {
    task_id: 3,
    topic_id: 3,
    user_id: 3,
    task: "Javascript task",
    due_date: new Date("6-oct-2020"),
    submitted: false,
  },
  {
    task_id: 4,
    topic_id: 4,
    user_id: 4,
    task: "React task",
    due_date: new Date("21-oct-2020"),
    submitted: true,
  },
  {
    task_id: 5,
    topic_id: 5,
    user_id: 5,
    task: "Node task",
    due_date: new Date("28-oct-2020"),
    submitted: true,
  },  
  {
    task_id: 1,
    topic_id: 1,
    user_id: 6,
    task: "Html task",
    due_date: new Date("30-sep-2020"),
    submitted: false,
  },
  {
    task_id: 2,
    topic_id: 2,
    user_id: 7,
    task: "Css task",
    due_date: new Date("2-oct-2020"),
    submitted: true,
  },
  {
    task_id: 3,
    topic_id: 3,
    user_id: 8,
    task: "Javascript task",
    due_date: new Date("6-oct-2020"),
    submitted: true,
  },
  {
    task_id: 4,
    topic_id: 4,
    user_id: 9,
    task: "React task",
    due_date: new Date("21-oct-2020"),
    submitted: false,
  },
  {
    task_id: 5,
    topic_id: 5,
    user_id: 10,
    task: "Node task",
    due_date: new Date("28-oct-2020"),
    submitted: true,
  },
]);

// ATTENDANCE

db.attendance.insertMany([
  {
    user_id: 1,
    topic_id: 1,
    attended: true,
  },
  {
    user_id: 2,
    topic_id: 2,
    attended: true,
  },
  {
    user_id: 3,
    topic_id: 3,
    attended: true,
  },
  {
    user_id: 4,
    topic_id: 4,
    attended: false,
  },
  {
    user_id: 5,
    topic_id: 5,
    attended: true,
  },{
    user_id: 6,
    topic_id: 1,
    attended: false,
  },
  {
    user_id: 7,
    topic_id: 2,
    attended: true,
  },
  {
    user_id: 8,
    topic_id: 3,
    attended: false,
  },
  {
    user_id: 9,
    topic_id: 4,
    attended: true,
  },
  {
    user_id: 10,
    topic_id: 5,
    attended: true,
  },
]);

// MENTORS

db.mentors.insertMany([
  {
    mentor_id: 1,
    mentor_name: "Manikandan",
    mentor_email: "manikandan@gmail.com",
  },
  {
    mentor_id: 2,
    mentor_name: "Hari",
    mentor_email: "Hari@gmail.com",
  },
  {
    mentor_id: 3,
    mentor_name: "Shalini",
    mentor_email: "Shalini@gmail.com",
  },
  {
    mentor_id: 4,
    mentor_name: "Sivam",
    mentor_email: "sivam@gmail.com",
  },
  {
    mentor_id: 5,
    mentor_name: "Kumaran",
    mentor_email: "kumaran@gmail.com",
  },
  {
    mentor_id: 6,
    mentor_name: "Nandhini",
    mentor_email: "nandini@gmail.com",
  },
  {
    mentor_id: 7,
    mentor_name: "Aravindh",
    mentor_email: "aravindh@gmail.com",
  },
  {
    mentor_id: 8,
    mentor_name: "Thiru",
    mentor_email: "thiru@gmail.com",
  },
  {
    mentor_id: 9,
    mentor_name: "John",
    mentor_email: "john@gmail.com",
  },
  {
    mentor_id: 10,
    mentor_name: "Farook",
    mentor_email: "farook@gmail.com",
  },
]);

// COMPANY DRIVES

db.comapnydrives.insertMany([
  {
    user_id: 1,
    drive_date: new Date("27-sep-2020"),
    company: "Amazon",
  },
  {
    user_id: 2,
    drive_date: new Date("1-oct-2020"),
    company: "SAP",
  },
  {
    user_id: 3,
    drive_date: new Date("5-oct-2020"),
    company: "Animaker",
  },
  {
    user_id: 4,
    drive_date: new Date("10-oct-2020"),
    company: "Freshworks",
  },
  {
    user_id: 5,
    drive_date: new Date("15-oct-2020"),
    company: "Delloite",
  },
  {
    user_id: 6,
    drive_date: new Date("20-oct-2020"),
    company: "TCS",
  },
  {
    user_id: 7,
    drive_date: new Date("25-oct-2020"),
    company: "Infosys",
  },
  {
    user_id: 8,
    drive_date: new Date("30-oct-2020"),
    company: "Facebook",
  },
  {
    user_id: 9,
    drive_date: new Date("5-nov-2020"),
    company: "Zoom",
  },
  {
    user_id: 10,
    drive_date: new Date("10-nov-2020"),
    company: "IBM",
  },
]);
