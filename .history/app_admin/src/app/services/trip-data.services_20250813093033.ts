import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trips';

@Injectable({
    providedIn: 'root'
})
export class TripDataService {
    private url = 'http://localhost:3000/api/trips'; // Backend API URL

    constructor(private http: HttpClient) { }

    // Method to retrieve all trips
    getTrips(): Observable<Trip[]> {
        return this.http.get<Trip[]>(this.url);
    }

    // Method to add a new trip
    addTrip(formData: Trip): Observable<Trip> {
        return this.http.post<Trip>(this.url, formData);
    }

    // Method to retrieve a single trip by tripCode
    getTrip(tripCode: string): Observable<Trip> {
        return this.http.get<Trip>(`${this.url}/${tripCode}`);
    }

    // Method to update an existing trip
    updateTrip(formData: Trip): Observable<Trip> {
        return this.http.put<Trip>(`${this.url}/${formData.code}`, formData);
    }
}