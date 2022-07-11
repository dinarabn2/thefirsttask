let marks = [80, 80, 50, 55];
function calculateGrade(marks) {
    let average = averange(marks);
    if (average >= 90) {
        return 'A';
    }
    if (average < 90 && average >= 80) {
        return 'B';
    }
    if (average < 80 && average >= 70) {
        return 'C';
    }
    if (average < 70 && average >= 60 ) {
        return 'D'; 
    }
    else {
        return 'F';
    }
}

function averange(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++ ) {
        sum += marks[i];
    }

    return sum / marks.length;
}

console.log(calculateGrade(marks));



