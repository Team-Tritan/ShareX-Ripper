"use strict";

export default function logger(x: any) {
  let timestamp = Date.now();
  let readableDateTime = new Date(timestamp).toLocaleString();
  // @ts-ignore
  return console.log(`[${readableDateTime}] --> ${x}`);
}
