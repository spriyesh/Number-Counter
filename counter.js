

var dispc=document.querySelector('.curent');
var dispn=document.querySelector('.next');
var button=document.getElementById("counter-button");


button.addEventListener('click',function(){
    var countervalue=parseInt(document.getElementById("ip-val").value);
    countervalue+=1;
    console.log(countervalue);
    let i=1;
    
    function counter(){
        dispn.innerText=i;
        if(i==countervalue)
        {
            clearInterval(id);
            return;
        }else{
            dispn.classList.add('animate');
            setTimeout(function(){
                dispn.classList.remove('animate');
                
            },950);
            i++;
        }
        
        
        
        
    }
    var id=setInterval(counter,1000);
   
    
    
    


});