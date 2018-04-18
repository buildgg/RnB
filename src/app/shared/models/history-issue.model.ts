import {IssueState} from './issue-state.model';
import {Role} from './role.model';
import {Operation} from './operation.model';

export class HistoryIssue {
  $id: string;
  actionDate: string;
  previosIssueState: string;
  role: string;
  operation: string;
  description: string;
}
