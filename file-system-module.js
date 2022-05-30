const fs = require("fs");
const path = require("path");

// console.log(__dirname); // return the full current directory path
// console.log(__filename); // return the full current file path

// Same as stat(), but synchronous instead of asynchronous
const status = fs.statSync("./file-system-module.js");
// console.log(status); 
const fileStatus = fs.statSync(__filename);
// console.log(fileStatus);
 
/* ===================================================================================== */

// 	Same as readFile(), but synchronous instead of asynchronous
const readSyncFile = fs.readFileSync("./new.txt");
// console.log(readSyncFile.toString());
 
const readSyncFile2 = fs.readFileSync("./new.txt","utf-8");
// console.log(readSyncFile2);

/* ===================================================================================== */

//	readFile(), Reads the content of a file.
/* fs.readFile("./new.txt", "utf-8", (err,data) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(data);
    }
}) */

/* ===================================================================================== */

//open(), Opens a file.

/* fs.open(path.join(__dirname, "new.txt"), "r", (err,fd) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(fd);
        fs.close(fd);
    }
}) */

/* ===================================================================================== */

//open(), Opens a file. read(), Reads the content of a file.

/* fs.open(path.join(__dirname, "new.txt"), "r", (err, fd) => {
    if (err) {
        console.log(err.message);
    } else {
        fs.read(fd, (err, byteRead, arrayBufferView) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(arrayBufferView.toString());
            }
        })
        fs.close(fd);
    }
}) */

/* ===================================================================================== */

// unlink(), Removes a link

/* fs.unlink(path.join(__dirname, "delete.txt"), (err) => {
    // if (err) throw err;
    if (err) {
        console.log(err.message);
    } else {
        console.log("delete.txt deleted successfully");
    }
}); */

/* ===================================================================================== */

// writeFile(), Writes data to a file

/* const data = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores corporis saepe, molestiae architecto vero laudantium non molestias, facilis, nam similique in repellat delectus veritatis fugit iste debitis omnis quod?";

fs.writeFile("./NewText.txt", data, (err) => {
    // if (err) throw err;
    if (err) {
        console.log(err.message);
    } else {
        console.log("File created successfully....!");
    }
}) */

/* ===================================================================================== */

// appendFile(), Appends data to a file

/* const data = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores corporis saepe, molestiae architecto vero laudantium non molestias, facilis, nam similique in repellat delectus veritatis fugit iste debitis omnis quod?"

 fs.appendFile("./NewText2.txt", data, (err) => {
    // if (err) throw err;
    if (err) {
        console.log(err.message);
    } else {
        console.log("File created successfully....!");
    }
}) */

/* ===================================================================================== */

//mkdir(), Makes a new directory

/* fs.mkdir("./NewFolder", (err) => {
    // if (err) throw err;
    if (err) {
        console.log(err.message);
    } else {
        console.log("Folder created successfully....!");
    }
}) */

/* ===================================================================================== */