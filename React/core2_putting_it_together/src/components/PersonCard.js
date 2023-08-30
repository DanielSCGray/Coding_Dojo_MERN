import {useState} from 'react';



const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor} = props;

    const [myAge, addYear] = useState(age);

    const handleClick = () => {
        addYear(myAge +1);
    }

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {myAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday Button for {firstName} {lastName}</button>

        </div>



    )
}
export default PersonCard;

// function typist(nestedArr){
//     console.log('test')
//     let output = '';
//     nestedArr.forEach(element => {
//         output += `\n<PersonCard firstName={'${element[0]}'} lastname={'${element[1]}'} age={${element[2]}} hairColor={'${element[3]}'} />\n`
        
//     });
//     console.log(output)
// }
// let personInfo = [
//     ['Jane', 'Doe', 45, 'Black'],
//     ['John', 'Smith', 88, 'Brown'],
//     ['Millard', 'Fillmore', 50, 'Brown'],
//     ['Maria', 'Smith', 62, 'Brown'],
// ]
// typist(personInfo)