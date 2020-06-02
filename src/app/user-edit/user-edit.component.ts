import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userForm;
  currenUserIndex;
  constructor(private Form: FormBuilder, private activatedRoute: ActivatedRoute, private userDataService: UserDataService,private router:Router) {
    this.userForm = this.Form.group({
      name: this.Form.control(''),
      email: this.Form.control(''),
      phone: this.Form.control(''),
      hobby: this.Form.control(''),
    });
    this.currenUserIndex = this.activatedRoute.snapshot.params.id;
    let userData = this.userDataService.retriveDatabyid(this.currenUserIndex)
    console.log(userData);
    this.userForm.setValue(userData);
  }

  ngOnInit(): void {
  }
  sendData() {
    this.userDataService.updateData(this.currenUserIndex, this.userForm.value);
    this.router.navigate(['/user-list'])
  }
}
