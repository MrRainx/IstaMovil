import { OnInit, Component } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public user: User



  constructor(
    private loginSrv: LoginService,
  ) { }

  async ngOnInit() {
    this.user = this.loginSrv.getUserLoggedIn()
  }

  onClick() {


  }


}
