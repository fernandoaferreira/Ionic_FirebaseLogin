import { User } from './../../app/models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, //Chamando o modulo na contraução
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){ //iniciando a função 
    try{ //tesntando a função e validando
    const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    //acima o modulo que pega o corpo do User e cria um usuario a baixo o result sai no console
    if(result){
      this.navCtrl.push(LoginPage);
      }
  }
  catch (e) { // Caso de Erro mostrar no console
    console.error(e);
  }
}
}
