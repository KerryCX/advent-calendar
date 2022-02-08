

const nameField = document.querySelector("#nameField")
const nameAuth = document.querySelector("#nameAuth")
const nameWarn = document.querySelector("#nameWarn")

nameField.addEventListener("keyup", () => {
    validateName(nameField.value);
})

const emailField = document.querySelector("#emailField")
const emailAuth = document.querySelector("#emailAuth")
const emailWarn = document.querySelector("#emailWarn")

emailField.addEventListener("keyup", () => {
  if(emailField.value.length>3){
      validateEmail(emailField.value);
  }
})

const ageField = document.querySelector("#ageField")
const ageAuth = document.querySelector("#ageAuth")
const ageWarn = document.querySelector("#ageWarn")

ageField.addEventListener("keyup", () => {
  if(ageField.value.length>=1)
  {
    validateAge(ageField.value);
  } else {
    ageAuth.innerText = "";
  }
})

const submitField2 = document.querySelector("form")

submitField2.addEventListener("submit", (event) => {
  
  event.preventDefault()
  const validName = validateName(nameField.value)
  const validAge = validateAge(ageField.value)
  const validEmail = validateEmail(emailField.value)

  if(validEmail && validAge && validName) {
    const mainField = document.querySelector("main")
    const listField = document.createElement("ul")
    const node = document.createElement("li")
    const term = (ageField.value > 1 ? "years" : "year")
    console.log(term)
    const info = nameField.value+", with email "+emailField.value+ " and "+ageField.value+ " " +term +" old is added.";
    const textNode = document.createTextNode(info)
    node.appendChild(textNode)
    listField.appendChild(node)    
    mainField.append(listField)
    //clear the values
    nameField.value = ""
    emailField.value = ""
    ageField.value = ""
    nameAuth.innerText = ""
    emailAuth.innerText = ""
    ageAuth.innerText = ""
    return;
  }
})

const validateName = (name) => {
  if (name.length > 0)
  {
    //name should be 1 character or more
    nameWarn.innerText = ""
    nameAuth.innerText = "\u{2713}"
    return (true); 
  } else {
    nameWarn.innerText = "please enter a valid name"
    nameAuth.innerText = ""
    return (false);
  }
}

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) 
  {
    emailAuth.innerText = "\u{2713}"
    emailWarn.innerText= ""
    return (true);
  } else {
    emailWarn.innerText = "please enter correct email address!"
    emailAuth.innerText= ""
    return (false);
  }
};

const validateAge = (age) => {
  if ((age>=120) || (age<=0))
  {
    ageAuth.innerText = ""
    ageWarn.innerText = "please enter a valid age!"
    return (false);
  } else {
    ageAuth.innerText = "\u{2713}"
    ageWarn.innerText = ""
    return (true);
  }
}
