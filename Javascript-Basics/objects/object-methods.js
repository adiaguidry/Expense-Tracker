//functions attached to an object is a method

let restaurant = {
    name: "Bomb Sushi",
    guestCapacity: 59,
    guestCount: 4,
    checkAvailability: function (partySize) {
        let availableSeats = this.guestCapacity - this.guestCount;
        // this returns true if there is space
        return availableSeats>= partySize
        
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize    
    }
}

console.log(restaurant.checkAvailability(59))
restaurant.removeParty(4)
console.log(restaurant.checkAvailability(59))
