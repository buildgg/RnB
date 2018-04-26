import { Component, OnInit } from '@angular/core';

const filtersIssueMock: string[] = [
  'Мои заявки за неделю',
  'Все мои заявки',
  'Заявки моего филиала'
];

@Component({
  selector: 'rb-filters',
  templateUrl: './rb-filters.component.html',
  styleUrls: ['./rb-filters.component.css']
})
export class RbFiltersComponent implements OnInit{

  filtersList: string[];
  isShowFilter = false;
  isShowButtonFilter = true;

  toggleButtonFilter() {
    this.isShowFilter = !this.isShowFilter;
    this.isShowButtonFilter = !this.isShowButtonFilter;
  }
  ngOnInit() {
    this.filtersList = filtersIssueMock;
  }

}
