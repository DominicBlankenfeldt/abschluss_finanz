// export function saveChecks(storage: string, data: any) {
//   localStorage.setItem(storage, JSON.stringify(data));
// }

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
