import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { Trip } from '../models/trips'; // Import Trip model

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;

  constructor(private router: Router) { } // Inject Router

  ngOnInit(): void { }

  // Add editTrip method
  public editTrip(trip: Trip): void {
    localStorage.removeItem('tripCode'); // Remove any previous trip code
    localStorage.setItem('tripCode', trip.code); // Store the current trip code
    this.router.navigate(['/edit-trip']); // Navigate to the edit trip page
  }
}