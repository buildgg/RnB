import {BudgetArticleType} from './budget-article-type.model';
import {BudgetArticle} from './budget-article.model';
import {HistoryIssue} from './history-issue.model';
import {Role} from './role.model';
import {IssueState} from './issue-state.model';

export class Issue {
  $id: string;
  description: string;
  budgetArticleType: BudgetArticleType;
  budgetArticle: BudgetArticle;
  measure: string;
  count: number;
  historyIssue: HistoryIssue;
  issuer: Role;
  responsiblePerson: Role;
  state: IssueState;
}
