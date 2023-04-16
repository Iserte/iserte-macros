-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "mac" TEXT,
    "name" TEXT,
    "discord" TEXT,
    "whatsapp" TEXT,
    "expiresIn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("discord", "key", "mac", "name", "whatsapp") SELECT "discord", "key", "mac", "name", "whatsapp" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
