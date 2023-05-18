import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput!: ElementRef;

  // onAddServer () {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddServer (nameInput: HTMLInputElement) {
    console.log(nameInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddBlueprint () {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }
  
  onAddBlueprint (nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
