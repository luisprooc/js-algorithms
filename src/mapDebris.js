function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    let newArr = arr.map(item => {
      return {name: item.name, orbitalPeriod: Math.round(Math.sqrt(Math.pow(earthRadius + item.avgAlt,3)/GM) * a)}
    });
    return newArr;
}
  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));