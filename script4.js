//===============function declaration

// function sumNum(a, b){     //a b - параметры ф-ии
//     console.log(a + b);    
// }

// sumNum(a, b)               // 4 5 аргументы ф-ии

// function sumNum2(a, b = 1){     
//     console.log(a + b);    
// }

// sumNum(4, 5)  
// sumNum(8, 6)  
// sumNum(3, 5)  


//1task
// let letter = 'a'
// function sayError(){
//     alert('Some error occured!')
// }

// sayError()

//2task

// function showError (x){
//     alert('Error ${x} occured!')
// }
// showError('out of memory?')

//3task
// function show5Blocks(n) {
//     for(i=1;i<=n;i++)
//         document.write("<h2> Header "+ i +"<h2>")
// }
//     show5Blocks(10);   


//4task
// function fakeBin(x){
//     let array = x.split('')         //разбивает строку на массив
//     // console.log(array);
//     for(i = 0; i<array.lenght ; i++){
//         if(array[i]<5){
//             array[i]='0'
//         }else{

//             array[i]='1'
//         }
        
//     }        
//     return array.join('') 
//              //разбивает массив на строку    
// }
// console.log(fakeBin('162835'))

// function fakeBin(x){
//     let array = x.split('') //разбивает строку на массив
    
//     for( i = 0 ; i<array.length ; i++){
//         if(array[i]<5){
//             array[i] = '0'
//         }else{
//             array[i] = '1'
//         }
//     }
//     return array.join('162385')  //разбивает массив на  строку 
// }


//Локальные переменные
// function name1(params) {
//     let message = 'hello'
//     console.log(message);
// }
// name1()
// console.log(message);

//Глобальные переменные(внешние) 
// let message = 'hello' 
// function name1(params) {
//     let message = 'hi'
//     console.log(message)
// }
// console.log(message);
// name1()

//Параметры (переменные), аргументы функции
// function sumNum(a,b) {        //a b параметры функции

// }
// console.log(a+b);


// function budget(доход, расход) {        //a b параметры функции

// }
// budget(250000,15000)                     //4 5 аргументы функции
// console.log(доход, расход);

// Return Возврат значения

// function sumNum(a, b){     
//     a + b    
// }

// console.log(sumNum(4, 5))           //undefined

// function sumNum(a, b){     
//    return a + b    
// }

// console.log(sumNum(4, 5)) 


//===============function EXPRESSION


// func1()
// let func = function(){              //function EXPRESSION
//     console.log(123)
// }
// func()

// func1()
// function func1(){
//     console.log(456)
// }


//======Стрелочные функции========
// let sum = (a, b) => {
//     return a+b
// }
// console.log(sum(2,3))



// let sum2 = (a, b) => a+b   //неявный возврат

// console.log(sum(2,3))



// let sum = a => alert(123)

// console.log(sum3())

