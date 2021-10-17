const users =[
    new User('adiministrador', 'juan', 'juan@gmail.com', '123'),
    new User('vendedor', 'jhon', 'jhon@gmail.com', 'abc'),
    new User('vendedor', 'toby', 'toby@gmail.com', 'b3d')
]

function getUsers(){
    return users
}

function createUser(rol,nickname, email, password){
    const newUser = new User(rol,nickname, email, password)
    users.push(newUser)
    return newUser
}

function updateUser(i, newRol, newNickname, newEmail, newPassword){
    users[i].rol = newRol
    users[i].nickname = newNickname
    users[i].email = newEmail
    users[i].password = newPassword
}

function deleteUser(i){
    users.splice(i, 1)
}
