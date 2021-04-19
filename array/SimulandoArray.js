const quasearray = {0: 'Cesar', 2:'Luan', 3:'Luzinara'}
console.log(quasearray)

Object.defineProperty(quasearray, 'toString', {
    value: function(){return Object.values(this)},
    enumarable: false
})

console.log(quasearray[0])
const meuarray = ['Cesar', 'Luan', 'Luzinara']
console.log(quasearray.toString(), meuarray)