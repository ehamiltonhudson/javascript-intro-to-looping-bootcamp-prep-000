function forLoop(array) {
  for ( let i = 0; i < 25; i++) {
      if (i === 1) {
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done'
}

function doWhileLoop(array) {
  var i = array.length
  function incrementVariable() {
  i = i - 1;
}

do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 0);
return array;
}
