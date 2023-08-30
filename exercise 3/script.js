let color = ['white', 'red', 'green']

 // let userColor = prompt('which color you want to show on top')


document.write(`
<h1>Orignal color Array</h1>

<h2>${color[0]}</h2>

<h2>${color[1]}</h2>

<h2>${color[2]}</h2>

`)



// Program for adding color to Beggining of the array


// if (userColor === color[1]) {
//     let selctedColor = color[1]
//     color[0] = selctedColor
//     document.write(`
//     <h2>${color[0]}</h2>
    
//     <h2>${color[1] = 'white'}</h2>
    
//     <h2>${color[2]}</h2>
//     ${color}
//     `)
// } else if (userColor === color[2]) {
//     let selctedColor = color[2]
//     color[0] = selctedColor
//     document.write(`
//     <h2>${color[0]}</h2>
    
//     <h2>${color[1] = 'white'}</h2>
    
//     <h2>${color[2] = 'red'}</h2>

//     `)
// } else {
    
//     document.write(`
// <h2>${color[0]}</h2>

// <h2>${color[1]}</h2>

// <h2>${color[2]}</h2>

// `)
// }


// Program for adding color to End of the array


// if (userColor === color[0]) {
//     let selctedColor = color[0]
//     color[color.length-1] = selctedColor
//     document.write(`
//     <h2>${color[0] = 'red'}</h2>
    
//     <h2>${color[1] = 'green'}</h2>
    
//     <h2>${color[2]}</h2>
//     ${color}
//     `)
// } else if (userColor === color[1]) {
//     let selctedColor = color[1]
//     color[color.length-1] = selctedColor
//     document.write(`
//     <h2>${color[0]}</h2>
    
//     <h2>${color[1] = 'green'}</h2>
    
//     <h2>${color[2] = 'red'}</h2>

//     `)
// } else {
    
//     document.write(`
// <h2>${color[0]}</h2>

// <h2>${color[1]}</h2>

// <h2>${color[2]}</h2>

// `)
// }







//  Adding Two colors on beggining of the array

color.unshift('orange', 'black')


   
document.write(`
<h1>After Adding two more colors to the color Array</h1>

<h2>${color[0]}</h2>

<h2>${color[1]}</h2>

<h2>${color[2]}</h2>

<h2>${color[3]}</h2>

<h2>${color[4]}</h2>

`)


// Deleting the first Color from array

color.shift()
document.write(`
<h1>After Deleting First color from the color Array</h1>    

<h2>${color[0]}</h2>

<h2>${color[1]}</h2>

<h2>${color[2]}</h2>

<h2>${color[3]}</h2>



`)



// Deleting the Last Color from array

color.pop()
document.write(`
<h1>After Removing Last color from the color Array</h1>    

<h2>${color[0]}</h2>

<h2>${color[1]}</h2>

<h2>${color[2]}</h2>


`)


// user adding color in Array
// let userColor2 = prompt('which color you want to Add');

// let userColorIndex = +prompt('where to add color please tell us index Number');



// color[userColorIndex] = userColor2;

// document.write(`
// <h1>User adding own color</h1>

// <h2>${color[0]}</h2>

// <h2>${color[1]}</h2>

// <h2>${color[2]}</h2>


// `)



//  User Removing colors

let userStartingIndex = +prompt('write start index number to deleting colors');

let userDeletingNum = +prompt('how much color you want to delete');


color.splice(userStartingIndex,userDeletingNum);

document.write(`
<h1>User Removing colors</h1>    

<h2>${color[0]?color[0]:'user removed this color'}</h2>

<h2>${color[1]?color[1]:'user removed this color'}</h2>

<h2>${color[2]?color[2]:'user removed this color'}</h2>


`)
