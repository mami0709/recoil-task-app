//@ts-nocheck
import { useRecoilState } from 'recoil';
import { todoListState } from '../status/atom';

function TodoItem({ item }) {
	
	const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
		const index = todoList.findIndex((listItem) => listItem.id === item.id);
		const newTodoList = [
			...todoList.slice(0, index),
			...todoList.slice(index + 1),
		];
		setTodoList(newTodoList);
	};

  return (
    <div>
      {item.title}
      <span onClick={deleteItem} style={{ cursor: 'pointer' }}>
        X
      </span>
    </div>
  );
}

export default TodoItem;