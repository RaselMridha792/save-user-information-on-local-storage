const getUserInfo = () => {
    const email = document.getElementById('user-email');
    const userName = document.getElementById('user-name');
    const password = document.getElementById('password');
  
    // Check if any field is empty
    if (!email.value || !userName.value || !password.value) {
      alert('Please fill up all required items');
    } else {
      const userEmail = email.value;
      const userNameValue = userName.value;
      const userPassword = password.value;
      email.value = "";
      userName.value = "";
      password.value = "";
      displayInformation(userEmail, userNameValue, userPassword );
      saveInfoInLocalStorage(userEmail, userNameValue, userPassword );

    }
  }


const displayInformation = ( name, email, password) =>{
    const information = document.getElementById('user-info');
    const li = document.createElement('li');
    li.innerText = `
        your user name is: ${name}
        your email name is: ${email}
        your password name is: ${password}
    `;
    information.appendChild(li);
}

// get data from local storage 

const getInfoFromLocalStorage = () =>{
    let info = [];
    const storedInfo = localStorage.getItem('info');
    if(storedInfo){
        info = JSON.parse(storedInfo);
    }
    return info;
}


// save data from input into local storage 

const saveInfoInLocalStorage = (email, name, password) =>{
    const info = getInfoFromLocalStorage();
    info.push({name: name,
        email: email,
        password: password})
    const infoStringified = JSON.stringify(info);
    localStorage.setItem('info', infoStringified);

}

const displayInfoFromLocalStorage = () => {
    const info = getInfoFromLocalStorage();
    displayInformation(info[0].name, info[0].email, info[0].password);
}

displayInfoFromLocalStorage()