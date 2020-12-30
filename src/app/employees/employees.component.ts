import { Component,ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Router } from '@angular/router';
import { EmployeesServicesService } from '../employees-services.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;
  public formattedaddress: any;
  public imageURL: string;
  public url: any;
  constructor(private router: Router,private EmployeesServices:EmployeesServicesService) { }
   public registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    imageUrls:new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
    ])
    
   });

  ngOnInit(): void {
  }
    onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.registerForm.get('avatar').updateValueAndValidity()
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
    handleAddressChange(address: Address) {
    this.formattedaddress = address.formatted_address 
  }
  onSubmit() {
    this.registerForm.value.location = this.formattedaddress;
    this.registerForm.value.imageUrls = this.url;
    this.EmployeesServices.getListDetails(this.registerForm.value)
    this.router.navigate(['/dashboard']);
  }
  cancel() {
   this.registerForm.reset();
  }
  
}
