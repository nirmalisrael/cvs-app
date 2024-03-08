import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';
import { Role } from 'src/app/_module/auth/_dto/role';
import { User } from 'src/app/_module/auth/_dto/user';
import Swal from 'sweetalert2';
import { AuthService } from '../../_service/jwt-service/auth.service';
import { UserService } from '../../_service/user-service/user.service';
import { RoleService } from '../../_service/role-service/role.service';

@Component({
  selector: 'app-auth-editor',
  templateUrl: './auth-editor.component.html',
  styleUrls: ['./auth-editor.component.css']
})
export class AuthEditorComponent {

  constructor(
    public authService: AuthService, 
    private userService: UserService,
    private roleService: RoleService) {}

  userRequest: User = new User;
  activeTab: string = 'users';
  username: string = '';
  roleName: string = '';

  userResponse: User = new User();
  
  selectedRole: Role = new Role();

  userRole: Role = new Role();
  
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
    
    if(this.selectedRole.roleName !=null && user.username != null && user.password != null){
      user.roles?.push({roleName: this.selectedRole.roleName, roleDescription: this.selectedRole.roleDescription});
      this.userService.createUser(user).subscribe(
        (response) => {
          user = response;
          console.log(user);
          if (user) {
            Swal.fire('Saved', user.username + ' user saved successfully!', 'success');
          }
        }
      )
      this.selectedRole = new Role();
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
    if(username != undefined) {
      this.userService.getUser(username).subscribe(
        (response) => {
          this.userResponse = response;
        }
      )
    }
  }

  createRole(roleName: string, roleDescription: string) {
    if(roleName != '' && roleDescription != ''){
      let role: Role = new Role();
      role.roleName = roleName;
      role.roleDescription = roleDescription;
      this.roleService.createRole(role).subscribe(
        (response) => {
          role = response;
          console.log(role);
          if (response) {
            Swal.fire('Saved', roleName +' role create successfully!','success');
          } else {
            Swal.fire('', 'Fill the role name and description!','warning');
          }
        }
      )
    } else {
      Swal.fire('', 'Fill the role name and description!','warning');
    }
  }

  convertToUppercase(event: any): void {
    this.roleName = event.target.value.toUpperCase();
  }
}
