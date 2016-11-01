import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {FORM_DIRECTIVES, Validators} from 'angular2/common';

@Component({
    selector: 'app-puzzle',
    directives:[MATERIAL_DIRECTIVES],
    template: `
    <section class="examples">
    <div layout="column" class="md-inline-form">
        <md-toolbar class="demo-toolbar md-primary">
            <div class="md-toolbar-tools">
              <h3>Game Setup</h3>
              <span flex=""></span>
            </div>
        </md-toolbar>
        <md-content layout-padding>
            <div class="section1">
                  <form name="userForm">
                        <div layout-gt-sm="column">
                            <h4>Enter your name please:</h4>
                                  <md-input-container class="md-block" flex-gt-sm>
                                        <label>Name</label>
                                        <input md-input type="text" #inputName (keyup)="0">
                                  </md-input-container>
                        </div>
                  </form>
            </div>
            <section
                class="section1"
                [ngClass]="{
                    puzzle: true,
                    solved: result
                }"
                [class.hide]="inputName.value === ''">

                    <h2>The Puzzle | {{result ? 'Solved' : 'Not Solved'}}</h2>

                    <p>Welcome <span class="name">{{inputName.value}}</span></p>
                    <br>

                    <form name="puzzleForm">
                        <div layout-gt-sm="row">
                                <md-input-container class="md-block" flex-gt-sm>
                                    <label>Switch 1</label>
                                    <input md-input type="text" #switch1>
                                </md-input-container>
                                <md-input-container class="md-block" flex-gt-sm>
                                    <label>Switch 2</label>
                                    <input md-input type="text" #switch2>
                                </md-input-container>
                                <md-input-container class="md-block" flex-gt-sm>
                                    <label>Switch 3</label>
                                    <input md-input type="text" #switch3>
                                </md-input-container>
                                <md-input-container class="md-block" flex-gt-sm>
                                    <label>Switch 4</label>
                                    <input md-input type="text" #switch4>
                                </md-input-container>
                        </div>
                        <button
                        md-raised-button
                        class="md-accent md-hue-1"
                        (click)="findResult(switch1.value, switch2.value, switch3.value, switch4.value)"
                        >Submit Answer</button>
                    </form>
                    <h2 [hidden]="result != true">Congrats {{inputName.value}}, you solved the puzzle!</h2>
            </section>

        </md-content>
    </div>
    `
})

export class PuzzleComponent{

    switch1Solution: number;
    switch2Solution: number;
    switch3Solution: number;
    switch4Solution: number;
    result: boolean;

    constructor(){
        this.result = false;
        this.switch1Solution = 1;
        this.switch2Solution = 1;
        this.switch3Solution = 1;
        this.switch4Solution = 1;
    }
    findResult(switch1: string, switch2: string, switch3: string, switch4: string): void{
        if( +switch1 == this.switch1Solution &&
            +switch2 == this.switch2Solution &&
            +switch3 == this.switch3Solution &&
            +switch4 == this.switch4Solution){
            this.result = true;
        }
    }
}