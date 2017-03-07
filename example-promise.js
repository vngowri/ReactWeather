function addPromise(num1, num2) {
  return new Promise( function(resolve, reject) {
    if ( typeof num1 === 'number' && typeof num2 === 'number') {
      resolve(num1+num2);
    } else {
      reject('Num1 & num2 needs to be numbers');
    }
  });
}

addPromise(1,2).then(function(sum) {
  console.log('addsuccess', sum);
}, function err(errMsg) {
  console.log('error', errMsg);
});

addPromise(2).then(function(sum) {
  console.log('this should not show', sum);
}, function err(errMsg) {
  console.log('this should showup ', errMsg);
});
