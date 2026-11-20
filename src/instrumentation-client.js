import { getEntryNavigation, historyHashChange } from "@/shared/navigation/history-hash";

if (!getEntryNavigation()) {
  // Install the fallback before the App Router wraps the history methods.
  for (const method of ["pushState", "replaceState"]) {
    const updateHistory = window.history[method];
    window.history[method] = function (...args) {
      const previousHash = window.location.hash;
      const result = updateHistory.apply(this, args);
      if (window.location.hash !== previousHash) {
        window.dispatchEvent(new Event(historyHashChange));
      }
      return result;
    };
  }
}
