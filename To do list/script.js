
let addBtn=document.querySelector('.add');
let newElement= document.getElementById('input');
let ul=document.getElementById('itemList');
let edit=document.querySelectorAll('.edit');


const itemsArray= localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];
console.log(itemsArray);

function displayItems(){
    let items="";
    for(let i=0;i<itemsArray.length;i++){
        items+=`<li><div class="item">
                ${itemsArray[i]}
                <div class="options">
                    <button class="edit"><i class="fa-solid fa-pen"></i></button>
                    <button class="remove"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            </li>`
    }
    document.querySelector('#itemList').innerHTML=items;
    
}

window.onload=function(){
    displayItems();
    activateDeleteListener();
    activateEditListener()
}

addBtn.addEventListener('click',()=>{
    if(newElement.value===""){
        console.log('ENTER SOME DATA');
        let container=document.querySelector(".new");
        container.style.border="1px solid red";
        newElement.placeholder="Please enter some data";
        newElement.focus();
        return;
    }
    else{
        console.log(newElement.value);
        let li= document.createElement("li");
        li.innerText=newElement.value;
        li.classList.add("item");

        let options=document.createElement("div");
        options.classList.add("options");
        let addBtn=document.createElement("button");
        addBtn.classList.add("edit");
        addBtn.innerHTML='<i class="fa-solid fa-pen"></i>';
        let delBtn=document.createElement("button");
        delBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
        delBtn.classList.add("remove");
        options.append(addBtn);
        options.append(delBtn);
        li.append(options);
        ul.append(li);
        itemsArray.push(newElement.value);
        localStorage.setItem("items",JSON.stringify(itemsArray));
        newElement.value="";
    }
});



function activateEditListener(){
    document.querySelectorAll('.edit').forEach((eb, i) => {
        eb.addEventListener('click', (event) => {
            editItems(i, event.currentTarget);
        });
    });
}

function editItems(i, button){
    let itemDiv = button.parentElement.parentElement;
    let itemText = itemDiv.firstChild.textContent.trim();

    let editInput = document.createElement('input');
    editInput.value = itemText;
    editInput.classList.add('input');

    itemDiv.replaceChild(editInput, itemDiv.childNodes[0]);
    editInput.focus();

    let isSaved = false;

    const saveChanges = () => {
        itemsArray[i] = editInput.value;
        localStorage.setItem("items", JSON.stringify(itemsArray));
        itemDiv.insertBefore(document.createTextNode(editInput.value), itemDiv.childNodes[0]);
        itemDiv.removeChild(editInput);
        isSaved = true;
    }

    editInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !isSaved) {
            saveChanges();
        }
    });

}

function activateDeleteListener(){
    document.querySelectorAll('.remove').forEach((db,i) => {
        db.addEventListener('click',()=>{ deleteItems(i)});

    });
}


function deleteItems(i){
    itemsArray.splice(i,1);
    localStorage.setItem("items",JSON.stringify(itemsArray));
    location.reload();
}





