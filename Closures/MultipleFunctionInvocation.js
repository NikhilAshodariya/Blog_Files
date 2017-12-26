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

  function f3() {
    console.log("f3 started execution");
    var e = 3;
    var f = 4;
    console.log(`f3 printing a = ${a}`);
    console.log(`f3 printing b = ${b}`);
    console.log(`f3 printing e = ${e}`);
    console.log(`f3 printing f = ${f}`);
    console.log("f3 terminated execution");
    a++;
    b++;
  }
  console.log(`f1 printing a = ${a}`);
  console.log(`f1 printing b = ${b}`);
  console.log("f1 terminated execution");
  counter++;
  p2[counter] = f2;
  p3[counter] = f3;
}

var p2 = [];
var p3 = [];
var counter = -1;

f1(); // calling function f1 once an creating closures and functors
f1(); // calling function f1 once an creating closures and functors again
console.log("-------First Object invocation-------");
p2[0]();
p2[0]();
p3[0]();
console.log("-------Second Object invocation-------");
p2[1]();
p3[1]();

/*
Output:
f1 started execution
f1 printing a = 1
f1 printing b = 2
f1 terminated execution
f1 started execution
f1 printing a = 1
f1 printing b = 2
f1 terminated execution
-------First Object invocation-------
f2 started execution
f2 printing a = 1
f2 printing b = 2
f2 printing c = 3
f2 printing d = 4
f2 terminated execution
f2 started execution
f2 printing a = 2
f2 printing b = 3
f2 printing c = 3
f2 printing d = 4
f2 terminated execution
f3 started execution
f3 printing a = 3
f3 printing b = 4
f3 printing e = 3
f3 printing f = 4
f3 terminated execution
-------Second Object invocation-------
f2 started execution
f2 printing a = 1
f2 printing b = 2
f2 printing c = 3
f2 printing d = 4
f2 terminated execution
f3 started execution
f3 printing a = 2
f3 printing b = 3
f3 printing e = 3
f3 printing f = 4
f3 terminated execution
*/
