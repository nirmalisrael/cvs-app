import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-editor',
  templateUrl: './auth-editor.component.html',
  styleUrls: ['./auth-editor.component.css']
})
export class AuthEditorComponent {

  activeTab: string = 'users';

  showUserSide = true;
  showRoleSide = false;
  showAllUsers = false;

  setActiveTab(tab: string) {
    this.activeTab = tab;
    if(this.activeTab === 'users') {
      this.showRoleSide = false;
      this.showUserSide = true;
    } else if(this.activeTab === 'roles') {
      this.showUserSide = false;
      this.showRoleSide = true;
    }
  }

  openAllUsers(){
    this.showAllUsers = true;
  }
  closeAllUsers() {
    this.showAllUsers = false;
  }
}
