import {BudgetPosition} from './budget-position.model';
import {BudgetBaseDocumentState} from './budget-base-document-state.model';
import {Deal} from './deal.model';
import {HistoryBudgetBaseDocument} from './history-budget-base-document.model';

export class BudgetBaseDocument {
  $id: string;
  documentNo: string;
  documentDate: string;
  budgetBaseDocumentState: BudgetBaseDocumentState;
  budgetPositionList: BudgetPosition[];
  dealList: Deal[];
  historyBudgetBaseDocument: HistoryBudgetBaseDocument[];
}
