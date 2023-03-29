const toDoForm = document.getElementById("Todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("Todo_list");
let todos = [];
const todos_KEY = "todos";

function saveTodo(){
   localStorage.setItem(todos_KEY, JSON.stringify(todos)); 
}

function paintTodo(newTodo){    //화면에 리스트들을 나타내는 함수
    const $todoList = document.createElement("li");
    const $todoList_span = document.createElement("span");
    $todoList_span.innerHTML = newTodo.text; //TodoSubmit에서 받아온 newTodoObj(=newTodo)의 text프로퍼티만 spna에 출력한다.
    
    const $btn = document.createElement("button");  //delete버튼
    $btn.innerHTML = "❌";
    $btn.addEventListener("click",function(){
        this.parentNode.remove();
        todos = todos.filter(todo => todo.id !== newTodo.id ) //설명 : Todos배열에서 클릭했을 때 클릭 된 id값을 뺀 나머지를 todos에 새로운 배열로 할당한다. 
        saveTodo();
    })

    $todoList.appendChild($todoList_span);
    $todoList.appendChild($btn);
    toDoList.appendChild($todoList);
}

function TodoSubmit(){  //input을 submit하면 연관된 함수들이 시작!

    toDoForm.addEventListener("submit",function(e){
        e.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";   //input을 공백으로 만드는 역할. 중복입력 방지한다.
        const newTodoObj = {
            text:newTodo,
            id:Date.now(),
        }
        todos.push(newTodoObj);  //todos.push(newTodo); 에서 오브젝트로 값을 바꿔서 받아온다.
        paintTodo(newTodoObj);
        saveTodo();
    })
    
}
TodoSubmit();

const saveTodos = localStorage.getItem(todos_KEY);  //아직까지는 문자열

if(saveTodos){
    const parseTodos = JSON.parse(saveTodos);   //배열로 변환
    todos = parseTodos; // 7) 새로고침 한 뒤 localstorage 덮어써지는 issue 해결사항. array에  이전 todolist 할당
    for(var i = 0; i < parseTodos.length; i++){
        paintTodo(parseTodos[i]);
    }
}
