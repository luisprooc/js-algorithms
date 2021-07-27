function checkCid(cid,key){
  for(let i in cid){
    if(cid[i][0] === key){
      return cid[i];
    }
  }
}

function help(cid,key,rest,value,change){
const actualCid = checkCid(cid,key);
let increment = Number();

while(rest >= 0 && actualCid[1] >= value && rest >= value){
  increment += value;
  actualCid[1] -= value;
  rest -= value;
}

if(key === "PENNY"){
  increment += 0.01;
  increment = increment.toFixed(2) * 1
}

change.push([key,increment]);
return [cid,rest,change]; 
}

function closeRegister(cid,change){
for(let i in change){
  for(let j in cid){
    if(change[i][0] === cid[j][0]){
      delete cid[j];
    }
  }
}
return cid;
}

function checkCashRegister(price, cash, cid) {
  let rest = cash - price;
  let change = [];
  while(rest >= 0.01){
      if(rest >= 100 && checkCid(cid,"ONE HUNDRED")[1]){
        [cid,rest,change] = help(cid,"ONE HUNDRED",rest,100,change);
      }
       else if(rest >= 20 && checkCid(cid,"TWENTY")[1]){
        [cid,rest,change] = help(cid,"TWENTY",rest,20,change);
      }

       else if(rest >= 10 && checkCid(cid,"TEN")[1]){
        [cid,rest,change] = help(cid,"TEN",rest,10,change);
      }

       else if(rest >= 5 && checkCid(cid,"FIVE")[1]){
        [cid,rest,change] = help(cid,"FIVE",rest,5,change);
      }

      else if(rest >= 1 && checkCid(cid,"ONE")[1]){
        [cid,rest,change] = help(cid,"ONE",rest,1,change);
      }

      else if(rest >= 0.25 && checkCid(cid,"QUARTER")[1]){
        [cid,rest,change] = help(cid,"QUARTER",rest,0.25,change);
      }

      else if(rest >= 0.1 && checkCid(cid,"DIME")[1]){
        [cid,rest,change] = help(cid,"DIME",rest,0.1,change);
      }

      else if(rest >= 0.05 && checkCid(cid,"NICKEL")[1]){
        [cid,rest,change] = help(cid,"NICKEL",rest,0.05,change);
      }

      else if(rest >= 0.01 && checkCid(cid,"PENNY")[1]){
        [cid,rest,change] = help(cid,"PENNY",rest,0.01,change);
      }

      else{
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
  }
  const status = cid.some(item => item[1] >= 0.01);
  if(status){
    return {status: "OPEN", change: change}
  }

  cid = closeRegister(cid,change);
  change.push(...cid);
  change = change.filter(item => item != undefined)
  return {status: "CLOSED", change: change}

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
