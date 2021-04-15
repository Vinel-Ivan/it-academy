function fib (n) {
    let prev = 0;
    let next = 1;
    for(let i = 0; i < n; i++){
      let temp = next;
      next = prev + next;
      prev = temp;
    }
    return console.log(prev);
  }

  fib(20)