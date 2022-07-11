let address = {
    street: 'Kunayeva',
    number: 21,
    city: 'Astana',
    zipCode: '010000',

    showAddress() {
        console.log(this.city + ', ' + this.street + ' ' + this.number + ', ' + this.zipCode);
    }
}

let add = address.showAddress();