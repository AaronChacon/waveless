import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CardSection } from '../../pages/home-page/components/main/main.interface';
import { MOCK_SECTIONS } from '../mocks/sections.mock';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  getTrips(): Observable<CardSection[]> {
    const data: CardSection[] = MOCK_SECTIONS;
    return of(data).pipe(delay(2000));
  }
}
