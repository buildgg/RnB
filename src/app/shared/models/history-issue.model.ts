import {IssueState} from './issue-state.model';
import {Role} from './role.model';
import {Operation} from './operation.model';

export class HistoryIssue {
  $id: string;
  actionDate: any;
  previosIssueState: IssueState;
  role: Role;
  operation: Operation;
  description: string;
}
