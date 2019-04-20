import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationCancel } from '@angular/router';
import { SpotifyService } from '../shared/spotify-service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass'],
  providers: [SpotifyService]
})
export class UserInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private spotifyService: SpotifyService) { }

  user: any = { followers: {}, images: [{}] };

  ngOnInit() {
    new Promise((resolve) => {
      resolve(() => {
        localStorage.setItem('accessToken', new URLSearchParams(this.route.snapshot.fragment.split('#')[0]).get('access_token'));
      });
    }).then(() => {
      this.spotifyService.getMe().subscribe(response => {
        this.user = response;
      });
    });
  }

}
