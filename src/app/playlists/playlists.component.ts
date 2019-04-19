import { Component, OnInit, ViewChild } from '@angular/core';
import { SpotifyService } from '../shared/spotify-service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { PlaylistDialogComponent } from '../playlist-dialog/playlist-dialog.component';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.sass'],
  providers: [SpotifyService]
})
export class PlaylistsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'edit', 'detail', 'unfollow'];
  dataSource = new MatTableDataSource();
  userId;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    const key = '_value';
    this.userId = this.route.params[key].uid;

    this.getPlaylists();
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      width: '35em',
      data: {
        userId: this.userId
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPlaylists();
    });
  }

  openEditDialog(playlist) {
    console.log(playlist);

    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      width: '35em',
      data: {
        userId: this.userId,
        playlist: (playlist)
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPlaylists();
    });
  }

  private getPlaylists(): void {
    this.spotifyService.getPlaylists(this.userId).subscribe(response => {
      console.log(response);
      const key = 'items';
      this.dataSource.data = response[key];
    });
  }

  playlistOwner(owner): boolean {
    return !(owner.id === this.userId);
  }

  unfollowPlaylist(playlistId) {
    this.spotifyService.unfollowPlaylist(this.userId, playlistId).subscribe(() => {
      this.getPlaylists();
    });
  }

}
