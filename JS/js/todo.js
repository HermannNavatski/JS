
var todoList = [];
if (localStorage.getItem('todo') != undefined) {
	todoList = JSON.parse(localStorage.getItem('todo'));
	out();
}

document.getElementById("add").onclick = function () {
	var  input = document.getElementById('in').value;
	/*{todo : Добавить дело , check : true/false}*/
	var temp = {};
	temp.todo = input;
	temp.check = false;
	var i = todoList.length;
	todoList[i] = temp;
	console.log(todoList);
	out();
	localStorage.setItem('todo', JSON.stringify(todoList));
}
/*
var deleteButton = document.createElement('input');
	deleteButton.type = 'button';
	deleteButton.value = 'Delete';
	deleteButton.onclick = deleteTodo;
function deleteTodo(){
	this.parentElement.remove();
}
*/
function out(){
	var out = "";
	for(var key in todoList){
		if(todoList[key].check == true){
			out += '<input type = "checkbox" checked>';
		}
		else{
			out += '<input type = "checkbox">';
		}
		out += todoList[key].todo + '<button value="delete", id="deleteButton"></button> '+ '<br>';
	}
	document.getElementById('out').innerHTML = out;
}
