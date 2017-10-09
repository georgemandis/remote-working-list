const fs = require('fs')
const parse = require('csv-parse')

switch (process.argv[2]) {

    // return OPML file
    case "opml":
        const opmlOutput = [];
        fs.readFile("./remote-working-resources.csv", function (err, fileData) {
            parse(fileData, {
                columns: true,
                trim: true
            }, function (err, rows) {
                // Your CSV data is in an array of arrys passed to this callback as rows.
                rows.forEach((row) => {
                    if (row['Feed URL']) {
                        opmlOutput.push(`<outline htmlUrl="${row['URL']}" title="${row['Title']}" xmlUrl="${row['Feed URL']}" type="rss" text="${row['Title']}"/>`);
                    }
                });
                console.log(`<?xml version="1.0" encoding="UTF-8"?>
                                <opml version="1.0">
                                <head>
                                    <title>Remot Work Jobs</title>
                                </head>
                                <body>
                                    <outline text="Remote Work Jobs" title="Remote Work Jobs">            
                                        ${opmlOutput.join("\n")}
                                    </outline>
                                </body>
                                </opml>`);
            })
        })
        break;
}