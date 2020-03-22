import React from "react";

const TodosContext = React.createContext({
    todos: [
        {id: 1, text: "make breakfast", complete: false},
        {id: 2, text: "do laundry", complete: false},
        {id: 3, text: "do homework", complete: true}
    ]
});

export default TodosContext;