


const getNameByEmail = (email) => {
   
    if (!email || !email.includes('@')) {
      return 'Invalid email format';
    }
  
   
    const namePart = email.split('@')[0];
  
    return toProperCase(namePart); 
  };
  
  const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };
  
  console.log(getNameByEmail("harshkashyap@gmail.com")); 
console.log(toProperCase("harsh"));                      
  