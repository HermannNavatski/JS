
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

function out(){
	var out = "";
	for(var key in todoList){
		if(todoList[key].check == true){
			out += '<input type = "checkbox" checked>';
		}
		else{
			out += '<input type = "checkbox">';
		}
		out += todoList[key].todo + '<button id = "delete">Удалить</button>' +'<br>';
	}
	document.getElementById('out').innerHTML = out;
}

