// export function saveChecks(storage: string, data: any) {
//   localStorage.setItem(storage, JSON.stringify(data));
// }

// Plans Interface
export interface Plans {
  planName: string;
  planReason: string;
  planValue: number;
  planStart: string;
  planEnd: string;
  planIsValue: number;
}
// Plans LocalStorage
export function savePlans(plans: any[]) {
  localStorage.setItem("plansStorage", JSON.stringify(plans));
}
export function loadPlans() {
  return JSON.parse(localStorage.getItem("plansStorage") || "[]");
}
// finishedPlans LocalStorage
export function saveFinishedPlans(plans: any[]) {
  localStorage.setItem("plansFinishedStorage", JSON.stringify(plans));
}
export function loadFinishedPlans() {
  return JSON.parse(localStorage.getItem("plansFinishedStorage") || "[]");
}
// Storage MoneyChecker Ausgabengesamt
export function saveSumChecks(sumChecks: number) {
  localStorage.setItem("sumChecksStorage", JSON.stringify(sumChecks));
}
export function loadSumChecks() {
  return JSON.parse(localStorage.getItem("sumChecksStorage") || "0");
}
// incomeList Interface
export interface incomeList {
  incomeWhat: string;
  incomeHowMuch: number;
}
// outcomeList Interface
export interface outcomeList {
  outcomeWhat: string;
  outcomeHowMuch: number;
}
// Checks Interface
export interface Checks {
  what: string;
  howMuch: number;
  when: string;
  payed: boolean;
}
// Checklist Localstorage
export function saveChecks(checks: any[]) {
  localStorage.setItem("checkStorage", JSON.stringify(checks));
}
export function loadChecks() {
  return JSON.parse(localStorage.getItem("checkStorage") || "[]");
}
// Settings Localstorage
// Income Storage
export function saveIncome(incomes: any[]) {
  localStorage.setItem("incomeStorage", JSON.stringify(incomes));
}
export function loadIncome() {
  return JSON.parse(localStorage.getItem("incomeStorage") || "[]");
}
// Outcome Storage
export function saveOutcome(outcomes: any[]) {
  localStorage.setItem("outcomeStorage", JSON.stringify(outcomes));
}
export function loadOutcome() {
  return JSON.parse(localStorage.getItem("outcomeStorage") || "[]");
}
