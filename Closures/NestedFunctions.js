function f1() {
  console.log("f1 started execution");
  var a = 1;
  var b = 2;

  function f2() {
    console.log("f2 started execution");
    var c = 3;
    var d = 4;
    console.log(`c = ${c}`);
    console.log(`d = ${d}`);
    console.log("f2 terminated execution");
  }

  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  f2();
  console.log("f1 terminated execution");
}
f1();
