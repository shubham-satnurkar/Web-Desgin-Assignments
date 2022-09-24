let flag = false;
const carArray = ['Maruti', 'Ford', 'Ferari', 'Lamborgini', 'BMW'];
let btnNode = document.getElementById("addList");
btnNode.addEventListener("click", function(){
	if(flag == false) listItem();
	else removeOL();
});
let olNode;
function listItem(){
	olNode = document.createElement("ol");
	olNode.setAttribute("id", "orderList");
	for(let item of carArray){
		let liNode=document.createElement("li");
		liNode.textContent=item;
		// liNode.style.color="red";
		olNode.append(liNode);
	}
	btnNode.after(olNode);
	flag = true;
}

function removeOl(){
	olNode.remove();
	flag = false;
}

console.log(carArray);

function replaceItems () {
	let textNode = document.createTextNode("Tata");
	let listItems = document.getElementById("orderList");
	listItems.replaceChild(textNode, listItems.childNodes[0]);
	console.log(textNode);
}

function removeItems(){
	let listItems = document.getElementById("orderList");
	listItems.removeChild(listItems.childNodes[0]);
}