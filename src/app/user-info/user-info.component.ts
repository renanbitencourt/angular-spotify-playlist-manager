import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationCancel } from '@angular/router';
import { SpotifyService } from '../shared/spotify-service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass'],
  providers: [SpotifyService]
})
export class UserInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private spotifyService: SpotifyService) { }

  user: User = new User();

  ngOnInit() {
    localStorage.setItem('accessToken', new URLSearchParams(this.route.snapshot.fragment.split('#')[0]).get('access_token'));
    this.spotifyService.getMe().subscribe(response => {
      this.user = response;

      const displayNameKey = 'display_name';
      this.user.displayName = response[displayNameKey];
    });
  }

}
