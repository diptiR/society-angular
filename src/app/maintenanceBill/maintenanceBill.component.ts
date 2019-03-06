import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators
} from "@angular/forms";
import { CalendarService } from "../../shared/calendar.service";
import { MaintenanceBillService } from "./maintenanceBill.service";

@Component({
  templateUrl: "./maintenanceBill.html"
})
export class MaintenanceBillComponent implements OnInit {
  months: any = [];
  years: any = [];
  fields: any = [];
  maintenance: any;
  maintainForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService,
    private maintenanceBillService: MaintenanceBillService
  ) {}

  getFields(): any {
    return this.maintainForm.get("fields") as FormArray;
  }

  addField(): void {
    this.fields = this.getFields();
    this.fields.push(
      this.fb.group({
        label: [],
        value: []
      })
    );
  }

  deleteField(index: number): void {
    this.fields.removeAt(index);
  }

  onSubmit() {
    this.maintenanceBillService.getMaintenance("a201").subscribe(response => {
      this.maintenance = response.maintenanceCharges;
      console.log(this.maintenance);
    });
  }

  ngOnInit(): void {
    this.months = this.calendarService.getMonths();
    this.years = this.calendarService.getYears();
    this.maintainForm = this.fb.group({
      year: ["", Validators.required],
      month: ["", Validators.required],
      fields: this.fb.array([])
    });
  }
}
