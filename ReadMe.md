## ShareX Attack Tool

This tool was designed specifically to prove a flaw in many open source ShareX image hosts.

[WindowsCMD](https://github.com/windowsCMD) and [DylanJamesDev](https://github.com/dylanjamesdev) had figured out a way to null a server due to reasons that are native with the way node handles uploads. Uploads need to be routed somewhere and typically are held in ram for some time during the upload process until the files are entirely uploaded and ready to be written to the disk. With that being said, this attack tool takes advantage of that by initiating a post for a handful of 1gb files at 1gbps speeds. When the server is fed multiple files of this nature, it stores them all in ram which will effectively cause a drive fault because docker will allow node to continue over-allocating ram.

This codebase was made for informational, educational, and inner-development testing purposes; it does not represent any malice of any kind.

# Instructions

- Install dependencies, preferably using yarn.
- Fill out config file
- Run `npm start` or start from `./src/`.
- Read da console logs, maybe open a network activity window to peep progress.
