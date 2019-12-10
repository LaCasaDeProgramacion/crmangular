import { retry } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { EventService } from './../../../../services/prospectingManagement/event.service';
import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy, Pipe } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import {EventSettingsModel, ScheduleComponent,  PopupOpenEventArgs, CurrentAction
} from '@syncfusion/ej2-angular-schedule';
import { L10n } from '@syncfusion/ej2-base';
import {  DatePicker } from '@syncfusion/ej2-calendars';
import { Evenement } from 'src/app/entities/Evenement';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

L10n.load({
  'en-US': {
      'schedule': {
        'saveButton' : 'Save',
        'cancelButton' : 'Close',
        'deleteButton' : '',
        'updateButton' :'',
        'newEvent': 'Add Evenement'
      }
  }
});
@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit , OnDestroy {
  title = 'crud4';

  mySubscription: any;

  liste:{id:0, name:'', startDate:null, endDate:null}[]=[];
  event : Evenement={id:0, name:'', startDate:null, endDate:null};
  E:Evenement={id:0, name:'', startDate:null, endDate:null};

  name;
  startDate;
  endDate;
  eventsDB;

  closeResult: string;
  closeResult1: string;

  EventToRemove;

  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;

  public eventSettings: EventSettingsModel = {
      dataSource: null,
      fields:{
        subject:{name:'name'},
        startTime:{name:'startDate'},
        endTime:{name:'endDate'}
      }

  };
  constructor(private evenementService:EventService,
    private modalService: NgbModal, private router: Router,
    ) {
      this.eventSettings.dataSource= this.loadEvents();
      console.log("DATA SOURCE" , this.eventSettings.dataSource)
      console.log("constructeur")
       // this.loadEvents();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };
        this.mySubscription = this.router.events.subscribe((event) => {
              if (event instanceof NavigationEnd) {
                     this.router.navigated = false;
                 }
            });
  }
  ngOnInit()
  {


  }

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}

  public selectedDate: Date = new Date(2019, 0, 1);
  private selectionTarget: Element;

  public onPopupOpen(args: PopupOpenEventArgs): void {
    this.loadEvents();
      const eventData: { [key: string]: Object } = this.scheduleObj.eventWindow.getObjectFromFormData('e-quick-popup-wrapper');
      this.scheduleObj.eventWindow.convertToEventData(args.data as { [key: string]: Object }, eventData);

      this.selectionTarget = null;
      this.selectionTarget = args.target;
      console.log("Event data ")
    if (args.type === 'Editor') {
      let startElement: HTMLInputElement = args.element.querySelector('#StartDate') as HTMLInputElement;
      if (!startElement.classList.contains('e-datetimepicker')) {
          new DatePicker({ value: new Date(startElement.value) || new Date() }, startElement);
      }
      let endElement: HTMLInputElement = args.element.querySelector('#EndDate') as HTMLInputElement;
      if (!endElement.classList.contains('e-datetimepicker')) {
          new DatePicker({ value: new Date(endElement.value) || new Date() }, endElement);
      }
  }

    }
   public onDetailsClick(): void {
     console.log("DETAILS")
        this.onCloseClick();
        const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;

        this.scheduleObj.openEditor(data, 'Add');
    }
  public convert(str)  {
      var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  public onAddClick(): void {

    console.log("adding")
      this.onCloseClick();
      const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
      const eventData: { [key: string]: Object } = this.scheduleObj.eventWindow.getObjectFromFormData('e-quick-popup-wrapper');
      this.scheduleObj.eventWindow.convertToEventData(data as { [key: string]: Object }, eventData);

      eventData.Id = this.scheduleObj.eventBase.getEventMaxID() as number + 1;
      this.scheduleObj.addEvent(eventData);

      let name= eventData.name.toString();
      let newDate1 = this.convert(eventData.startDate.toString()) ;
      let newDate2 = this.convert(eventData.endDate.toString()) ;
      this.evenementService.addCalendar(name, newDate1, newDate2).subscribe(data=>
       console.log(data));

  }
  public onUpdateClick(data)
  {
    console.log( " ID UPDAATE ******* " +data.id)

  }
  public onEditClick(args: any): void {
    if (this.selectionTarget) {
    let eventData: { [key: string]: Object } = this.scheduleObj.getEventDetails(this.selectionTarget) as { [key: string]: Object };
    let currentAction: CurrentAction = 'Save';
    if (!isNullOrUndefined(eventData.RecurrenceRule) && eventData.RecurrenceRule !== '') {
        if (args.target.classList.contains('e-edit-series')) {
        currentAction = 'EditSeries';
        eventData = this.scheduleObj.eventBase.getRecurrenceEvent(eventData);
        } else {
        currentAction = 'EditOccurrence';
        }
    }
    this.scheduleObj.openEditor(eventData, currentAction);
    let id= eventData.id.toString();
    let name= eventData.name.toString();
    let newDate1 = this.convert(eventData.startDate.toString()) ;
    let newDate2 = this.convert(eventData.endDate.toString()) ;
    this.evenementService.updateCalendar(id, name, newDate1, newDate2).subscribe(data=>
     console.log(data));

  }
}

  public onDeleteClick(args: any): void {
    this.onCloseClick();
    if (this.selectionTarget) {
    const eventData: { [key: string]: Object } = this.scheduleObj.getEventDetails(this.selectionTarget) as { [key: string]: Object };
    let id= eventData.id.toString();
    this.scheduleObj.deleteEvent(eventData);
    this.evenementService.Delete(id).subscribe(
        data=> {
         // this.scheduleObj.deleteEvent(id);
          this.loadEvents();
          console.log("after  ****** " , this.eventSettings.dataSource)
        }
    );
    this.scheduleObj.deleteEvent(eventData);

    }
    this.router.navigate(['calendar']);
  }

  public onCloseClick(): void {
      this.scheduleObj.closeEditor();
  }


  loadEvents()
  {
    let liste:{id:0, name:'', startDate:null, endDate:null}[]=[];
    this.evenementService.get().subscribe(data=> {
        this.eventsDB=data;
        this.eventsDB.forEach(element => {
         liste.push({id:element.id, name:element.name,
          startDate:element.startDate, endDate:element.endDate});
        });
      });
      this.eventSettings.dataSource= liste ;
      return this.eventSettings.dataSource;
      console.log("load datasource 69 ", this.eventSettings.dataSource)

   }


    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }


}
