import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalendarService {

  getMonths(): any {
    return [
      { label: "January", value: 1 },
      { label: "February", value: 2 },
      { label: "March", value: 3 },
      { label: "April", value: 4 },
      { label: "May", value: 5 },
      { label: "June", value: 6 },
      { label: "July", value: 7 },
      { label: "August", value: 8 },
      { label: "September", value: 9 },
      { label: "October", value: 10 },
      { label: "November", value: 11 },
      { label: "December", value: 12 }
    ];
  }

  getYears(): any {
    return [{ label: "2018", value: 2018 }, { label: "2019", value: 2019 }];
  }
  
}
