let id=0;

const Todo= ({todo, onToggle, onDelete}) => (
        <li className = "list">
            <input type="checkbox" checked={todo.checked} onChange={onToggle}/>
            <span>{todo.text}</span>
            <button className="button-2" onClick={onDelete}>Delete</button>
        </li>)



function App() {
    const [todos,setTodos] = React.useState([])
    
    function addTodo() {
        const text = prompt('Enter task to do');
        const todo = {id: id++, text, checked: false};
        setTodos([...todos,todo]);
    }

    function deleteTodo(id) {
        setTodos([...todos.filter(todo => todo.id !== id)]);
        }

        function toggleTodo(id) {
            setTodos([...todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)]);
            render();
          }
        

    return (
    <div className="container center">

        <h1 className="title">My TODO App</h1>
        <div className="counters">
            <span className="counter1">Item count: <span>{todos.length}</span></span>
            <span className="counter2">Unchecked count: <span >{todos.filter(todo => todo.checked == false).length}</span></span>
        </div>
        <button className="button center" onClick={addTodo}>New TODO</button>
        <ul className="todo-list">
            {todos.map(todo => <Todo key={todo.id} todo={todo} 
                onDelete={() => {deleteTodo(todo.id)}} 
                onToggle={()=> {toggleTodo(todo.id)}}
            />)}
        </ul>

    </div>
    );
  }
  
  const container = document.getElementById('app');
  const root = ReactDOM.createRoot(container);
  
  root.render(<App />);