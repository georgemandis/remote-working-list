const fs = require('fs');
const parse = require('csv-parse');

const file = './remote-working-resources.csv';
const output = [];

switch (process.argv[2]) {
  // return OPML file
  case 'opml':
    fs.readFile(file, (err, fileData) => {
      parse(fileData, {
        columns: true,
        trim: true,
      }, (err, rows) => {
        // Your CSV data is in an array of arrys passed to this callback as rows.
        rows.forEach((row) => {
          if (row['Feed URL']) {
            output.push(`<outline htmlUrl="${row.URL}" title="${row.Title}" xmlUrl="${row['Feed URL']}" type="rss" text="${row.Title}"/>`);
          }
        });
        process.stdout.write(`<?xml version="1.0" encoding="UTF-8"?>
                     <opml version="1.0">
                      <head>
                        <title>Remote Work Jobs</title>
                      </head>
                      <body>
                        <outline text="Remote Work Jobs" title="Remote Work Jobs">            
                          ${output.join('\n')}
                        </outline>
                      </body>
                     </opml>`);
      });
    });
    break;

  // return list of jobs
  case 'list':
    fs.readFile(file, (err, fileData) => {
      parse(fileData, {
        columns: true,
        trim: true,
      }, (err, rows) => {
        // Your CSV data is in an array of arrys passed to this callback as rows
        process.stdout.write(rows.map((row) => `- ${row.Title} (${row.URL})`).join('\n'));
      });
    });
    break;

  // return list of jobs
  case 'html':
    fs.readFile(file, (err, fileData) => {
      parse(fileData, {
        columns: true,
        trim: true,
      }, (err, rows) => {
        const listItems = rows.map((row) => `<li><a href='${row.URL}'>${row.Title}</a></li>`).join('\n');
        // Your CSV data is in an array of arrys passed to this callback as rows
        process.stdout.write(`<h1>Remote Job List</h1><ol>${listItems}</ol>`);
      });
    });
    break;

  default:
    process.stdout.write('Eh.');
    break;
}
