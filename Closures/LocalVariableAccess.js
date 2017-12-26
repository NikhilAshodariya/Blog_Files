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

  f2();
  console.log(`f1 printing a = ${a}`);
  console.log(`f1 printing b = ${b}`);
  console.log("f1 terminated execution");
}
f1();
