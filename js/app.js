const ex = document.querySelector('.ex');
const inpt = document.querySelector('.inpt');
const btnOk = document.querySelector('.ok');
const btnStart = document.querySelector('.start');
const btnNxt= document.querySelector('.nxt');
const timer = document.querySelector('.timer');
const answer = document.querySelector('.answer');
const record = document.querySelector('.record');
let count;
let interval;
const words={
    easy :['left', 'hello', 'cool', 'moon', 'rain', 'green', 'good', 'frog', 'book', 'rain', 'rest', 'five', 'lime', 'hero', 'gold'],
    medium:['rabbit', 'black', 'floor', 'tomato', 'plate', 'water', 'apple', 'music', 'tower', 'window', 'pear', 'alone'],
    hard:['exelent', 'reverse', 'different', 'keyboard', 'conclusion', 'elephant', 'terminal', 'weather', 'yellow']
};
const {easy, medium, hard}=words;
let val;
let level= document.querySelector('.level');
let levelCount=1;
let innerCount;
let inptValue;
let recordCount=0;
let count2;
let countR =0;
const description = document.querySelector('.description');
const btnColors = ['#DD4E42', '#FECE47', '#498AF4', '#169F5C', '#DD4E42', '#FECE47', '#498AF4', '#169F5C'];

btnStart.addEventListener('click', function(e){
    timer.innerHTML='';
    answer.innerHTML ='';
    btnOk.style.display='block';
    description.style.display='none';
    setTimeout(()=>{
        ex.innerHTML='';

    },1000)
    levelCount=1;

    e.preventDefault();
    btnStart.style.display='none'
    innerCount = `Level :1`;
    count=5;
    val= 'go';
    ex.innerHTML= val;
    level.style.display='block'
    level.innerHTML=innerCount;

    interval= setInterval(()=>{
        count-=1
        count2 = count;
        
        btnOk.innerHTML=count2;
        btnOk.style.backgroundColor=btnColors[count2];
        if(count<0){
            timer.innerHTML=`Time is over :(`;
            ex.innerHTML='';
            btnStart.style.display='block';
            btnOk.style.display='none';
            clearInterval(interval);
        }
    },1000)

})

btnOk.addEventListener('click', function(e){
    e.preventDefault();
    btnNxt.style.display='block';
    this.style.display='none';
    level.style.display='none';
    if(inpt.value.split('').reverse().join('')=== val){
        inptValue = inpt.value.split('').join('');
        
        answer.innerHTML = `${inptValue}`;

        setTimeout(()=>{
            timer.innerHTML=`Bull's eye!  Answer : `;
            answer.innerHTML= `${inptValue.split('').reverse().join('')}`;
          
        },600)

        clearInterval(interval);
        count =0;
        ex.innerHTML='';
        btnStart.style.display='none';
        btnNxt.style.display='inline-block';
        
        innerCount = levelCount+=1;
        level.innerHTML=`Level : ${innerCount}`;
        recordCount=innerCount-1;
        inpt.value='';
 
    }else{
        btnNxt.style.display='none';
        btnStart.style.display='inline-block';
        inptValue = inpt.value.split('').reverse().join('');
        timer.innerHTML=`Game Over! Answer : ${inptValue}`
        inpt.value='';
        record.style.display='block';
        
        record.innerHTML=`Your record : ${countR}`
        if(recordCount>countR){
            countR=recordCount;
            record.innerHTML=`Your record : Level ${countR}`

        }
    

        
        clearInterval(interval);
    } 

})
btnNxt.addEventListener('click', function(e){
    e.preventDefault();
    answer.innerHTML ='';
    timer.innerHTML='';
    inpt.value='';
    this.style.display='none';
    btnOk.style.display='block';
    level.style.display='block';
    setTimeout(()=>{
        ex.innerHTML='';
    
    },1000)

    if( innerCount < 4){
        val= easy[Math.floor(Math.random()*easy.length)]
        ex.innerHTML= val;
        easy.forEach(el=>{
            count= Math.floor(el.length + (el.length/2)) ;
            btnOk.innerHTML=count;
            return count;
        })
    }
     if(innerCount>3 && innerCount < 7){
        val= medium[Math.floor(Math.random()*medium.length)]
        ex.innerHTML= val;
        medium.forEach(el=>{
            count= Math.floor(el.length + (el.length/2));
            btnOk.innerHTML=count;
            return count;
        })
        //test
    
    }
    if(innerCount >= 7){
        val= hard[Math.floor(Math.random()*hard.length)]
        ex.innerHTML= val;
        hard.forEach(el=>{
            count= Math.floor(el.length + (el.length/2)-1);
            btnOk.innerHTML=count;
            return count;
        })
    }
     interval= setInterval(()=>{
       
        timer.innerHTML='';
        count-=1
        count2 = count;
        btnOk.innerHTML=count2;
        if(count2 ===7){
            ex.innerHTML='';
        }
        
        btnOk.style.backgroundColor=btnColors[count2];
        
        if(count<0){
            ex.innerHTML='';
            btnNxt.style.display='none';
            btnStart.style.display='block';
            btnOk.style.display='none';
            timer.innerHTML=`Time is over :(`;
            inpt.value='';

            record.style.display='block'
            record.innerHTML=`Your record : ${countR}`
        if(recordCount>countR){
            countR=recordCount;
            record.innerHTML=`Your record : Level ${countR}`

        }
    
          
            clearInterval(interval);
        }
    },1000)

})
