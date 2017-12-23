var a = [50,48,21,845,41];


//For in loop
for(v in a){
  console.log(v);
}

/*
output:
0
1
2
3
4
*/

// for of loop
for(v of a){
  console.log(v);
}

/*
output:
50
48
21
845
41
*/

//normal for loop
for(i = 0;i<a.length;i++){
  console.log(a[i]);
}
/*
output:
50
48
21
845
41
*/
