# ShareX Attack Tool

This tool was designed specifically to prove a flaw in many open source ShareX image hosts.

[x] figured out a way to null specific unnamed ShareX servers due to reasons that are native to with the way node handles file uploads.

Uploads need to be routed somewhere and typically are held in ram for some time during the upload process until the files are entirely uploaded and ready to be written to the disk. With that being said, this attack tool takes advantage of that by initiating a post for a handful of 1gb files at 1gbps speeds. When the server is fed multiple files of this nature, it stores them all in ram which will effectively cause a drive fault because docker will allow node to continue over-allocating ram.

This codebase was made for informational, educational, and inner-development testing purposes; it does not represent any malice of any kind.

## Instructions

- Install dependencies, preferably using yarn.
- Fill out config file
- Run `npm start` or start from `./src/`.
- Read da console logs, maybe open a network activity window to peep progress.

## Moral of the Story

- Always set upload limits on your web servers to prevent things like this! This ez project took me under 2 hours on a Wednesday morning at like 4am, imagine if someone actually dedicated wanted to exploit your services using a method like this.
