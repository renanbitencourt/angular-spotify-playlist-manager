import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SpotifyService {

  private options = { headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') } };

  constructor(private http: HttpClient) { }

  getMe(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + '/me', this.options);
  }

  getPlaylists(userId): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + `/users/${userId}/playlists?limit=50`, this.options);
  }

  getTracks(userId, playlistId): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}/tracks`, this.options);
  }

  savePlaylist(userId, playlist): Observable<any[]> {
    return this.http.post<any[]>(environment.apiUrl + `/users/${userId}/playlists`, playlist, this.options);
  }

  unfollowPlaylist(userId, playlistId): Observable<any[]> {
    return this.http.delete<any[]>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}/followers`, this.options);
  }

  updatePlaylist(userId, playlistId, body): Observable<any[]> {
    return this.http.put<any[]>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}`, body, this.options);
  }

  searchTrack(query): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `/search?q=${query}&type=track&limit=10&offset=0`, this.options);
  }

  addTrack(userId, playlistId, trackURI): Observable<any> {
    return this.http.post<any>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}/tracks?position=0&uris=${trackURI}`, {},
              this.options);
  }

  deleteTrack(userId, playlistId, track): Observable<any> {
    const options = {
      headers: this.options.headers,
      body: { tracks: [track.track] }
    };

    return this.http.delete<any>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}/tracks`, options);
  }
}
