import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chant } from '../chant';
import { ChantService } from '../chant.service'; 
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-chant-start',
  templateUrl: './chant-start.component.html',
  styleUrls: ['./chant-start.component.css']
})
export class ChantStartComponent implements OnInit {

  @Input() private chantSelected: Chant; 

  constructor(private cs: ChantService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }  

  photoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.chantSelected.url);;
  }

  ngOnChanges(){
    console.log(this.chantSelected);
  }

}
