// case - declares a sturcture that is intended for pattern mathcing (see also 'match')
// class - a category of object, asa blueprint for objects
// object - an instance of a class
// def   - fucntion definition, immediately followed by func name and it's typed parameters (id:Int, etc)



case class TodoItem(id: Int, task: String, completed: Boolean)  // basic todo data structure, id/string/bool

object TodoList {
  var todos: List[TodoItem] = List(
    TodoItem(1, "Buy groceries", completed = false),
    TodoItem(2, "Finish Scala project", completed = false),
    TodoItem(3, "Exercise", completed = true)
  )

  def addTodo(task: String): Unit = {
    val newId = todos.map(_.id).max + 1
    todos = todos :+ TodoItem(newId, task, completed = false)
  }

  def markCompleted(id: Int): Unit = {
    todos.find(_.id == id).foreach(todo => {
      todos = todos.updated(todos.indexOf(todo), todo.copy(completed = true))
    })
  }

  def main(args: Array[String]): Unit = {
    println("Todo List:")
    todos.foreach(todo => println(s"${todo.id}. [${if (todo.completed) "x" else " "}] ${todo.task}"))


    addTodo("Clean the house")


    markCompleted(1)

    println("\nUpdated Todo List:")
    todos.foreach(todo => println(s"${todo.id}. [${if (todo.completed) "x" else " "}] ${todo.task}"))
  }
}
