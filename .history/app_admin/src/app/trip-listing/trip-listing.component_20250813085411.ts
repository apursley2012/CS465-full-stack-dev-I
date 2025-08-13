import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trips } from '../data/trips';

import { TripCardComponent } from '../trip-card/tripcard.component';
@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})

export class TripListingComponent implements OnInit {
  trips: Array<any> = trips;
  constructor() { }
  ngOnInit(): void {
  }
}

