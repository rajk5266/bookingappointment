window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/fe8a97f9f7d24b0cbbe0b91264a8a786/appointmentdetails')
     .then((response) => {
      console.log(response)
      for(var i=0; i< response.data.length; i++){
            reloadData(response.data[i])
         }
     })
     .catch((error) => {
      console.log(error)
     }) 
 })

 function reloadData(obj){
     var parentelem = document.getElementById('listOfitems')
     var childelem = document.createElement('li')
      childelem.textContent = obj.name + '-' + obj.email + '-' + obj.phoneno + '-' + obj.date + '-' + obj.time
      const edit = document.createElement('input')
      edit.type = "button"
      edit.value = 'EDIT'
      edit.onclick =() =>{
         localStorage.removeItem(obj.email)
         parentelem.removeChild(childelem)
         document.getElementById('clientnameInputTag').value = obj.name
         document.getElementById('emailInputTag').value = obj.email
         document.getElementById('phoneNumberInputTag').value = obj.phoneno
         document.getElementById('datetag').value = obj.date
         document.getElementById('timetag').value = obj.time
      }

      const delbtn = document.createElement('input')
      delbtn.type = "button"
      delbtn.value = 'DELETE'
      delbtn.style.backgroundColor = 'red'
      delbtn.onclick  = () => {
         localStorage.removeItem(obj.email)
         parentelem.removeChild(childelem)
      }
      childelem.appendChild(delbtn)
      childelem.appendChild(edit)
      parentelem.appendChild(childelem)

 }

function submitting(event){
     event.preventDefault();
     var name = event.target.clientname.value;
     var email = event.target.emailadd.value;
     var phoneno = event.target.phoneno.value;
     var date = event.target.date.value;
     var time = event.target.timing.value;

     const obj = {
         name,
         email,
         phoneno,
         date,
         time
     }
    
     // localStorage.setItem('userdetails', JSON.stringify(obj))
     // localStorage.setItem(obj.email, JSON.stringify(obj))

   
    showuseronscreen(obj)

    function showuseronscreen(obj){
     var parentelem = document.getElementById('listOfitems')
     // parentelem.innerHTML = parentelem.innerHTML + `<li>${obj.name} - ${obj.email} - ${obj.phoneno} - ${obj.date} - ${obj.time}</li>`


     var childelem = document.createElement('li')
      childelem.textContent = obj.name + '-' + obj.email + '-' + obj.phoneno + '-' + obj.date + '-' + obj.time

      const edit = document.createElement('input')
      edit.type = "button"
      edit.value = 'EDIT'
      edit.onclick =() =>{
         localStorage.removeItem(obj.email)
         parentelem.removeChild(childelem)
         document.getElementById('clientnameInputTag').value = obj.name
         document.getElementById('emailInputTag').value = obj.email
         document.getElementById('phoneNumberInputTag').value = obj.phoneno
         document.getElementById('datetag').value = obj.date
         document.getElementById('timetag').value = obj.time
      }

      const delbtn = document.createElement('input')
      delbtn.type = "button"
      delbtn.value = 'DELETE'
      delbtn.style.backgroundColor = 'red'
      delbtn.onclick  = () => {
         localStorage.removeItem(obj.email)
         parentelem.removeChild(childelem)
      }
      childelem.appendChild(delbtn)
      childelem.appendChild(edit)
      parentelem.appendChild(childelem)
    }

    axios.post('https://crudcrud.com/api/fe8a97f9f7d24b0cbbe0b91264a8a786/appointmentdetails', obj)
     .then((response) => {
         showuseronscreen(response.data)
         console.log(response)
     })
     .catch((error) => {
         console.log(error)
     })
    }