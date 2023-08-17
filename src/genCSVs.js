// \n

const fs = require("fs").promises;

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath);
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

async function convertToCSV(filePath) {
    try {
        const data = await fs.readFile(filePath);
        const lines = data.toString().split("\n\n");
        const jokes = [];
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].length !== 0) {
                jokes.push(lines[i].trim());
            }
        }

        const outputFile = "src/jokes.csv";
        let csvData = "id,joke\n";
        jokes.forEach((joke, index) => {
            const id = index + 1;
            const formattedJoke = joke.replace(/"/g, '""'); //looks for " quotes globally and replaces with "" so csv ingores commas in joke
            csvData += `"${id}","${formattedJoke}"\n`;
        });

        fs.writeFile(outputFile, csvData, "utf8", (err) => {
            if (err) {
                console.error("Error writing CSV file:", err);
            } else {
                console.log("CSV file created successfully.");
            }
        });
    } catch (error) {
        console.error(`Got an error converting the file: ${error.message}`);
    }
}

convertToCSV("src/jokes.txt");
