var startButton = document.getElementById("start");
const questions = [
  
    { text: 'question1',
        choices: ['choice1','correct','choice3','choice4'],
        answer: 1
    },    
    { text: 'question2',
        choices: ['choice1','choice2','choice3','correct'],
        answer: 3
    },
    { text: 'question3',
        choices: ['choice1','choice2','correct','choice4'],
        answer: 2
    }    

]

for (i = 0; i < (questions.length); i++){
    console.log(questions[i]);
}




document.addEventListener("click", function(event) {

    let time = 75;
    setInterval(function() {
        document.getElementById("time").innerHTML = ('time: ', time);time--;
            if( time == -1){
                document.getElementById("time").innerHTML ='0';
                clearInterval(time = 0);  
            }
    },1000); 
} );