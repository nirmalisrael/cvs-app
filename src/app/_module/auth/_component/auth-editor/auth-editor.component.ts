import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';
import { Role } from 'src/app/_module/auth/_dto/role';
import { User } from 'src/app/_module/auth/_dto/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth-editor',
  templateUrl: './auth-editor.component.html',
  styleUrls: ['./auth-editor.component.css']
})
export class AuthEditorComponent {

  userRequest: User = new User;
  activeTab: string = 'users';
  username: string = '';
  roleName: string = '';
  
  role: Role = new Role;
      
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

  openDeleteConfirmation(username: string, whichOne: string): void {
    this.username = username;
    if(username !== '') {
      Swal.fire({
        html: 'Are you sure you want to delete this ' + whichOne + ' ' + this.username,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: 'red',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          //call delete method in service
          Swal.fire(
            'Deleted',
            this.username + ' ' + whichOne + ' Deleted Successfully!',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', this.username + ' is safe!', 'error');
        }
      });
    } else {
      Swal.fire({
        html: 'Please enter the ' + whichOne +'name',
        icon: 'warning'
      })
    }
  }
  saveUser(user: User) {
    
    if(this.role.roleName !=null && user.username != null && user.password != null){
      user.roles?.push({role: this.role});
      console.log(user);
      Swal.fire('Saved', user.username + ' user saved successfully!', 'success');
      this.role = new Role();
    } else {
      Swal.fire('', 'Enter the user credantials!','warning');
    }
  }

  updatePassword(username: string, newPassword: string, confirmPassword: string) {
    
    if(username != '' && newPassword != '' && newPassword != null){
      if(newPassword === confirmPassword) {
        Swal.fire('Updated', username + " user's password changed successfully!", 'success');
      } else {
        Swal.fire('', 'New password did not match to confirm passowrd', 'warning');
      }
    } else {
      Swal.fire('', 'Fill the user credantials!','warning');
    }
  }

  findUser(username: string) {
  }

  createRole(roleName: string, roleDescription: string) {
    if(roleName != '' && roleDescription != ''){
      Swal.fire('Saved', roleName +' role create successfully!','success');
    } else {
      Swal.fire('', 'Fill the role name and description!','warning');
    }
  }

  convertToUppercase(event: any): void {
    this.roleName = event.target.value.toUpperCase();
  }
}
