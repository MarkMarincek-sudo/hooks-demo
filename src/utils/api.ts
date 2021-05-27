import { Todo } from './interfaces';

async function loadTodos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return (await res.json()) as Todo[];
  } catch (e) {
    console.error(e);
  }
}

export { loadTodos };
