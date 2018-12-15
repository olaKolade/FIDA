import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {
  CalendarService
} from './../services/calender.service';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calend',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calend.component.html',
  styleUrls: ['./calend.component.css']
})
export class CalendComponent {
  @ViewChild('modalContent')
    modalContent: TemplateRef<any>;

    view: CalendarView = CalendarView.Month;

    CalendarView = CalendarView;

    viewDate: Date = new Date();
    returnedEventsId = [];

    public loggedInValue: string;
    public loggedIn = false;
    public adminValue: string;
    public admin: boolean;


    modalData: {
      action: string;
      event: CalendarEvent;
    };

    actions: CalendarEventAction[] = [
      // {
      //   label: '<i class="fa fa-fw fa-pencil"></i>',
      //   onClick: ({ event }: { event: CalendarEvent }): void => {
      //     this.handleEvent('Edited', event);
      //   }
      // }
      // },
      // {
      //   label: '<i class="fa fa-fw fa-times"></i>',
      //   onClick: ({ event }: { event: CalendarEvent }): void => {
      //     this.events = this.events.filter(iEvent => iEvent !== event);
      //     this.handleEvent('Deleted', event);
      //   }
      // }
    ];

    refresh: Subject<any> = new Subject();
    events: CalendarEvent[] = [];
    eventArr: Array<Object> = [];
    MyEvents: CalendarEvent[] = [];
    // events: CalendarEvent[] = [
    //   {
    //     start: subDays(startOfDay(new Date()), 1),
    //     end: addDays(new Date(), 1),
    //     title: 'A 3 day event',
    //     color: colors.red,
    //     actions: this.actions,
    //     allDay: true,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true
    //     },
    //     draggable: true
    //   },
    //   {
    //     start: startOfDay(new Date()),
    //     title: 'An event with no end date',
    //     color: colors.yellow,
    //     actions: this.actions
    //   },
    //   {
    //     start: subDays(endOfMonth(new Date()), 3),
    //     end: addDays(endOfMonth(new Date()), 3),
    //     title: 'A long event that spans 2 months',
    //     color: colors.blue,
    //     allDay: true
    //   },
    //   {
    //     start: addHours(startOfDay(new Date()), 2),
    //     end: new Date(),
    //     title: 'A draggable and resizable event',
    //     color: colors.yellow,
    //     actions: this.actions,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true
    //     },
    //     draggable: true
    //   }
    // ];

    activeDayIsOpen: boolean = true;

    constructor(private modal: NgbModal, private _calendar: CalendarService) {
      this.loggedInValue = sessionStorage.getItem('loggedInValue');
      if(this.loggedInValue === 'true'){
        this.loggedIn = true;
      }
      this.adminValue = sessionStorage.getItem('admin');
      if(this.adminValue === 'true'){
        this.admin = true;
      }

      this.indexCalendar();
    }
    indexCalendar(){
      this._calendar.indexCalendar()
      .subscribe(response=>{
        //console.log(response);
        response.forEach( (element)=> {
          this.events.push({
            id: element.id,
            title: element.title,
            start: new Date(element.start),
            end: new Date(element.end),
            color: {primary: element.color_primary, secondary: element.color_sec}
          });
          this.MyEvents.push({
            id: element.id,
            title: element.title,
            start: new Date(element.start),
            end: new Date(element.end),
            color: {primary: element.color_primary, secondary: element.color_sec}
          });
          this.returnedEventsId.push(element.id);
        });
      });
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        this.viewDate = date;
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
        }
      }
    }

    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: CalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
      this.handleEvent('Dropped or resized', event);
      this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent(): void {
      this.events.push({
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
      });
      this.refresh.next();
    }

    onSub(){
      //elements gotten from user submit button
      this.events.forEach( (element)=> {
        if(this.returnedEventsId.includes(element.id)){
          //TODO exists in the database
          this.MyEvents.forEach( (myElement)=>{
          //check if their are changes in title, start, end, color
            if(element.id == myElement.id){
              if(myElement.title !== element.title){
                //title has changeD
                console.log("title has changed");
                this._calendar.editCalendar({'title': element.title, 'id': element.id})
                  .subscribe( response=> {
                    console.log(response);
                  });
              }

              if(myElement.start.getTime() !== element.start.getTime()) {
                //start has changed
                this._calendar.editCalendar({'start': element.start, 'id': element.id})
                   .subscribe();
                console.log("start has changed");
              }

              if(myElement.end.getTime() !== element.end.getTime()) {
                //end has changed
                this._calendar.editCalendar({'end': element.end, 'id': element.id})
                   .subscribe();
                console.log("end has changed");
              }

              if(myElement.color.primary !== element.color.primary || myElement.color.secondary !== element.color.secondary) {
                //color has changed
                this._calendar.editCalendar({'color': element.color, 'id': element.id})
                   .subscribe();
                console.log("color has changed");
              }
            }
          });

        } else {
          //TODO has not been added
          this.eventArr.push(element);
        }
      });

      if(this.eventArr.length > 0){
        this._calendar.addCalendar(this.eventArr)
          .subscribe(response=>{
            console.log(response);
            this.eventArr = [];
          });
      }
      window.location.reload();
    }

    deleteEvent(id){
      this._calendar.deleteCalendar({'id': id})
        .subscribe( response => {
          window.location.reload();
        });
    }
}
