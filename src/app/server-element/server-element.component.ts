import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  // None or Native
})
export class ServerElementComponent implements OnInit, OnChanges,
 DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: {type: string, name: string, content: string, model: string, registration: string, region: string};
 // @Input() anotherElement: {type: string, registration: number, model: string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild ('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //  Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //  Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges called!');
    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('This is ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    // Called every time that the input properties of a component or a
    // directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit checked!');
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //  Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit called!');
    console.log('This is ' + this.header.nativeElement.textContent);

  }
  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
