import { Component, OnInit } from '@angular/core';

declare var $: any;
declare interface LilabilitiesTable {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
    selector: 'app-extended-table-cmp',
    templateUrl: 'lilabilities.component.html'
})

export class LilabilitiesComponent implements OnInit {
    public lilabilitiesData: LilabilitiesTable;
    ngOnInit() {

        this.lilabilitiesData = {
            headerRow: [ '#', 'Type', 'Date', 'Ammount', 'Actions'],
            dataRows: [
                ['1', 'Coś tam', '2017-11-28', '92,144', 'btn-simple'],
            ]
         };
    }
}
