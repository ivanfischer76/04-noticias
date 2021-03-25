import { Component, ViewChild } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(public datalocalService: DataLocalService) { }
  //lo siguiente no se puede poner en el constructor ni en ngOnInit porque da error
  //debe ponerse aquí para que se llame una vez se haya cargado el DOM
  ionViewDidEnter(){
    if(this.slides){
      this.slides.lockSwipes(true);
    }
  }
}
