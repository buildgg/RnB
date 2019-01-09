import {MatPaginatorIntl} from '@angular/material';

export class CustomLabelPaginator extends MatPaginatorIntl {
  itemsPerPageLabel = 'Строк на одной странице:';
  nextPageLabel = 'Следующая страница';
  previousPageLabel = 'Предыдущая страница';
  firstPageLabel = 'Первая страница';
  lastPageLabel = 'Последняя страница';
  
  getRangeLabel = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
      return `0 из ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} из ${length}`;
  }

  constructor () {
    super();
  }

}
