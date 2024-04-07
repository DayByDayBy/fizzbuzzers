import org.scalatest._

class TodoListSpec extends FlatSpec with Matchers {
  import TodoList._
  "addTodo" should "add a new task to the todo list" in {
    
    val initialSize = todos.size
    val taskToAdd = "Test Task"
    addTodo(taskToAdd)
    todos should contain (TodoItem(initialSize + 1, taskToAdd, completed = false))

  }
}
