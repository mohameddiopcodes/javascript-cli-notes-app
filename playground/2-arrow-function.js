// const square = function(x) {
//   return x * x
// }

//const square = x => x * x

//console.log(square(5))

const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Bourgi', 'Cheikh'],
  printGuestList() {
    console.log('Guest List for', this.name)
    this.guestList.forEach(guest => console.log(guest, 'is attending', this.name))
  },
  printGuestList2: () => {
    console.log('Guest List for', this.name)
  }
}

event.printGuestList()
