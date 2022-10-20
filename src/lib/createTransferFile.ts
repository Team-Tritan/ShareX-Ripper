"use strict"

import * as process from "child_process";
import { v4 as uuidv4 } from "uuid";
import log from "./logger";

export default function createTransferFile(size: string) { // 1gb, 500mb, etc
  let name = uuidv4();

  process.exec(
    `fallocate -l ${size} ./tmp/${name}.jpg`,
    (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.error(`Error creating file: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error creating file: ${stderr}`);
      }
      log(`1gb file created ./tmp/${name}.jpg`);
    }
  );

  return name + ".jpg";
}
