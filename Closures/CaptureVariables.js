function f1() {
  console.log("f1 started execution");
  var a = 1;
  var b = 2;

  function f2() {
    console.log("f2 started execution");
    var c = 3;
    var d = 4;
    console.log(`f2 printing a = ${a}`);
    console.log(`f2 printing b = ${b}`);
    console.log(`f2 printing c = ${c}`);
    console.log(`f2 printing d = ${d}`);
    console.log("f2 terminated execution");
    a++;
    b++;
  }
  console.log(`f1 printing a = ${a}`);
  console.log(`f1 printing b = ${b}`);
  console.log("f1 terminated execution");
  return f2;
}
var f = f1();
f();
f();
f();
