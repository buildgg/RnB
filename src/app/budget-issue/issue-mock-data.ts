import {Injectable} from '@angular/core';
import {Issue} from '../shared/models/issue.model';
import {Observable} from 'rxjs';import {Issue} from '../shared/models';

const issues: Issue[] = [
  {
    description: 'Очень необходимо два офисных стулья',
    count: 2,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Марко Лукич Кропивни',
    responsiblePerson: 'Бабмини',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: '2'
  },
    {
        description: 'пятьдесят пачек бумаги и покарсить здание ',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
    description: 'Двести файликов для бумаг',
    count: 3,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Марко Лукич Кропивни',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: '3'
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 5,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: '4'
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 3,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: '5'
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 2,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите rerty 555555555',
    $id: '6'
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
    $id: '7'
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
    $id: '8'
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
    $id: '9'
  },
  {
    description: 'Очень необходимо два офисных стулья',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 223м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите rerty 555555555',
    $id: '10'
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
    $id: '11'
  },
    {
    description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
    count: 4,
    budgetArticleType: 'канцелярские товары',
    issuer: 'Распорядитель IT',
    responsiblePerson: 'Хамза Хакимзаде Ния',
    collectionName: '№ 22м',
    date: '01.02.2017',
    issueNo: '433',
    state: '"ОТКЛ.Распорядите',
    $id: '1'
  },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    },
    {
        description: 'Для нового проекта необходимо пятьдесят пачек бумаги и покарсить здание в фиолетовый, а такаже прошу рассмотреть возможность личного секретаря',
        count: 4,
        budgetArticleType: 'канцелярские товары',
        issuer: 'Распорядитель IT',
        responsiblePerson: 'Хамза Хакимзаде Ния',
        collectionName: '№ 22м',
        date: '01.02.2017',
        issueNo: '433',
        state: '"ОТКЛ.Распорядите',
        $id: '1'
    }


];

@Injectable()
export class IssueMockData {
  private issuesList: Issue[] = issues;

  getIssues()/*: Observable<Issue[]>*/ {
    return this.issuesList;
   /* Observable.from([this.issuesList]);*/
  }

}
