import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  userForm;
  constructor(private Form: FormBuilder,private userDataService:UserDataService, private router:Router) {
    this.userForm = this.Form.group({
      name: this.Form.control(''),
      email: this.Form.control(''),
      phone: this.Form.control(''),
      hobby: this.Form.control(''),
    });
  }

  ngOnInit(): void {}
  sendData(){
    console.log(this.userForm.value)
    this.userDataService.storeData(this.userForm.value)
    this.router.navigate(["/user-list"])
  }
}
