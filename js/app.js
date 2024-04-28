var studentName = [
    {name: 'asmaa', score: '85'},
    {name: 'israa', score: '99'},
    {name: 'mariam', score: '98'},
    {name: 'amira', score: '100'},
]

var studentToFind = prompt("Enter a student's name:");

var found = false;
var studenScore;

for (var index = 0; index < studentName.length; index += 1) {

    // console.log(studentName[index]);

    if (studentName[index].name === studentToFind) {
        found = true;
        studenScore = studentName[index].score;

        break; // Exit the loop once the student is found
    }
}

if (found) {
    console.log(studentToFind, " 's score is:", studenScore);
} 

else {
    console.log("studen not found.");
}