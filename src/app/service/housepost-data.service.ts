import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HousePost } from '../house-post-list/house-post-list.component';


@Injectable({
  providedIn: 'root'
})

export class HousepostDataService {

  constructor(private http: HttpClient) { }
  
  private apiBaseUrl = 'http://localhost:3000/api';

  public getHousePosts(): Promise<HousePost[]> {
		const url: string = `${this.apiBaseUrl}/housePosts`;
		return this.http
		.get(url)
		.toPromise()
		.then(response => response as HousePost[])
		.catch(this.handleError);
	}

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
