import { Injectable } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
userData =[];
  constructor() { }
  storeData(userData: any){
    this.userData.push(userData)
  }


  updateData(userIndex,userData){
    this.userData[userIndex]= userData;
  }

  retriveData(){
    return this.userData;
  }
  retriveDatabyid(userIndex){
    return this.userData[userIndex];
  }
  deleteData(userIndex){
    this.userData.splice(userIndex,1)
  }
}
