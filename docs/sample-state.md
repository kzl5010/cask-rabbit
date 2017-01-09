{
  currentUser: {
    id: 1,
    username: "demo"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    taskTitle: {errors: ["Cannot be blank"]}
    taskLocation: {errors: ["Invalid Location"]}
    taskDescription: {errors: ["Cannot be blank"]}
  },
  tasks: {
    1: {
      title: "Move Furniture",
      author_id: 1,
      location: ["1600 Pennsylvania Avenue NW", "Washington", "DC", "20006"]
      description: "is cool"
      tasker_id: 1
    }
  }
  taskers: {
    1: {
      name: "Tsar Putin"
      reviews: [5, 4, 5, 5]
      tasksDone: "Intelligence", "Disposal", "Sanitation",
    }
  }
}
