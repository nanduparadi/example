import {Component} from '@angular/core';

/**
 * @title Configurable checkbox
 */
@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: 'checkbox-configurable-example.html',
  styleUrls: ['checkbox-configurable-example.css'],
})
export class CheckboxConfigurableExample {
  pizzaIng : any;
  selectAll = false;

  constructor(){
    this.pizzaIng=[
      {name : "Pepperoni", checked : false},
      {name : "Sasuage", checked : true},
      {name : "Mushrooms", checked : false}
    ];
  }

  updateCheck(){
    console.log(this.selectAll);
    if(this.selectAll === true){
      this.pizzaIng.map((pizza)=>{
        pizza.checked=true;
      });
      
    }else {
      this.pizzaIng.map((pizza)=>{
        pizza.checked=false;
      });
    }
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */