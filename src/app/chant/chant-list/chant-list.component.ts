import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Chant } from '../chant';
import { ChantService } from '../chant.service';

@Component({
  selector: 'app-chant-list',
  templateUrl: './chant-list.component.html',
  styleUrls: ['./chant-list.component.css']
})
export class ChantListComponent implements OnInit {

  @Output() chantChanged: EventEmitter<Chant> = new EventEmitter<Chant>(); 
  private chants: Chant[];
  constructor(private cs: ChantService) { }

  ngOnInit() {
    this.cs.getChants().subscribe(
      (data) => this.chants = data as Chant[]
    )
  }

  onSelect(chant: Chant){
    this.chantChanged.emit(chant);
  }
}
