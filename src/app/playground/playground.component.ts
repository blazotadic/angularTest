import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from "rxjs";
import { first, last, map, take, takeLast, takeUntil, tap } from "rxjs/operators";
import { SubSink } from "subsink";
import { PlaygroundService } from "./playground.service";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html'
})
export class PlaygroundComponent implements OnInit, OnDestroy {

  subsink = new SubSink();

  data$: Observable<any>;

  reservationForm: FormGroup;

  memoryLeakSubject = new Subject();

  // subscriptions: Subscription[] = [];

  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  // subjects...
  // subject = new Subject<number>();
  // behaviourSubject = new BehaviorSubject<number>(0);
  // replaySubject = new ReplaySubject<number>();
  // asyncSubject = new AsyncSubject<number>();

  myInputValue: string = 'test-value';
  allowEdit: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private playgroundService: PlaygroundService
  ) { }

  ngOnInit(): void {
      const queryParams = this.activatedRoute.snapshot.queryParams;
      const data = this.activatedRoute.snapshot.data;

      this.allowEdit = data.allowEdit;

      // console.log(queryParams);
      console.log(data);

      this.initializeForm();

      // memory leak - solving...
      // this.subsink.add(
      //   this.playgroundService
      //   .getObservables()
      //   .subscribe(data => console.log(data)),
      // );

      // this.subsink.sink = this.playgroundService
      // .getObservables()
      // .subscribe(data => console.log(data));

      // this.playgroundService.getObservables()
      //   .pipe(
      //     takeUntil(this.memoryLeakSubject)
      //   )
      //   .subscribe(data => console.log(data));

      // this.playgroundService.getObservables()
      //   .pipe(
      //     takeUntil(this.memoryLeakSubject)
      //   )
      //   .subscribe(data => console.log(data));

      // this.playgroundService.getObservables()
      //   .pipe(
      //     takeUntil(this.memoryLeakSubject)
      //   )
      //   .subscribe(data => console.log(data));

      this.data$ = this.playgroundService.getObservable();
  }

  ngOnDestroy(): void {
    console.log('Unsubscribing...')
    // this.subscription.unsubscribe();
    // this.subsink.unsubscribe();

    this.memoryLeakSubject.next();
    this.memoryLeakSubject.complete();
  }

  printValue(): void {
    console.log(this.myInputValue);
  }

  changeValue(): void {
    this.myInputValue = 'changed-value!';
  }

  addFormGroup() {
    // nested...
    const formGroup = new FormGroup({
      childName: new FormControl(null),
      childAge: new FormControl(null)
    });
    const childrenControl = this.reservationForm.get('children') as FormArray;
    childrenControl.push(formGroup);
  }

  removeFormControl(position: number) {
    const childrenControl = this.reservationForm.get('children') as FormArray;
    childrenControl.removeAt(position);
  }

  getChildrenControls() {
    const children = this.reservationForm.get('children') as FormArray;
    return children.controls;
  }

  makeReservation() {
    console.log(this.reservationForm);
  }

  private initializeForm(): void {
    this.reservationForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      children: new FormArray([]) // FormGroup
    });
  }

  private subscriptions() {
    // subject...
      // this.subject.subscribe(data => {
      //   console.log('S1: ', data);
      // });

      // this.subject.next(1);
      // this.subject.next(2);

      // this.subject.subscribe(data => {
      //   console.log('S2: ', data);
      // });

      // this.subject.next(3);
      // this.subject.complete();

      // behaviour subject...
      // this.behaviourSubject.subscribe(data => console.log('BS1: ', data));

      // this.behaviourSubject.next(1);
      // this.behaviourSubject.next(2);
      // this.behaviourSubject.next(3);

      // this.behaviourSubject.subscribe(data => console.log('BS2: ', data));
      // this.behaviourSubject.next(4);
      // this.behaviourSubject.next(5);
      // this.behaviourSubject.complete();

      // replay subject...
      // this.replaySubject.subscribe(data => console.log('RS1: ', data));

      // this.replaySubject.next(1);
      // this.replaySubject.next(2);
      // this.replaySubject.next(3);

      // this.replaySubject.subscribe(data => console.log('RS2: ', data));

      // this.replaySubject.next(4);
      // this.replaySubject.complete();

      // async subject...
      // this.asyncSubject.subscribe(data => console.log('ASYNC1: ', data), error => {});
      // this.asyncSubject.next(1);
      // this.asyncSubject.next(2);

      // this.asyncSubject.subscribe(data => console.log('ASYNC2: ', data));
      // this.asyncSubject.next(44);

      // this.asyncSubject.error('Error has been occurred in async subject!');

      // this.asyncSubject.complete();

      // this.playgroundService.of()
      //   .subscribe(data => console.log(data));

      // this.playgroundService.from()
      //   .subscribe(data => console.log(data));

      // this.playgroundService.map()
      //   .pipe(
      //     map(item => item.name)
      //   )
      //   .subscribe(data => console.log(data));

      // this.playgroundService.map()
      //   .pipe(
      //     tap(item => item.name)
      //   )
      //   .subscribe(data => console.log(data));

      // this.playgroundService.concat()
      //   .subscribe(data => console.log(data));

      // this.playgroundService.getObservables()
      //   .pipe(
      //     takeLast(1) // last()
      //   ).subscribe(data => console.log(data));
  }
}
