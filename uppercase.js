let fs = require("fs");

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, "UTF8", (error, data) => {
        if (error) throw error;

        fs.writeFile("uppercase.txt", data.toUpperCase(), (error) => {
                if (error) throw error;

                console.log("Successfully generated file.");
        })
});