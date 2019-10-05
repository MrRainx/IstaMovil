import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { LoginService } from '../pages/login/services/login.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService implements CanLoad {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  constructor(
    private loginSrv: LoginService,
    private router: Router,
    private camera: Camera
  ) { }

  canLoad() {

    const user = this.loginSrv.getUserLoggedIn();
    if (user != null) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  tomarFoto(user) {

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      user.persona.Foto = base64Image
    }, (err) => {
      // Handle error
    });



  }


}
