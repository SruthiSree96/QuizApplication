import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import {QuestionComponent} from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {QuestionsComponent} from './questions.component';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavComponent} from './nav.component';
import {QuizComponent} from './quiz.component';
import {QuizzesComponent} from './quizzes.component';
import {RegisterComponent} from './register.component';
import {AuthService} from './auth.service';

import {PlayComponent} from './play.component';
import {PlayQuizComponent} from './playQuiz.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {FinishedComponent} from './finished.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'question/:quizId', component: QuestionComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'quiz', component: QuizComponent},
  
 {path: 'play', component: PlayComponent},
 {path: 'playQuiz/:quizId', component: PlayQuizComponent}

]


@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent,HomeComponent, NavComponent, QuizComponent, QuizzesComponent, RegisterComponent,
    PlayComponent, PlayQuizComponent, FinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
    
   
   
   

  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule { }
