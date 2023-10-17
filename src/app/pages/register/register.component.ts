import { Component, OnInit } from '@angular/core';
// import {ToastrService} from 'ngx-toastr';
import { Form, FormControl, FormsModule, NgForm } from '@angular/forms';
import { ToolsServices } from 'src/app/services/tools-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public user:any = {};
  // public emailCheck(value:any){
  //   if(!value){
  //     this.toaster.warning(this.getLibelleConst().emailInvalid,this.getLibelleConst().modalErreurTitle,{
  //       timeOut: 10000
  //     });

  //     this.user.email = "";
  //     return;
  //   }
  //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if(value.match(mailformat)){
  //     return true;
  //   }else{
  //     this.toaster.warning(this.getLibelleConst().emailInvalid,this.getLibelleConst().modalErreurTitle,{
  //       timeOut: 10000
  //     });
  //     this.user.email = "";
  //     return false;
  //   }
  // }
  
  onSubmit(formInscriptionControl:NgForm) {
    if(this.user.password!=this.user.confirmPassword) {
      // this.toaster.error(this.AllConstante.LIBELLE_CONST_FR.lesmotsdepassessontdifferents, "Erreur");
      console.log("Error");
      
      return false;
    }
  if(formInscriptionControl.valid){
    //subscribe code
    let dataPost  =  {
      "utilisateur_nom":this.user.username,
      "utilisateur_prenoms":this.user.name,
      "utilisateur_contact":this.user.mail,
      "utilisateur_email":this.user.password,
      "utilisateur_login":this.user.confirm,
      // "utilisateur_password":this.toolsService.convertToSha1(this.user.password),
      "utilisateur_sexe": this.user.sexe,
      "utilisateur_birth":this.user.birth
    }
  }
  return true;
}

}
