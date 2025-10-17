import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name} // ✅ Unique key for each item
          todoDate={item.dueDate}
          todoName={item.name} onDeleteClick={onDeleteClick} // ✅ Use name instead of id
        />
      ))}
    </div>
  );
};

export default TodoItems;

