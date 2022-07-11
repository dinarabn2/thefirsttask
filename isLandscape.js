let width = 1920;
let height = 1080;

function isLandscape(width, height) {
    if (width > height) {
        return true;
    } else {
        return false;
    }
}
console.log(isLandscape(width, height));
