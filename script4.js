let a = ''
let b = ''
let result = ''
let operator = ''
let p = ''

const operators = ['+','-','x','/']
const numbers = ['0','1','2','3','4','5','6','7','8','9','0','.']
const buttons = document.querySelectorAll('#btn-click')

buttons.forEach((bs)=> {
    bs.addEventListener('click',(e)=>
{

//заполняем переменные a, operator, b

if ( e.target.innerText === '.' && a === '' && display.innerText === '0')  //записываем дефолтный ноль с точкой в переменную a без ввода нуля           
{                                                                          //без ввода нуля
    a = '0'
    display.innerText += e.target.innerText                               
    a += e.target.innerText
    console.log('a: '+ a, 'op: ' + operator,'b: '+ b) 
}
else if ( numbers.includes(e.target.innerText) && b === '' && operator === '' )   //записываем дальше целые цифры в переменную а     
{     
    let lastA = a.split('').pop()      
    console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'last: ' + lastA)

        if ( lastA === '.' && e.target.innerText === '.' || a.split('').includes('.') && e.target.innerText === '.')      
        {                                                   //проверяем последний символ и запрещаем вводить несколько точек подряд
            display.innerText = a
            a += ''
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'last: ' + lastA) 
        }
        else 
        {
            a += e.target.innerText                                  
            display.innerText = a
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'last: ' + lastA)  
        }

       


    if (result !== '')                                       //обнуление первого операнда после получения результата
    {                                                        //с помощью кнопки равно, для ввода нового первого операнда
        a = e.target.innerText 
        display.innerText = a
        result = ''
        console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)
    }
    else if ( a === '0' && e.target.innerText === '0')                    //запрещаем безконтрольный ввод нуля 
    {                                                                     //в пустую переменную первыми цифрами  (0002 или 0000)
       display.innerText = '0'
       a = ''
       console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)
    }     
}
else if ( operators.includes(e.target.innerText) && a && !b)    //записываем оператор в переменную оператор
{
    operator = e.target.innerText                                   
    display.innerText = operator
    console.log('a: '+ a, 'op: ' + operator,'b: '+ b)
}
else if (numbers.includes(e.target.innerText) && operator !== '' && a !== '' )     //записываем цифры в переменную б
{   

    let lastB = b.split('').pop()
    console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'last: ' + lastB)

        if (b === '0' && e.target.innerText !== '.')           //убираем ноль если его вводят как первую цифру во 2м операнде (2+03)
        {
            b = ''
            display.innerText = e.target.innerText
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b) 
        }                                                                 //заебал меня уже это ноль
        else if ( b === '0' && e.target.innerText === '.')         //оставляем ноль для дроби второго операнда с первым нулем (2 + 0.5)
        {                                                                  
            display.innerText = '0'
            b = display.innerText
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b)
        }

        if ( lastB === '.' && e.target.innerText === '.' || b.split('').includes('.') && e.target.innerText === '.') 
        {                                                        //проверяем последний символ и запрещаем вводить несколько точек подряд
            display.innerText = b  
            b += ''
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'last: ' + lastB) 
        }
        else 
        {
            b += e.target.innerText 
            display.innerText = b                                                                    
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'last: ' + lastB) 
        }
}







if ( operators.includes(e.target.innerText) && a !== '' && operator !== '' && b !== '')  
{
    let key = e.target.innerText                                                   //кейс для последовательных вычислений без равно.
    console.log('a: '+ a, 'op: ' + operator, 'b: '+ b, 'key: '+ key)              //при повторном вводе оператора он записывается в кей,
                                                                                 //а потом кей становится оператором, а кей обнуляется
    switch(operator)                                                            //для ввода нового оператора
        {
            case'+': 
            result = (+a) + (+b)
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)
            break
    
            case '-':
            result = a - b
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)    
            break
    
            case 'x':
            result = a * b
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)    
            break
    
            case '/':
            result = a / b
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)    
            break    
        }

    display.innerText = result
    operator = key
    a = result
    b = ''
    p = ''
    result = ''
    console.log('a: '+ a, 'op: ' + operator, 'b: '+ b, 'key: '+ key, 'result: ' + result)
}











if ( e.target.innerText === '%' && b !== '')                 //кейс кнопки процента
{
    p = a * b / 100
    display.innerText = '%'
    console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'p: ' + p)   
}
else if ( e.target.innerText === '=' && p !== '')
{
    switch(operator) 
    {
        case'+': 
        result = (+a) + (+p)
        console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'p: ' + p )
        break

        case '-':
        result = a - p
        console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'p: ' + p)    
        break

        case 'x':
        result = a * p
        console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'p: ' + p)    
        break

        case '/':
        result = a / p
        console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result, 'p: ' + p)    
        break    
    }

    if (result % 1 !== result ) 
        {
            result = result.toFixed(5)
        }

    display.innerText = result + `(${p})`
    a = result
    operator = ''
    b = ''
    p = ''
    result = ''  
}







if ( e.target.innerText === '=' && a !== '' && operator !== '' && b !== '')         // кнопка равно
{
        switch(operator) 
        {
            case'+': 
            result = (+a) + (+b)
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)
            break
    
            case '-':
            result = a - b
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)    
            break
    
            case 'x':
            result = a * b
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)    
            break
    
            case '/':
            result = a / b
            console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)    
            break    
        }


    display.innerText = result
    a = result
    operator = ''   
    b = ''
    // result = ''
    console.clear()
    console.log('a: '+ a, 'op: ' + operator,'b: '+ b, 'result: ' + result)
}

})})






//кнопка CLEAR
const clearAll = document.querySelector('#clear')
function clearAllF()
{
    a = ''
    b = ''
    p = ''
    operator = ''
    result = ''
    key = ''
    display.innerText = '0'
    console.clear()
}
clearAll.addEventListener('click', ()=>{clearAllF()})


//кнопка ОТРИЦАНИЯ
const negative = document.querySelector('#negative')
function negativeF()
{
    if ( a !== '' && b === '') 
    {
        a = -Math.abs(a)
        display.innerText = a
    }
    else if ( b!== '' )
    {
        b = -Math.abs(b)
        display.innerText = b
    }
    
}
negative.addEventListener('click', ()=>{negativeF()})