import {BudgetPosition} from './budget-position.model';
import {BudgetBaseDocumentState} from './budget-base-document-state.model';
import {Deal} from './deal.model';
import {HistoryBudgetBaseDocument} from './history-budget-base-document.model';

export class BudgetBaseDocument {
  $id: string;
  documentnumber: string;
  documentdate: any;
  budgetBaseDocumentState: BudgetBaseDocumentState;
  budgetPositionList: BudgetPosition[];
  dealList: Deal[];
  historyBudgetBaseDocument: HistoryBudgetBaseDocument[];
}
