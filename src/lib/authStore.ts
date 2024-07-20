// authStore.js
import { writable } from "svelte/store";

// Create a writable store for user authentication status
export const isAuthenticated = writable(false);
