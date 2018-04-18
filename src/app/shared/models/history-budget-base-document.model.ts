import {BudgetBaseDocumentState} from './budget-base-document-state.model';
import {Role} from './role.model';
import {Operation} from './operation.model';

export class HistoryBudgetBaseDocument {
  $id: string;
  actionDate: string;
  previosBudgetPositionState: string;
  role: string;
  operation: string;
  description: string;
}
