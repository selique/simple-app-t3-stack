/*
  Warnings:

  - You are about to drop the column `quantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Proposal` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Proposal` table. All the data in the column will be lost.
  - Made the column `name` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Proposal` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" TEXT NOT NULL,
    "image" TEXT,
    "category" TEXT,
    CONSTRAINT "Product_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("category", "description", "id", "image", "name", "price") SELECT "category", "description", "id", "image", "name", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_Proposal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT,
    "price" TEXT NOT NULL,
    CONSTRAINT "Proposal_id_fkey" FOREIGN KEY ("id") REFERENCES "Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Proposal" ("description", "id", "price") SELECT "description", "id", "price" FROM "Proposal";
DROP TABLE "Proposal";
ALTER TABLE "new_Proposal" RENAME TO "Proposal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
