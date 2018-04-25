import {BudgetBaseDocument} from '../shared/models/budget-base-document.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

const budgetBaseDocuments: BudgetBaseDocument[] = [
    {
        documentNo: 'no1',
        documentDate: '01.01.2018',
        supplier: 'Рога и Ко',
        responsiblePerson: 'Иванченко И.И.',
        approximateAmount: 55000.00,
        amount: 55000.00,
        payedAmount: 0.00,
        utilizedAmount: 0.00,
        budgetBaseDocumentState: 'Введен',
        budgetPositionList: [
            {
                $id: '11',
                budgetDate: '01.01.2018',
                comments: 'ПК для главбуха',
                realBudgetDate: '01.01.2018',
                mngResponsCenter: 'IT',
                division: 'ГБ',
                count: 5,
                measure: 'шт',
                budgetArticle: 'ПК',
                approximateAmount: 50000.00,
                amount: 50000.00,
                payedAmount: 0.00,
                utilizedAmount: 0.00,
                budgetPositionState: 'Введен'
            },
            {
                $id: '12',
                budgetDate: '01.01.2018',
                comments: 'ПК для пупкина',
                realBudgetDate: '01.01.2018',
                mngResponsCenter: 'IT',
                division: 'ГБ',
                count: 1,
                measure: 'шт',
                budgetArticle: 'ПК',
                approximateAmount: 5000.00,
                amount: 5000.00,
                payedAmount: 0.00,
                utilizedAmount: 0.00,
                budgetPositionState: 'Введен'
            }
        ],
        dealList: [{
            $id: '1',
            dealno: 'dealno-1',
            dealDate: '05.01.2018'
        }],
        $id: '1'
    },
    {
        documentNo: 'no2',
        documentDate: '01.02.2018',
        supplier: 'ООО Ника',
        responsiblePerson: 'Иванченко И.И.',
        approximateAmount: 55000.00,
        amount: 55000.00,
        payedAmount: 0.00,
        utilizedAmount: 0.00,
        budgetBaseDocumentState: 'Введен',
        budgetPositionList: [
            {
                $id: '13',
                budgetDate: '01.02.2018',
                comments: 'ПК для главбуха',
                realBudgetDate: '01.02.2018',
                mngResponsCenter: 'IT',
                division: 'ГБ',
                count: 5,
                measure: 'шт',
                budgetArticle: 'ПК',
                approximateAmount: 50000.00,
                amount: 50000.00,
                payedAmount: 0.00,
                utilizedAmount: 0.00,
                budgetPositionState: 'Введен'
            },
            {
                $id: '14',
                budgetDate: '01.02.2018',
                comments: 'ПК для пупкина',
                realBudgetDate: '01.02.2018',
                mngResponsCenter: 'IT',
                division: 'ГБ',
                count: 1,
                measure: 'шт',
                budgetArticle: 'ПК',
                approximateAmount: 5000.00,
                amount: 5000.00,
                payedAmount: 0.00,
                utilizedAmount: 0.00,
                budgetPositionState: 'Введен'
            }
        ],
        dealList: [{
            $id: '2',
            dealno: 'dealno-2',
            dealDate: '05.02.2018'
        }],
        $id: '2'
    },
    {
        documentNo: 'no3',
        documentDate: '01.03.2018',
        supplier: 'Рога и Ко',
        responsiblePerson: 'Иванченко И.И.',
        approximateAmount: 55000.00,
        amount: 55000.00,
        payedAmount: 0.00,
        utilizedAmount: 0.00,
        budgetBaseDocumentState: 'Введен',
        budgetPositionList: [
            {
                $id: '15',
                budgetDate: '01.03.2018',
                comments: 'ПК для главбуха',
                realBudgetDate: '01.01.2018',
                mngResponsCenter: 'IT',
                division: 'ГБ',
                count: 5,
                measure: 'шт',
                budgetArticle: 'ПК',
                approximateAmount: 50000.00,
                amount: 50000.00,
                payedAmount: 0.00,
                utilizedAmount: 0.00,
                budgetPositionState: 'Введен'
            },
            {
                $id: '16',
                budgetDate: '01.03.2018',
                comments: 'ПК для пупкина',
                realBudgetDate: '01.03.2018',
                mngResponsCenter: 'IT',
                division: 'ГБ',
                count: 1,
                measure: 'шт',
                budgetArticle: 'ПК',
                approximateAmount: 5000.00,
                amount: 5000.00,
                payedAmount: 0.00,
                utilizedAmount: 0.00,
                budgetPositionState: 'Введен'
            }
        ],
        dealList: [{
            $id: '3',
            dealno: 'dealno-3',
            dealDate: '05.03.2018'
        }],
        $id: '3'
    }
];

@Injectable()
export class BudgetBaseDocumentMockData {
    private budgetBaseDocumentList: BudgetBaseDocument[] = budgetBaseDocuments;

    getBudgetBaseDocuments(): Observable<BudgetBaseDocument[]> {
        return Observable.from([this.budgetBaseDocumentList]);
    }

}