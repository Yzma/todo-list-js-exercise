
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },

    markCompleted: function() {
      this.complete = true
    }
  }
  return task
}

const logTaskState = function(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
}

// marks the provided task as completed
const completeTask = function(task) {
  task.complete = true
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box")
const task2 = newTask("Do Laundry", "😨")

logTaskState(task1) // Clean Cat Litter has not been completed
completeTask(task1)
logTaskState(task1) // Clean Cat Litter has been completed
