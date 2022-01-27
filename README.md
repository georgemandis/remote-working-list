# Remote Work List for Developers

A list of job boards and websites for nomadic developers to look for freelance work. Currently there are over 90 sites with remote job listings! Many of them have RSS feeds available as well.

The core list is maintained in a CSV file here:

- [remote-working-resources.csv](https://github.com/georgemandis/remote-working-list/blob/main/remote-working-resources.csv)

An OPML file is available to import into your RSS feed reader of choice. It is part of the repository and can be found here:

- [remote-working-resources.opml](https://github.com/georgemandis/remote-working-list/blob/main/dist/remote-working-resources.opml)

There is also an HTML and a Markdown file in the same folder:
- [remote-working-resources.html](https://github.com/georgemandis/remote-working-list/blob/main/dist/remote-working-resources.html)
- [remote-working-resources.md](https://github.com/georgemandis/remote-working-list/blob/main/dist/remote-working-resources.md)

## Running the scripts

There are scripts you can run to generate the OPML, HTML and Markdown files from the CSV file data:

`npm run build:opml`
`npm run build:html`
`npm run build:markdown`

The OPML script is smart enough to exclude sites without an RSS feed. The other scripts generate a complete list.

## About 
Created by [George Mandis](https://george.mand.is).

For tips on how to use this project please read: [Resources and strategies for remote workers and freelancers
](https://george.mand.is/2017/10/resources-and-strategies-for-remote-workers-and-freelancers/)

## Suggest a resource

**You're more than welcome to make suggestions for resources to add to this list!**


You can file an issue with information about the resource you'd like to see added to this list.

- [Please use this form](https://github.com/georgemandis/remote-working-list/issues/new?assignees=georgemandis&labels=suggested&template=feature_request.yml&title=%5BSuggested%5D%3A+)
