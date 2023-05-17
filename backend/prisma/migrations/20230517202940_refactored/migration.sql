/*
  Warnings:

  - You are about to drop the `Accept` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Accept_email_key";

-- DropIndex
DROP INDEX "Accept_NID_key";

-- DropIndex
DROP INDEX "Reject_email_key";

-- DropIndex
DROP INDEX "Reject_NID_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Accept";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Reject";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "NID" TEXT NOT NULL,
    "DOB" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL DEFAULT false,
    "isReject" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Post" ("DOB", "NID", "createdAt", "email", "faculty", "id", "name", "number") SELECT "DOB", "NID", "createdAt", "email", "faculty", "id", "name", "number" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_NID_key" ON "Post"("NID");
CREATE UNIQUE INDEX "Post_email_key" ON "Post"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
