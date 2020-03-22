import React, {useContext} from "react";
import TodosContext from "../context";

export default function TodoList() {
    const {state, dispatch} = useContext(TodosContext);
    const title = state.todos.length > 0 ? `${state.todos.length} Todos ` : "Nothing To Do";

    return (
        <div className="container mx-auto max-w-md tex-center font-mono">
            <h1 className="text-bold">{title}</h1>
            <ul className="list-reset-text-white p-0">
                {state.todos.map(todo => (
                    <li key={todo.id}
                    className="flex bg-orange-darker border-black border-dashed border-2 my-2 py-2">
                        <span
                        onDoubleClick={() => dispatch({type: "TOGGLE_TODO", payload: todo})}
                        className={`flex-1 cursor-pointer ${todo.complete && "line-through text-gray-darkest"}`}>{todo.text}</span>
                        <button>
                            <img src="https://icon.now.sh/edit/0050c" alt="edit icon" className="h-6"/>
                        </button>
                        <button>
                            <img src="https://icon.now.sh/delete/8b0000" alt="delete icon" className="h-6"/>
                        </button>

                    </li>
                    )
                )}
            </ul>
        </div>
    )

}