let arr ='AAAADDFFFGGTAAYOOOLKKKKMH';
let arr2=Array.from(arr);
let a=arr2[0];
let s=1;
let str='';
for (let i = 0; i < arr2.length; i++) {
    if(a===arr2[i+1]){
        s++;
    }
    else{
        str=str+(s+arr2[i]);
        s=1;
        a=arr[i+1];
    }
}
// console.log(str);



let str2='';
let b=str;
let b2=Array.from(b);
for (let i = 0; i < b2.length; i++) {
    if(+(b2[i])===1){
        b2[i]='';
    }
    str2=str2+b2[i];
}
console.log(str2);
