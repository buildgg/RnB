import {Component, OnInit, PipeTransform} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {IssueService} from '../issue.service';
import {Issue} from '../../shared/models/issue.model';


enum ChangeMode {Add, Edit}

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issueGroup: FormGroup;

  budgetType: string[];
  responsiblePerson: string[];
  issuer: string[];
  changeMode: ChangeMode;

  constructor(private fb: FormBuilder,
              private issueService: IssueService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.issueService.getIssuer().subscribe(
      (val: string[]) => this.issuer = val
    );
    this.issueService.getBudgetType().subscribe(
      (val: string[]) => this.budgetType = val
    );
    this.issueService.getResponsiblePerson().subscribe(
      (val: string[]) => this.responsiblePerson = val
    );

    this.issueGroup = this.fb.group({
      description: '',
      count: ['', Validators.required],
      budgetArticleType: ['', Validators.required],
      issuer: ['', Validators.required],
      responsiblePerson: ['', Validators.required],
      collectionName: '',
      date: ['', Validators.required],
      issueNo: ['', Validators.required],
      state: ['', Validators.required],
      id: ''
    });

    const id: string = this.route.snapshot.params.id;
    if (id !== undefined) {
      this.changeMode = ChangeMode.Edit;
      this.route.paramMap.pipe(
        switchMap((val: ParamMap) =>
          this.issueService.getIssueById(val.get('id'))))
        .subscribe((val: Issue) => {
            val.date = this.convertDateToModel(val.date);
            this.issueGroup.patchValue(val);
          }
        );
    } else {
      this.changeMode = ChangeMode.Add;
    }

  }

  isLoadedData(): boolean {
    return this.responsiblePerson !== undefined &&
      this.budgetType !== undefined &&
      this.issuer !== undefined;
  }
  changeModeEdit(): boolean {
    return this.changeMode === ChangeMode.Edit;
  }

  accept(issueGroup: FormGroup) {
    const issue =
      new Issue(
        issueGroup.value.description,
        issueGroup.value.count,
        issueGroup.value.budgetArticleType,
        issueGroup.value.issuer,
        issueGroup.value.responsiblePerson,
        issueGroup.value.collectionName,
        new DatePipe('en-US').transform(issueGroup.value.date, 'dd.MM.yyyy'),
        issueGroup.value.issueNo,
        issueGroup.value.state,
        issueGroup.value.id
      );

    this.issueService.idChanged.next(issueGroup.value.id);

    if (this.changeMode === ChangeMode.Edit) {
      this.issueService.updateIssue(issue);
      this.router.navigate(['../../'], {relativeTo: this.route});
    } else {
      this.issueService.insertIssue(issue);
      this.router.navigate(['../'], {relativeTo: this.route});
    }

  }

  closeEdit() {
    if (this.changeMode === ChangeMode.Edit) {
      this.router.navigate(['../../'], {relativeTo: this.route});
    }else {
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  convertDateToModel (date: string) {
    const dateArray = date.split('.');
    const pipeDate: PipeTransform = new DatePipe('en-US');

    if (dateArray.length !== 3) {
       return pipeDate.transform(date, 'yyyy-MM-dd');
     }

    const day: number = +dateArray[0];
    const month: number = +dateArray[1] - 1;
    const year: number = +dateArray[2];
    const newDate = new Date();
    newDate.setFullYear(year, month, day);
    return pipeDate.transform(newDate.getTime(), 'yyyy-MM-dd');

  }
}
