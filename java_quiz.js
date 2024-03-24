"use strict"
        
        
function quizScore(){
    var checkClient = prompt('Do you want to answer the quiz? Answer yes or no', 'yes')
if(checkClient=='yes'){
    var presidentsName = ['Alhaji Shehu Shagari', 'Major General Muhammadu Buhari', 'General Ibrahim Babangida', 'General Sani Abacha', 'Chief Olusegun Obasanjo',
     'CAlhaji Umaru Musa Yar-Adua', 'Dr. Goodluck Jonathan', 'Bola Tinubu', 'Dr. Nnamdi Azikiwe', 'General Murtala Mohamme' ];
     var presidentBirthDate = [1925,1942,1941,1943,1937,1951,1957,1952,1904,1938];
     var quizMark = 0;
    var x = 0;
    for(x=0;x<9;x++){
        var inputValue = prompt('What is the date of birth of '+presidentsName[x]+' ?:', '0')
 
    var newUserInput = parseInt(inputValue);
     if(!newUserInput){
        alert('Sorry, the input must be a number. Start again');
        return;
     }else if(newUserInput==presidentBirthDate[x]){
        quizMark=quizMark+10;

     }else{
        quizMark=quizMark+0;
     }
    }
        


}else{
alert('Goodbye!!!');
 return;
}
document.getElementById('showScore').style.display = 'block'
document.getElementById('showScore').innerHTML = 'Congratulations! You socored a total of '+quizMark+' Marks';
}
document.getElementById('showScore').style.display = 'none'





