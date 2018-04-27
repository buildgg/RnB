import {Injectable} from '@angular/core';
import {Issue} from '../shared/models/issue.model';
import {Observable} from 'rxjs/Observable';

const issues: Issue[] = [
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Марко Лукич Кропивни',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Марко Лукич Кропивни',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите rerty 555555555',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите rerty 555555555',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите rerty 555555555',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите rerty 555555555',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите rerty 555555555',
    $id: 3
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите rerty 555555555',
    $id: 3
  }
];

@Injectable()
export class IssueMockData {
  private issuesList: Issue[] = issues;

  getIssues(): Observable<Issue[]> {
    return Observable.from([this.issuesList]);
  }

}