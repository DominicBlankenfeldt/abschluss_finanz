// export function saveChecks(storage: string, data: any) {
//   localStorage.setItem(storage, JSON.stringify(data));
// }

export function saveChecks(checks: any[]) {
  localStorage.setItem("checkStorage", JSON.stringify(checks));
}

export function loadChecks() {
  return JSON.parse(localStorage.getItem("checkStorage") || "[]");
}
