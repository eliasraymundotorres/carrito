import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public webcamImage: WebcamImage | undefined;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
   this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info('Imagen de cámara web guardada', webcamImage);
    this.webcamImage = webcamImage;
   }
   public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
   }
  

}
