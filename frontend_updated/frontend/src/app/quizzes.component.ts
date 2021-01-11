import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Component} from '@angular/core'
import {ApiService} from './api.service'


@Component ({
    selector:'quizzes',
    templateUrl:'./quizzes.component.html'
})
export class QuizzesComponent{

   
    quiz:any ={};
    quizzes:any={};

    constructor(public api: ApiService){ }
    
   ngOnInit(){
            console.log("once")
           this.api.getQuizzes().subscribe(res =>{
           this.quizzes=res
       })
   }
    

}