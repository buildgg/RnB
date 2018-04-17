import {BudgetBaseDocumentState} from './budget-base-document-state.model';
import {Role} from './role.model';
import {Operation} from './operation.model';

export class HistoryBudgetBaseDocument {
  $id: string;
  actionDate: any;
  previosBudgetPositionState: BudgetBaseDocumentState;
  role: Role;
  operation: Operation;
  description: string;
}
