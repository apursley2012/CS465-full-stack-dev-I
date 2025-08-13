import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.services';

@Component({
    selector: 'app-add-trip',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './add-trip.component.html',
    styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
    public addForm!: FormGroup; // Ensure this is public
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private tripService: TripDataService
    ) { }

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            _id: [],
            code: ['', Validators.required],
            name: ['', Validators.required],
            length: ['', Validators.required],
            start: ['', Validators.required],
            resort: ['', Validators.required],
            perPerson: ['', Validators.required],
            image: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    public onSubmit() {
        this.submitted = true;
        if (this.addForm.valid) {
            this.tripService.addTrip(this.addForm.value).subscribe({
                next: (data: any) => {
                    console.log(data);
                    this.router.navigate(['']);
                },
                error: (error: any) => {
                    console.log('Error: ' + error);
                }
            });
        }
    }

    get f() {
        return this.addForm.controls;
    }
}