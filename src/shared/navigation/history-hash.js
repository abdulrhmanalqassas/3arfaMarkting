export const historyHashChange = "arfa:history-hash-change";

export function getEntryNavigation() {
  const { navigation } = window;
  return navigation && "oncurrententrychange" in navigation ? navigation : undefined;
}
