import {BudgetPosition} from './budget-position.model';
import {Deal} from './deal.model';

export class BudgetBaseDocument {
    constructor(documentNo: string,
                documentDate: string,
                supplier: string,
                responsiblePerson: string,
                approximateAmount: number,
                amount: number,
                payedAmount: number,
                utilizedAmount: number,
                budgetBaseDocumentState: string,
                budgetPositionList: BudgetPosition[],
                dealList: Deal[],
                $id?: string) {
    }

    // historyBudgetBaseDocument: HistoryBudgetBaseDocument[];
}
