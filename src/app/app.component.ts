import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./user.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public loaded: boolean = false;
  public user$ = this.uS.getUser();
  constructor(private uS: UserService) {}
  ngOnInit() {}

}
