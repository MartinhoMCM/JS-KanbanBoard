let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  let item =document.createElement('div');
  item.classList.add("item");
  item.id='item-'+order;
  item.draggable();

  item.addEventListener("dragstart",(event)=>event.dataTransfer.setData('text', event.target));
  item.addEventListener("dragend",(event)=>event.dataTransfer.clearData());

  let input =document.createElement('input');

  item.appendChild(input);

  save_btn =document.createElement('button').innerHTML='Save';

  save_btn.addEventListener('click', ()=>{
    if(input.value.length==0){
      
    }
  })

};

document.querySelectorAll('.drop').forEach(element => {
});


