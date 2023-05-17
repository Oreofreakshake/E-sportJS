/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `Staff` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Staff_password_key" ON "Staff"("password");
