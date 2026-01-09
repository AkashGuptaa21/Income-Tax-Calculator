const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{

    e.preventDefault() 
      
     const income=document.querySelector('#income')
     const amount = parseInt(income.value) //input was string so made it integer
     
     const result = document.querySelector('h2')
     
    let totaltax=0 
 
    if(amount<=1200000){
        totaltax=0
    } 
    else if(amount<=1600000){
        totaltax=(amount-1200000)*0.15
    }  
    else if(amount<=2000000){
        totaltax=(amount-1600000)*0.20 + 60000   // 4 lakh * 15% = 60 thousand 
    }  
    else if(amount<=2400000){
        totaltax=(amount-2000000)*0.25 + 60000 + 80000  //4 lakh * 20% = 80 thousand 
    }   
    else{
        totaltax=(amount-2400000)*0.30 + 60000 + 80000 + 100000 //4lakh * 25% = 1 lakh
    }

    result.textContent = `Total Tax: ${totaltax}`

    form.reset()
       
})





















































