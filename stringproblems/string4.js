
// ==== String Problem #4 ====
// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
{"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}

function titlecase(data){
    const {first_name,middle_name,last_name} = data;
    const firstName = first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase();
    const middleName = middle_name ? middle_name.charAt(0).toUpperCase() + middle_name.slice(1).toLowerCase() : '';
    const lastName = last_name.charAt(0).toLowerCase() + last_name.slice(1).toLowerCase();
    fullName = [firstName,middleName,lastName].filter(Boolean).join(' ');
return fullName;
}

module.export = titlecase;

const result = titlecase(data);
console.log(result);

