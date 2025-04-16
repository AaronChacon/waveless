import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private http = inject(HttpClient);

  getIconContent(name: string): Observable<string> {
    // const url = `/assets/icons/${name}.svg`;
    const url = `../../../../../assets/icons/${name}.svg`;
    return this.http.get(url, { responseType: 'text' });
  }
}
