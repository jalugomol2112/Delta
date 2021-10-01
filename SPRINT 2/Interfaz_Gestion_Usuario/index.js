const body = document.querySelector('body');
const tbody = document.querySelector ('tbody')
const btnAddUpdate = document.querySelector('#btnAddUpdate')
const inRol = document.querySelector('#inRol')
const inNickName = document.querySelector('#inNickName')
const inEmail = document.querySelector('#inEmail')
const inPassword = document.querySelector('#inPassword')

btnAddUpdate.onclick = btnAddUser

body.onload = () => {
    fillTable()
}
    function createRow(u, i){
        const tr = document.createElement('tr')
    
        const tdDelete = document.createElement('td')
        const iDelete = document.createElement('i')
        iDelete.className = 'far fa-trash-alt'
        iDelete.onclick = () => {
            const isConfirm = confirm('Deseas eliminar')
            if(isConfirm){
                deleteUser(i)
                clearTable()
                fillTable()
            }
        }
    
    
        const tdUpdate = document.createElement('td')
        const iUpdate = document.createElement('i')
        iUpdate.className ='fas fa-pen'
        iUpdate.onclick = () => {
            btnAddUpdate.textContent = 'Actualizar'
            inNickName.value = u.nickname
            inPassword.value = u.password
            inEmail.value = u.email
            btnAddUpdate.onclick = (e) => btnUpdateUser(e, i)
        
        }   
    
        const tdRol = document.createElement('td')
        tdRol.textContent = u.rol

        const tdNickName = document.createElement('td')
        tdNickName.textContent = u.nickname
       
        const tdEmail = document.createElement('td')
        tdEmail.textContent = u.email
        
        const tdPassword = document.createElement('td')
        tdPassword.textContent = u.password
        
        tdDelete.appendChild(iDelete)
        tdUpdate.appendChild(iUpdate)
    
        tr.append(tdDelete, tdUpdate,tdRol, tdNickName, tdEmail, tdPassword)
    
        return tr;
    }

function btnAddUser(e){
    const i = getUsers().length
    const newUser = createUser(inRol.value, inNickName.value, inEmail.value, inPassword.value)
    const tr = createRow(newUser, i)
    tbody.appendChild(tr)
    e.preventDefault()
    alert("Elemento Guardado")

}

function btnUpdateUser(e, i){
    updateUser(i,inRol.value, inNickName.value, inEmail.value, inPassword.value)
    clearTable()
    fillTable()
    e.preventDefault()
    alert("Elemento Actualizado")
    inRol.value = ''
    inNickName.value = ''
    inEmail.value = ''
    inPassword.value = ''
    btnAddUpdate.textContent = 'Agregar'
    btnAddUpdate.onclick = btnAddUser
}
function clearTable(){
    tbody.innerHTML = ''
}
function fillTable(){
    let trs = [];  
    const users = getUsers();
    users.forEach((u, i)=>{
        const tr = createRow(u, i)
        trs.push(tr)
    })
     
    tbody.append(...trs)
   
} 