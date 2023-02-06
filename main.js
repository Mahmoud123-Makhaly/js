// class car{
//     name="bmw";
//     printColor=(name)=>{
//         console.log(name)
//     }
// };
// let car1 = new car();
// console.log(car1.printColor("skoda"))



class red {
    printRed = ()=>{
        console.log("Helaaaaddsssslo freom red")
    }
}
class car extends red{
    name="bmw";
    printCar=()=>{
        console.log(this.name)
    }
}
let car1 = new car();
console.log(car1.printRed())