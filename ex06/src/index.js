let firstName = (firstName) => {
    return firstName.toUpperCase();
  };
  let lastName = (lastName) => {
    return lastName.toLowerCase();
  };
  console.log(firstName("Emina"));
  console.log(lastName("Delic"));
  
  exports.firstName = firstName;
  exports.lastName = lastName;