// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

function checkObject(arr) {

const result = Array.isArray(arr);

    if(result) {

        console.log(`[${arr}] is an array.`);

    }else {

        console.log(`${arr} is not an array.`);

    }

}

checkObject(a);

checkObject(b);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var b = [];
for(var i=0; i < a.length; i++){
    b.push(a[i]*2);
}
console.log(b);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var colors = ["Red", "Green", "White", "Black"];

console.log(colors[0]+ ' ' + colors[1]+ ' ' + colors[2]+ ' ' + colors[3])
console.log(colors[0]+ '+' + colors[1]+ '+' + colors[2]+ '+' + colors[3])
console.log(colors[0]+ ',' + colors[1]+ ',' + colors[2]+ ',' + colors[3])




// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var a = [5, 1, 8, 10, 4];

console.log(a.sort(function(a, b){return b - a}));





// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var b = 1;
var c = 0;
var item;
for (var i=0; i<a.length; i++)
{
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 c++;
                if (b<c)
                {
                  b=c;
                  item = a[i];
                }
        }
        c=0;
}
console.log(`${item}`) ;
