import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'demo-store';

  items = ['luis', 'felipe', 'antonio'];

  objeto = {};

  power = 10;

  addItem(){
    this.items.push('nuevo item');
  }
  deleteItem(index: number){
    this.items.splice(index, 1);
  }

}
