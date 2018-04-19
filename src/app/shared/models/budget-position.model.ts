import {MngResponsCenter} from './mng-respons-center.model';
import {Division} from './division.model';
import {BudgetArticle} from './budget-article.model';
import {BudgetPositionState} from './budget-position-state.model';
import {HistoryBudgetPosition} from './history-budget-position.model';

export class BudgetPosition {
  $id: string;
  budgetDate: string;
  comments: string;
  realBudgetDate: string;
  mngResponsCenter: string;
  division: string;
  count: number;
  measure: string;
  budgetArticle: string;
  approximateAmount: number;
  amount: number;
  payedAmount: number;
  utilizedAmount: number;
  budgetPositionState: string;
  historyBudgetPositionList: HistoryBudgetPosition[];
}
