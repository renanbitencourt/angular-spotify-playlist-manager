import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getMe(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + '/me', {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
    });
  }

  getPlaylists(userId): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + `/users/${userId}/playlists?limit=50`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
    });
  }

  getTracks(userId, playlistId): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}/tracks`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
    });
  }

  savePlaylist(userId, playlist): Observable<any[]> {
    return this.http.post<any[]>(environment.apiUrl + `/users/${userId}/playlists`, playlist, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
    });
  }

  unfollowPlaylist(userId, playlistId): Observable<any[]> {
    return this.http.delete<any[]>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}/followers`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
    });
  }

  updatePlaylist(userId, playlistId, body): Observable<any[]> {
    return this.http.put<any[]>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}`, body, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
    });
  }

  searchTrack(query): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `/search?q=${query}&type=track&limit=10&offset=0`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
    });
  }

  addTrack(userId, playlistId, trackURI): Observable<any> {
    return this.http.post<any>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}/tracks?position=0&uris=${trackURI}`, {}, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') }
    });
  }

  deleteTrack(userId, playlistId, track): Observable<any> {
    const options = {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
      body: { tracks: [track.track] }
    };

    return this.http.delete<any>(environment.apiUrl + `/users/${userId}/playlists/${playlistId}/tracks`, options);
  }
}
