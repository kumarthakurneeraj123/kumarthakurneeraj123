function person(firstName, lastName,rollNo,sex ,dob){
this.firstName = firstName;
this.lastName= lastName;
this.rollNo = rollNo;
this.sex = sex;
this.dob =  new Date(dob);
this.getDateOfBirth=function(){
    return this.dob.getFullYear();
}
this.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
}
const person1 = new person('Niraj','Thakur',21,'Male','13-11-1997');
const person2 = new person('Manoj','Thakur',22,'Male','15-10-1990');

if(person1.getDateOfBirth() < person2.getDateOfBirth()){
    console.log(person1.getFullName());
}
else{
    console.log(person2.getFullName());
}
function ageCalculate(minAge){
        if(this.dob>=minAge)
            return 'eligible';
        else
            return 'ineligible';
}
console.log(ageCalculate('10-06-1999'));
