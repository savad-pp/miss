import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import {Test} from '../test'

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css'],
  providers: [Test]
})
export class ServiceTestComponent implements OnInit {

  constructor(private serviceobj: DateService, hl: Test) {

  }



  ngOnInit() {
    console.log(this.serviceobj.getDateTime())
   // console.log()
  }

}
