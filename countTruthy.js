function countTruthy() {
    let values = ['Jonh', 45, null, 'a', false, [], 0, true];
    const count = values.reduce((acc, value) => {
        if (value) {
            return acc + 1;
        } else {
            return acc;
        }
    },0)
    console.log(count);
}

countTruthy();