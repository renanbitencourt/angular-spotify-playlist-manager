import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../shared/spotify-service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TrackDialogComponent } from '../track-dialog/track-dialog.component';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.sass'],
  providers: [SpotifyService]
})
export class TracksComponent implements OnInit {

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private dialog: MatDialog) { }

  tracks: any = { items: [] };
  playlistId;
  userId;

  ngOnInit() {
    const key = '_value';
    this.playlistId = this.route.params[key].pid;
    this.userId = this.route.params[key].uid;

    this.getTracks();
  }

  openDialog() {
    const dialogRef = this.dialog.open(TrackDialogComponent, {
      width: '90em',
      data: {
        userId: this.userId,
        playlistId: this.playlistId
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getTracks();
    });
  }

  deleteTrack(track) {
    this.spotifyService.deleteTrack(this.userId, this.playlistId, track).subscribe(() => {
      this.getTracks();
    });
  }

  private getTracks(): void {
    this.spotifyService.getTracks(this.userId, this.playlistId).subscribe(response => {
      this.tracks = response;
      console.log(response);
    });
  }

}
