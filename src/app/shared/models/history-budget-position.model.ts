import {BudgetPositionState} from './budget-position-state.model';
import {Role} from './role.model';
import {Operation} from './operation.model';

export class HistoryBudgetPosition {
  $id: string;
  actionDate: string;
  previosBudgetPositionState: string;
  role: string;
  operation: string;
  description: string;
}


