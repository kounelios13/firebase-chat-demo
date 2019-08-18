import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {}
  async login() {
    try {
      await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (e) {
      alert(e.message);
    }
  }
  async loginGitHub() {
    try {
      await this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
    } catch (e) {
      alert(e.message);
    }
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
