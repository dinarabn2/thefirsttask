function checkSpeed(currentSpeed) {
    let points = (currentSpeed % 70) / 5;
    if (currentSpeed <= 70) {
        return 'OK';
    } if (points > 12) {
        return 'License suspended';
    } else {
        return `points : ${points}`;
    }
    
}
console.log(checkSpeed(80));