/**
 * Master admin for reports dashboard.
 * Creates the password hash and prints values to paste in Sanity Studio.
 *
 * Run: node scripts/seed-admin-client.mjs
 *
 * Then in Sanity Studio create a new "Client" with:
 *   Name:         Admin
 *   Slug:         admin
 *   Email:        rusbenmadrigal@gmail.com
 *   Password hash: (the hash printed below)
 */
import { hash } from "bcryptjs";

const ADMIN = {
  name: "Admin",
  slug: "admin",
  email: "rusbenmadrigal@gmail.com",
  password: "ReportsAdmin2025!",
};

const passwordHash = await hash(ADMIN.password, 10);

console.log("--- Master admin for /reports ---\n");
console.log("In Sanity Studio create a Client with:\n");
console.log("  Name:         ", ADMIN.name);
console.log("  Slug:         ", ADMIN.slug);
console.log("  Email:        ", ADMIN.email);
console.log("  Password hash:\n  ", passwordHash);
console.log("\nThen log in at http://localhost:3000/reports/login with:");
console.log("  Email:    ", ADMIN.email);
console.log("  Password: ", ADMIN.password);
