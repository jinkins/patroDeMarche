import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-admin-annonce-edit',
  templateUrl: './admin-annonce-edit.component.html'
})
export class AdminAnnonceEditComponent implements OnInit {

  private id: string;
  private subscription: Subscription;
  private modeEdit: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
          if (this.id === 'new') {
            this.modeEdit = false
          }
          else {
            this.modeEdit = true;
          }
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
