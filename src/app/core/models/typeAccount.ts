export enum TypeAccount {
  CERTIFIED_DEPOSIT_TERM,
  CREDIT,
  CREDIT_CARD,
  CURRENT_ACCOUNT,
  DEPOSIT_ACCOUNT
}

export class Accounts{
  constructor() {
  }

  isTypeAcount(typeAccount: string, validateNumber: number) {
    return (TypeAccount[typeAccount] == validateNumber)
  }
}
