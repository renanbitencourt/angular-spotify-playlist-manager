import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logar() {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=f13776257cf6400087de34d2e5ce4356' +
      '&redirect_uri=http://localhost:4200/user' +
      '&response_type=token' +
      '&state=123' +
      '&scope=user-read-email,user-read-private,playlist-read-private,playlist-modify-public,playlist-modify-private,' +
        'playlist-modify,user-library-read,user-library-modify,user-follow-read,user-follow-modify';
  }

}
