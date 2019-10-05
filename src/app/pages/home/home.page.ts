import { OnInit, Component } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { User } from 'src/app/interfaces/user';
import { CheckUserService } from '../../services/check-user.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public user: User



  constructor(
    private loginSrv: LoginService,
    private camera: Camera
  ) { }

  async ngOnInit() {
    this.user = this.loginSrv.getUserLoggedIn()
  }

  onClick() {

    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.user.persona.Foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("HOLA MUNDO");
    });

  }


}
