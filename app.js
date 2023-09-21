
const form=document.querySelector('#new-task-form');
const  input=document.querySelector('#new-task-input');
const  tasks=document.querySelector('.tasks');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userDate=input.value;
    // console.log(userDate);
   if(!userDate){
     alert('Please give the information before submitting!!');
     return;
   }

   const task=document.createElement('div');
   task.classList.add('task');


   const content=document.createElement('div');
   content.classList.add('content');

   const task_input=document.createElement('input');
   task_input.classList.add('form-control');
   task_input.classList.add('text');
   task_input.classList.add('my-4');
   task_input.value=userDate;
   task_input.setAttribute('readonly','readonly');
   task_input.type='text';


    content.appendChild(task_input);
    task.appendChild(content);
    tasks.appendChild(task);




    const actions=document.createElement('div');
    actions.classList.add('actions');

    const edit=document.createElement('button');
    edit.classList.add('btn');
    edit.classList.add('btn-warning');
    edit.classList.add('edit');
    edit.textContent='EDIT';
    
    const delete1=document.createElement('button');
    delete1.classList.add('btn');
    delete1.classList.add('btn-danger');
    delete1.classList.add('mx-2')
    delete1.classList.add('edit');
    delete1 .textContent='DELETE';
    
    actions.appendChild(edit);
    actions.appendChild(delete1);
    task.appendChild(actions);
    tasks.appendChild(task);


    input.value=""




    //edit the user
    edit.addEventListener('click',()=>{
        if(edit.innerHTML=="Edit"){
        task_input.removeAttribute('readonly');
        edit.innerHTML="Save";
        task_input.focus();
        }
        else{
            task_input.setAttribute('readonly','readonly');
            edit.innerHTML="Edit";
                   }
                   input.value="";
    })
//    delete the user


delete1.addEventListener('click',()=>{
    tasks.removeChild(task);
   })

})