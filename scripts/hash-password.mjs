/**
 * Generate bcrypt hash for a client password.
 * Run: node scripts/hash-password.mjs "your-password"
 * Copy the output into the client's passwordHash field in Sanity Studio.
 */
import { hash } from "bcryptjs";

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "your-password"');
  process.exit(1);
}

const hashResult = await hash(password, 10);
console.log(hashResult);
