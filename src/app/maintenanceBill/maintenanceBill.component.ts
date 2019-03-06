import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { CalendarService } from "../../shared/calendar.service";

@Component({
  templateUrl: "./maintenanceBill.html"
})
export class MaintenanceBillComponent implements OnInit {
  months: any = [];
  years: any = [];
  fields: any = [];
  maintainForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService
  ) {}

  getFields(): any {
    return this.maintainForm.get("fields") as FormArray;
  }

  addField(): void {
    this.fields = this.getFields();
    this.fields.push(this.fb.group({
      "label":[],
      "value":[]
    }));
  }

  deleteField(index: number): void {
    this.fields.removeAt(index);
  }

  onSubmit(){
    console.log(this.maintainForm.value);
  }

  ngOnInit(): void {
    this.months = this.calendarService.getMonths();
    this.years = this.calendarService.getYears();
    this.maintainForm = this.fb.group({
      year: [""],
      month: [""],
      fields: this.fb.array([])
    });
  }
}
