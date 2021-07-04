import { Component, OnInit } from '@angular/core';
import { Entries } from 'src/app/shared/models/entries';
import { Entry } from 'src/app/shared/models/entry';
import { EntriesService } from 'src/app/shared/services/entries.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  constructor(private entriesServices: EntriesService) { }

  entries: Entry[];
  count: number;

  ngOnInit(): void {
    // Consume and subscribe the service and get the updated data on real time
    this.entriesServices.getAll().subscribe( data => {
      this.entries = data.entries;
      this.count = data.count
    });
  }

}
