let movie = {
    title: 'Whiplash',
    releaseYeat: 2013,
    director: 'Damien Chazelle'
}

function showProperties(movie) {

    for (let key in movie) {
        if (typeof movie[key] === 'string') {
            console.log(`${key}: ${movie[key]}`);
        }
    }
}
showProperties(movie);