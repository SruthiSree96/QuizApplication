import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Component} from '@angular/core'
import {ApiService} from './api.service'
import {ActivatedRoute} from '@angular/router'


@Component ({
    selector:'questions',
    templateUrl:'./questions.component.html'
})
export class QuestionsComponent{

   
    question:any ={};
    questions:any={};

    constructor(public api: ApiService, public route: ActivatedRoute){ }
    
   ngOnInit(){
            //console.log("once")
         var quizId = this.route.snapshot.paramMap.get('quizId')
           this.api.getQuestions(quizId).subscribe(res =>{
           this.questions=res
       })
   }
    

}