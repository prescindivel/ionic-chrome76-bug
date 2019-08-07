type SettingsType = {
  general: {
    cacheEnabled: boolean;
  };
  measurement: {
    selectAllServicesEnabled: boolean;
  };
  sync: {
    backgroundModeEnabled: boolean;
    timeInterval: 10 | 30 | 60; // in minutes
  }
}

type SelectableItemType<T> = {
  selected: boolean;
  isDismiss: boolean;
} & T;

type StateItemType = {
  name: string;
  icon: string;
  color: string;
}

//#region Filters types
type PageParamType = {
  pageNumber?: string;
  pageSize?: string;
  newerThan?: string;
}

type SortingParamType = {
  sort?: string;
}

type FilterPeriodType = {
  first?: string;
  second?: string;
}

type FilterBasicParamType = PageParamType & SortingParamType & {
  period?: FilterPeriodType;
  costCenter?: CostCenterFilterType;
}

type CostCenterFilterType = {
  companyId: string;
  affiliateId: string;
  id: string;
  name?: string;
}

type ShoppingRequestFilterType = FilterBasicParamType & {
  isCompleted?: boolean;
  costCenterRequestId?: number;
  authorizationStatus?: "" | "A" | "R";
}

type ShoppingRequestItemFilterType = FilterBasicParamType & {
  authorizationStatus?: "" | "A" | "R";
  costCenterRequestId?: number;
  rawMaterialId?: number;
  isCompleted?: boolean;
}

type PurchaseOrderFilterType = FilterBasicParamType & {
  authorizationStatus?: "" | "A" | "R" | 'any';
  costCenterOrderId?: number;
}

type EntryDocumentFilterType = FilterBasicParamType & {
  isCompleted?: boolean;
  costCenterReceiptNoticeId?: number;
  documentNumber?: string;
}

type AuthorizationPaymentFilterType = FilterBasicParamType & {
  isPayPending?: boolean;
  isPastDue?: boolean;
  authorizationStatus?: '' | 'AP' | 'any'; // AP = Aprovado
  entryDocumentDocumentNumber?: string;
  creditorId?: string;
  creditorSocialName?: string;
}

type ProjectPlanningItemFilterType = PageParamType & {
  costCenter?: CostCenterFilterType;
}

type ProjectBudgetPlanningItemFilterType = PageParamType & {
  period?: FilterPeriodType;
  projectPlanningId?: number;
  projectBudgetId?: number;
  projectPlanningItemId?: number;
  includeCompleted?: boolean;
  projectBudgetSpreadsheetId?: number;
}

type ProjectBudgetPlanningItemEvolutionFilterType = PageParamType & {
  period?: FilterPeriodType;
  projectPlanningId?: number;
  projectPlanningItemId?: number;
  projectBudgetId?: number;
  projectPlanningBudgetId?: number;
  includeCompleted?: boolean;
  projectBudgetPlanningItemId?: number;
}
//#endregion

//#region Authorization types
type IdentityType = {
  userId: number;
  name: string;
  email: string;
  picture: string;
  username: string;
  firstName: string;
  secondName: string;
  lastName: string;
  nickname: string;
  phone: string;
  cpf: string;
  clientId: string;
  clientUrl: string;
  clientName: string;
}

type JwtClaimType = {
  id: string;
  sub: string;
  cpf: string;
  name: string;
  scope: string[];
  exp: string;
  authorities: string[];
  jti: string;
  client_id: string;
  client_name: string;
  client_uri: string;
  email: string;
  email_verified: boolean;
  phone_number: string;
  phone_number_verified: boolean;
  picture: string;
  given_name: string;
  middle_name: string;
  family_name: string;
  nickname: string;
  preferred_username: string;
  aud: string;
  iss: string;
  nbf: string;
  updated_at: string;
  iat: string;
  idp: string;
}

type OauthTokenType = {
  access_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
}

type RefreshOauthTokenType = {
  id_token: string;
  access_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
}
//#endregion

//#region Commom types
type IdNameType = {
  id: string;
  name: string;
}

type QRLocationParamType = {
  Empresa_Cod: string;
  Filial_Cod: string;
  Centro_Cod: string;
  UC_Numero: string;
  LP_Numero: string;
}

type ItemSelectSearchType = {
  value: any;
  label: string;
}

type PageResultType<T> = {
  results: T[];
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
}

type AuditType = {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

type RawMaterialType = {
  id: number;
  name: string;
  unit: string;
}

type RawMaterialSubType = {
  id: number;
  name: string;
}

type BackdropPromptType = {
  text: string;
  isShow: boolean;
}

type AccountMinimalType = {
  id: number;
  name: string;
  firstName: string;
  secondName: string;
  lastName: string;
  nickname: string;
  cpf: string;
  phone: string;
  avatar?: string;
  enabled: boolean;
  verified: boolean;
}

type AccountRegisterType = {
  cpf: string;
  phone: string;
  email?: string;
  password: string;
}

type AccountForgotPasswordType = {
  cpf: string;
  token: string;
  password: string;
}

type AccountVerifyType = {
  cpf: string;
  token: string;
}

type CompanyStoreType = {
  clientId: string;
  clientName: string;
  clientUri: string;
  logoUrl?: string;
}

type VerifyTokenAccountType = {
  Cpf: string;
  Token: string;
}

type CostCenterType = {
  id: string;
  companyId: string;
  affiliateId: string;
  name: string;
  changedAt: string;
}

type CostCenterExcludeType = {
  id: string;
  companyId: string;
  affiliateId: string;
  excludedAt: string;
}

type CostCenterConstraintKeyType = {
  companyId: string;
  affiliateId: string;
  costCenterId: string;
}

type AuthorizationType = {
  status: 'A' | 'AP' | 'R' | ''; // AProvado; Reprovado; Pendente
  updatedAt: string;
  username: string;
}
//#endregion

//#region Engineering types
type EngineeringTeamType = CostCenterConstraintKeyType & {
  id: string;
  name: string;
  isAdmin: boolean;
  changedAt: string;
}

type EngineeringTeamExcludeType = CostCenterConstraintKeyType & {
  id: string;
  excludedAt: string;
}

type EngineeringEmployeeTeamType = CostCenterConstraintKeyType & {
  yearMonth: string;
  factor: number;
  employeeId: number;
  teamId: string;
}

type EngineeringEmployeeType = CostCenterConstraintKeyType & {
  id: number;
  yearMonth: string;
  name: string;
  avatar?: string;
  office: EngineeringJobTitleType;
  changedAt: string;
}

type EngineeringEmployeeExcludeType = CostCenterConstraintKeyType & {
  id: number;
  yearMonth: string;
  excludedAt: string;
}

type EngineeringJobTitleType = IdNameType & {}

type EngineeringOrderType = CostCenterConstraintKeyType & {
  id: number;
  teamId: string;
  date: string;
  changedAt: string;
}

type EngineeringOrderExcludeType = {
  id: number;
  excludedAt: string;
}

type EngineeringServiceType = {
  id: number;
  name: string;
  quantity?: number;
  executionTerm: EngineeringExecutionTermType;
  rawMaterial: RawMaterialType;
  constructiveUnity: EngineeringConstructiveUnityType;
  productionLocation: EngineeringProductionLocationType;
  serviceOrders: EngineeringServiceOrderType[];
  measured: number;
  unitPrice?: number;
  unitPriceBudgeted?: number;
  price?: number;
  changedAt: string;
  measurementServiceToken: string;
}

type EngineeringServiceExcludeType = {
  id: number;
  executionTermId: number;
  excludedAt: string;
}

type EngineeringExecutionTermType = CostCenterConstraintKeyType & {
  id: number;
  type: 'P' | 'C';
  date: string;
}

type EngineeringConstructiveUnityType = {
  id: number;
  name: string;
  changedAt: string;
}

type EngineeringConstructiveUnityExcludeType = {
  id: number;
  excludedAt: string;
}

type EngineeringProductionLocationType = {
  id: number;
  name: string;
  constructiveUnities: EngineeringConstructiveUnityType[];
  changedAt: string;
}

type EngineeringProductionLocationExcludeType = {
  id: number;
  excluidedAt: string;
}

type EngineeringMeasurementServiceType = {
  id: number;
  measurementId: number;
  orderId: number;
  executionTermId: number;
  serviceOrderId: number;
  serviceId: number;
  quantity: number;
}

type EngineeringNewMeasurementServiceType = {
  orderId: number;
  executionTermId: number;
  serviceOrderId: number;
  serviceId: number;
  quantity: number;
  serviceMeasurementServiceToken: string;
}

type EngineeringMeasurementEmployeeType = {
  measurementId: number;
  teamId: string;
  employeeId: number;
  factor?: number;
  factorAndTeam?: number;
  amount?: number;
  employeeProduction: number;
}

type EngineeringMeasurementType = CostCenterConstraintKeyType & {
  id: number;
  date: string;
  teamId: string;
  isAdmin: boolean;
  changedAt: string;
  executionTermId: number;
  measurementServices?: EngineeringMeasurementServiceType[];
  measurementEmployees?: EngineeringMeasurementEmployeeType[];
}

type EngineeringMeasurementExcludeType = {
  id: number;
  excludedAt: string;
}

type EngineeringNewMeasurementType = CostCenterConstraintKeyType & {
  executionTermId: number;
  isAdmin: boolean;
  teamId: string;
  measurementServices: EngineeringNewMeasurementServiceType[];
  measurementEmployees: EngineeringNewMeasurementEmployeeType[];
}

type EngineeringServiceOrderType = {
  id: number;
  orderId: number;
  executionTermId: number;
  serviceId: number;
}

type EngineeringServiceOrderExcludeType = {
  id: number;
  orderId: number;
  excludedAt: string;
}

type EngineeringNewMeasurementEmployeeType = {
  teamId: string;
  employeeId: number;
  factor: number;
}

type EngineeringBeaconKeyType = {
  id: string;
  major: number;
  minor: number;
}

type EngineeringNewBeaconType = EngineeringBeaconKeyType & CostCenterConstraintKeyType & {
  constructiveUnityId: number;
  ProductionLocationId: number;
  Latitude?: number;
  Longitude?: number;
}

type EngineeringBeaconLocationType = EngineeringBeaconKeyType & CostCenterConstraintKeyType & {
  constructiveUnity: EngineeringConstructiveUnityType;
  productionLocation: EngineeringProductionLocationType;
  Latitude?: number;
  Longitude?: number;
  changedAt: string;
}

type EngineeringProjectPlanningType = {
  id: number;
  comment: string;
  projectId: number;
  projectBudgetId: number;
  isSelected: boolean,
  referenceDate: string
}

type EngineeringProjectPlanningItemType = {
  id: number;
  projectPlanningId: number;
  projectId: number;
  projectBudgetId: number;
  projectBudgetSpreadsheetId: number;
  item: string;
  name: string;
  numberUnities: number;
  dateInit: string;
  dateEnd: string;
}

type EngineeringProjectBudgetPlanningItemType = {
  id: number;
  parentId: number;
  projectId: number;
  projectPlanningBudgetId: number;
  projectBudgetId: number;
  projectBudgetSpreadsheetId: number;
  projectPlanningId: number;
  projectPlanningItemId: number;
  projectBudgetaryItemId: number;
  description: string;
  unit: string;
  order: string;
  centralOrder: string;
  lastPointing: string;
  percentProduced: number;
  quantityProduced: number;
  quantityBudgeted: number;
  amountBudgeted: number;
  changedAt: string;
  evolutionToken: string;
}

type EngineeringProjectBudgetPlanningItemEvolutionType = {
  id: number;
  projectBudgetId: number;
  projectPlanningBudgetId: number;
  projectPlanningBudgetItemId: number;
  producedAt?: string;
  percent?: number;
  quantity?: number;
  changedAt: string;
}

type EngineeringRemoveProjectBudgetPlanningItemEvolutionType = {
  id: number;
  projectBudgetId: number;
  projectPlanningBudgetId: number;
  projectPlanningBudgetItemId: number;
  projectPlanningBudgetItemEvolutionToken: string;
}

//#endregion

//#region Supply types
//#region ShoppingRequest types
type ShoppingRequestType = CostCenterConstraintKeyType & {
  id: number;
  costCenterRequestId: number;
  companyId: string;
  affiliateId: string;
  costCenterId: string;
  date: string;
  isCompleted: boolean;
  completedAt: string;
  completedBy: string;
  requestorId: string;
  audit: AuditType;
  requestor: {
    id: string;
    name: string;
  }
  items?: ShoppingRequestItemType[];
  costCenterName?: string;
}

type ShoppingRequestItemType = {
  id: number;
  description?: string;
  complementarySpecification?: string;
  item: string;
  companyId: string;
  affiliateId: string;
  costCenterId: string;
  shoppingRequestId: number;
  shoppingRequestCostCenterRequestId: number;
  shoppingRequestDate?: string;
  shoppingRequestIsCompleted?: boolean;
  shoppingRequestRequestor?: {
    id: string;
    name: string;
  };
  quantity: string;
  status: "AB" | "CO" | "PE" | "AR"; // ABerto; COleta; PEdido Aviso de Recebimento
  projectId: string;
  projectBudgetId: string;
  deliveryAt: string;
  authorization: AuthorizationType;
  rawMaterial: RawMaterialType;
  costCenterName?: string;
  state?: {
    name: string;
    icon: string;
    color: string;
  }
}

// Engineering Budget Spreadsheet
type EngineeringBudgetSpreadsheetType = {
  name: string;
  projectId: number;
  projectPlanningId: number;
  projectBudgetId: number;
  projectBudgetSpreadsheetId: number;
  items: EngineeringBudgetSpreadsheetItemType[];
}

type EngineeringBudgetSpreadsheetItemType = {
  name: string;
  projectBudgetaryItemId: number;
  parentId: number;
  order: string;
  children: EngineeringBudgetSpreadsheetItemType[];
  rawMaterials: EngineeringBudgetSpreadsheetItemRawMaterialType[];
  quantityBudgeted: number;
  quantityRequested: number;
  valueBudgeted: number;
  valueRequested: number;
}

type EngineeringBudgetSpreadsheetItemRawMaterialType = {
  rawMaterialId: number;
  name: string;
  unit: string;
  quantityBudgeted: number;
  quantityRequested: number;
  valueBudgeted: number;
  valueRequested: number;
}

type EngineeringBudgetSpreadsheetPointingProductionType = {
  id: number;
  parentId: number;
  projectId: number;
  projectPlanningBudgetId: number;
  projectBudgetId: number;
  projectBudgetSpreadsheetId: number;
  projectPlanningId: number;
  projectBudgetaryItemId: number;
  description: string;
  unit?: string;
  order: string;
  percentProduced: number;
  quantityProduced: number;
  quantityBudgeted: number;
  amountBudgeted?: number;
  lastPointing?: string;
  changedAt: string;
  children: EngineeringBudgetSpreadsheetPointingProductionType[];
  newQuantityProduced?: number;
  pointingDate?: any;
}

type EngineeringNewProjectBudgetPlanningItemEvolutionType = {
  projectBudgetId: number;
  projectPlanningBudgetId: number;
  projectPlanningBudgetItemId: number;
  producedAt: string;
  percent: number;
  quantity: number;
  projectPlanningBudgetItemEvolutionToken: string;
}

type EngineeringUpdateProjectBudgetPlanningItemEvolutionType = {
  id: number;
  projectBudgetId: number;
  projectPlanningBudgetId: number;
  projectPlanningBudgetItemId: number;
  projectPlanningBudgetItemEvolutionToken: string;
  producedAt: string;
  percent: number;
  quantity: number;
}

type EngineeringProjectPlanningItemExcludeType = {
  id: number;
  projectPlanningId: number;
  excludedAt: string;
}

type EngineeringProjectBudgetPlanningItemExcludeType = {
  id: number;
  projectPlanningBudgetId: number;
  excludedAt: string;
}

type EngineeringProjectBudgetPlanningItemEvolutionExcludeType = {
  id: number;
  projectBudgetId: number;
  projectPlanningBudgetId: number;
  projectPlanningBudgetItemId: number;
  excludedAt: string;
}

//#endregion

//#region PurchaseOrder types
type PurchaseOrderType = CostCenterConstraintKeyType & {
  id: number;
  costCenterOrderId: number;
  creditorId: string;
  creditorSocialName: string;
  audit: AuditType;
  authorization: AuthorizationType;
  date: string;
  dateFinal: string;
  note: string;
  internalNote: string;
  isCompleted: boolean;
  completedAt: string;
  completedBy: string;
  sentEmailAt: string;
  sentEmailBy: string;
  isForwarded: boolean;
  quantityApproved: number;
  quantityRequiredApprovals: number;
  value: number;
  costCenterName?: string;
  state?: {
    name: string;
    icon: string;
    color: string;
  }
}

type PurchaseOrderItemType = {
  orderId: number;
  shoppingRequestId: number;
  shoppingRequestItemId: number;
  rawMaterialName: string;
  complementarySpecification: string;
  mark: string;
  quantity: number;
  status: string;
  deliveryAt: string;
  rawMaterialValue: number;
  value: number;
  taxRateIPI: number;
  shipping: number;
}
//#endregion

//#region EntryDocument types
type EntryDocumentType = CostCenterConstraintKeyType & {
  id: number;
  creditorId: string;
  creditorSocialName: string;
  receiptNotice?: ReceiptNoticeType;
  authorization: AuthorizationType;
  audit: AuditType;
  type: string;
  entryDocumentTypeId: string;
  documentComplement: string
  documentNumber: string;
  documentSerie: string;
  documentDate: string;
  documentAmount: number;
  amountClassify?: number;
  amountDiscount?: number;
  amountWithheld?: number;
  amountExtra?: number;
  nature: string;
  enteredAt: string;
  registeredAt?: string;
  isCompleted?: boolean;
  completedAt?: string;
  completedBy?: string;
  dueDate?: string;
  note?: string;
  costCenterName?: string;
  items?: EntryDocumentItemType[];
}

type ReceiptNoticeType = CostCenterConstraintKeyType & {
  id: number;
  costCenterReceiptNoticeId: number;
  date: string;
  registeredAt: string;
  creditorId: string;
  creditorSocialName: string;
  type: string;
  entryDocumentTypeId: string;
  note: string;
}

type EntryDocumentItemType = {
  id: number;
  entryDocumentId: number;
  orderId: number;
  orderItemId: number;
  shoppingRequestId: number;
  shoppingRequestItemId: number;
  rawMaterial: RawMaterialType;
  quantity: number;
  unitPrice: number;
  amount: number;
  taxRateIPI: number;
  shipping: number;
  specification: string;
  unity: string;
  projectId: number;
  projectBudgetId: number;
  rawMaterialSub: RawMaterialSubType;
  unitPriceSpecified: number;
  averageReadjustmentApportioned: number;
  averageWithheldApportioned: number;
  averageDiscountApportioned: number;
  averageMaterialSuppliedApportioned: number;
  taxAmountIPI: number;
  taxRateIPISpecified: number;
  taxAmountIPISpecified: number;
  amountPlusTaxAmountIPI: number;
  amountPlusTaxAmountIPISpecified: number;
  amountToClassify: number;
  fullAmount: number;
  fullUnitPrice: number;
  amountDiscountApportioned: number;
  amountAccruedApportioned: number;
  quantityReceived: number;
  amountDivergence: number;
  shippingApportioned: number;
  productAmount: number;
  amountSpecified: number;
  productDiscount: number;
}
//#endregion

//#region AuthorizationPayment types
type AuthorizationPaymentSpecieType = IdNameType & {}
type AuthorizationPaymentTypeDocumentType = IdNameType & {}

type AuthorizationPaymentType = CostCenterConstraintKeyType & {
  id: number;
  entryDocumentId: number;
  entryDocumentTypeId: string;
  creditorId: string;
  creditorSocialName: string;
  amount: number;
  amountExtra: number;
  amountDiscount: number;
  amountDiscountAdvance: number;
  amountOriginal: number;
  amountPaid: number;
  netAmount: number;
  dueDate: string;
  installment: number;
  subInstallment: number;
  totalInstallment: number;
  agenda: string;
  paidDocumentDate: string;
  paidAt: string;
  documentNumber: number;
  status: 'A' | 'L';
  isPayPending: boolean;
  dueDateOriginal: string;
  issueDate: string;
  entryDate: string;
  dueDateFlow: string;
  numberNegotiations: number;
  note: string;
  penalty: string;
  authorization: AuthorizationType;
  financialCharges: number;
  quantityRequiredApprovals: number;
  quantityApproved: number;
  isPreDated: boolean;
  financialStatementNumber: string;
  daysLate: number;
  specie: AuthorizationPaymentSpecieType;
  typePaymentDocument: AuthorizationPaymentTypeDocumentType;
  financialNatureId?: string;
  financialNatureName?: string;
  costCenterName?: string;
  audit?: AuditType;
  advanceBalance: number;
}

type AuthorizationPaymentSummaryType = {
  amountPending: number;
  amountPreDated: number;
  amountApproved: number;
  amount: number;
}
//#endregion

//#region GED
type FileWrapperType = {
  file: File;
}

type GedDocumentItemType = {
  fileWrapper: FileWrapperType;
  note?: string;
  isHighlighted?: boolean;
}

type GedDocumentToGenericType = {
  id: number;
  items: GedDocumentItemType[];
}

type GedDocumentToCreditorType = GedDocumentToGenericType & {
  creditorId: string;
}

type GedDocumentToEnterpriseType = GedDocumentToGenericType & {
  companyId: string;
  affiliateId: string;
  enterpriseId: number;
}

type GedDocumentToRawMaterialType = GedDocumentToGenericType & {
  rawMaterialId: number;
}

type GedDocumentToEngineeringBillingType = GedDocumentToGenericType & {
  billingId: number;
}

type GedDocumentToEngineeringContractOutsourceType = GedDocumentToGenericType & {
  executionTermId: number;
}

type GedDocumentToRealEstateContractType = GedDocumentToGenericType & {
  companyId: string;
  affiliateId: string;
  enterpriseId: number;
  sequential: string;
  contractId: string;
}

type GedDocumentToRealEstateReservationType = GedDocumentToGenericType & {
  companyId: string;
  affiliateId: string;
  enterpriseId: number;
  reservationId: number;
}

type GedDocumentToRealEstateCustomerBorrowerType = GedDocumentToGenericType & {
  customerBorrowerId: number;
}

type GedDocumentToRealEstateCustomerAttendanceType = GedDocumentToGenericType & {
  companyId: string;
  affiliateId: string;
  enterpriseId: number;
  customerAttendanceId: number;
}

type GedDocumentToRealEstateCustomerRequestType = GedDocumentToGenericType & {
  companyId: string;
  affiliateId: string;
  enterpriseId: number;
  customerAttendanceId: number;
}

type GedDocumentToSupplyPurchaseOrderType = GedDocumentToGenericType & {
  orderId: number;
}

type GedDocumentToSupplyEntryDocumentType = GedDocumentToGenericType & {
  entryDocumentId: number;
}

type GedDocumentToSupplyShoppingRequestType = GedDocumentToGenericType & {
  shoppingRequestId: number;
}

type GedDocumentToSupplyPriceCollectionSupplierType = GedDocumentToGenericType & {
  priceCollectionId: number;
  priceCollectionSupplierId: number;
}
//#endregion

type QRCreditorParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Cre_Cod: string,
}

type QREnterpriseParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Empresa_Cod: string;
  Filial_Cod: string;
  EImo_Numero: number;
}

type QRRawMaterialParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Insumo_Cod: number;
}

type QREngineeringBillingParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Fat_Numero: number;
}

type QREngineeringContractOutsourceParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Contrato_Execucao: number;
}

type QRRealEstateContractParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Empresa_Cod: string;
  Filial_Cod: string;
  EImo_Numero: number;
  Contrato_Seq: string;
  Contrato_Numero: string;
}

type QRRealEstateCustomerAttendanceParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Empresa_Cod: string;
  Filial_Cod: string;
  EImo_Numero: number;
  Atendimento_Numero: number;
}

type QRRealEstateCustomerBorrowerParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Cli_Cod: number;
}

type QRRealEstateCustomerRequestParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Empresa_Cod: string;
  Filial_Cod: string;
  EImo_Numero: number;
  Atendimento_Numero: number;
}

type QRRealEstateReservationParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Empresa_Cod: string;
  Filial_Cod: string;
  EImo_Numero: number;
  Reserva_Numero: number;
}

type QRSupplyEntryDocumentParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Ent_Numero: number;
}

type QRSupplyPriceCollectionSupplierParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Coleta_Numero: number;
  ColForn_Numero: number;
}

type QRSupplyPurchaseOrderParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Pedido_Numero: number;
}

type QRSupplyShoppingRequestParamType = {
  DocDig_Numero: number;
  EntidadeId: QRScannerEntityEnum,
  Solic_Numero: number;
}
//#endregion

//#region Intro
type IntroItemType = {
  title: string;
  description: string;
  attachTo?: string;
  scrollTo?: any,
}

type IntroButtonType = {
  text: string;
  classes?: string;
  action: any;
}
//#endregion
