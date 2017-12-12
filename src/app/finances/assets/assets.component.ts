import { Component, OnInit } from '@angular/core';

declare var $: any;
declare interface AssetsTable {
    headerRow: string[];
    dataRows: string[][];
  }

@Component({
    selector: 'app-extended-table-cmp',
    templateUrl: 'assets.component.html'
})

export class AssetsComponent implements OnInit {
    public assetsData: AssetsTable;
    ngOnInit() {

        this.assetsData = {
            headerRow: [ '#', 'Type', 'Date', 'Ammount', 'Actions'],
            dataRows: [
                ['1', 'Coś tam', '2017-11-28', '92,144', 'btn-simple'],
            ]
        };
    }
}
