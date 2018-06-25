export class Issue {
  public constructor(
              public description: string,
              public count: string,
              public budgetArticleType: string,
              public issuer: string,
              public responsiblePerson: string,
              public collectionName: string,
              public date: string,
              public issueNo: string,
              public state: string,
              public id?: string
  ) {
  }
}
