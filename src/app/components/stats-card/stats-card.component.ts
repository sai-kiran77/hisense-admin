import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-stats-card",
  templateUrl: "./stats-card.component.html",
  styleUrls: ["./stats-card.component.scss"],
})
export class StatsCardComponent {
  @Input() heading: any;
  @Input() headerType: any;
  @Input() cardIcon: any;
  @Input() value: any;
  @Input() link: any;
  @Input() privileges: any;

  // get noAccess(){
  //     return this.privileges && this.privileges.allowed !== 'y'
  // }

  constructor() {}

  // openSubscriptionModal(event) {
  //   if(!this.noAccess){
  //     return;
  //   }
  //   event.stopPropagation();
  //   this.dialog.open(SubscriptionPlanModalComponent, {
  //     width: "80vw",
  //     panelClass: "switcher-panel",
  //     data: { recommendedPlan: this.privileges.allowed },
  //   });
  // }
}
