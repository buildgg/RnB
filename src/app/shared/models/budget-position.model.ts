import {MngResponsCenter} from './mng-respons-center.model';
import {Division} from './division.model';
import {BudgetArticle} from './budget-article.model';
import {BudgetPositionState} from './budget-position-state.model';
import {HistoryBudgetPosition} from './history-budget-position.model';

export class BudgetPosition {
  $id: string;
  budgetDate: any;
  comments: string;
  realBudgetDate: any;
  mngResponsCenter: MngResponsCenter;
  division: Division;
  count: number;
  measure: string;
  budgetArticle: BudgetArticle;
  approximateAmount: number;
  amount: number;
  payedAmount: number;
  utilizedAmount: number;
  budgetPositionState: BudgetPositionState;
  historyBudgetPositionList: HistoryBudgetPosition[];
}
