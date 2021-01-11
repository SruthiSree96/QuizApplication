import {Component} from '@angular/core'
import {ApiService} from './api.service'
import {ActivatedRoute} from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FinishedComponent} from './finished.component'

@Component ({
    
    templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent{

     questions:any;
     quizId:any

     constructor(public api: ApiService, public route: ActivatedRoute, public dialog:MatDialog){ }

    ngOnInit(){
        //console.log("once")
        this.quizId = this.route.snapshot.paramMap.get('quizId')
       this.api.getQuestions(this.quizId).subscribe(res =>{
       this.questions=res
       
       this.questions.forEach( (q: { answers: any[]; correctAnswer: any; answer1: any; answer2: any; answer3: any; })=> {
           q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3 ]
           shuffle(q.answers)
       } );
   })
}

finish() {
    var correct = 0;
    this.questions.forEach((q: { correctAnswer: any; selectedAnswer: any; }) => {
        if (q.correctAnswer == q.selectedAnswer)
            correct++
    });
    let dialogRef = this.dialog.open(FinishedComponent, {
       
        data: {correct, total: this.questions.length}
      });
    console.log(correct)
}
   
step = 0;

setStep(index: number) {
  this.step = index;
}

nextStep() {
  this.step++;
}

prevStep() {
  this.step--;
}
}
function shuffle(a:any) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}





