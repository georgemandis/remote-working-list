# Remote Work List for Developers

A list of job boards and websites for nomadic developers to look for freelance work. Currently there are over 90 sites with remote job listings! Many of them have RSS feeds available as well.

The core list is maintained in a CSV file here:

[remote-working-resources.csv](https://github.com/georgemandis/remote-working-list/blob/master/remote-working-resources.csv)

An OPML file is available to import into your RSS feed reader of choice. It is part of the repository and can be found here:

[remote-working-resources.opml](https://github.com/georgemandis/remote-working-list/blob/master/remote-working-resources.opml)

There is also an npm script that will build the OPML file using data from the CSV file, omitting listings that do not have an RSS or JSON feed:

`npm run opml:build`

The script is a little pointless at the moment given the OPML file is being committed alongside it, but hints at some possible futuer uses and directions for this product.

— Created and curated by [George Mandis](https://george.mand.is).

For tips on how to use this project please read [Resources and strategies for remote workers and freelancers
](https://george.mand.is/2017/10/resources-and-strategies-for-remote-workers-and-freelancers/)

## Pull Requests

You're more than welcome to make pull requests! Each listing should have:

- **Title**: The name of the website
- **URL**: The URL for the website, preferably the landing page where jobs are actually listed
- **Feed URL**: A link to the primary RSS or JSON feed for job listings
- **Notes**: Anything else worth mentioning including: optional URL parameters for feeds, other means to subscribe if no feed is present, other limitations or specificty in jobs posted (optional)


## Future Changes

Here are some future changes I'd love to see and discuss:

- Add taxonomies for better organization. For example, the language and platform-specific sites might not be relevant to everyone
- Organize the job sites into specific categories
- Provide a separate list (?) for job networks that require sign-up to join or where freelancers and remote-workers create profiles to advertise themselves to organizations looking to hire.
- Extend the npm scripts to allow returning subsets of CSV lists — RSS feeds only, no feeds, queries, other options? Perhaps even pull recent job posts from the feed and return them?
- Start to build and include a separate list that contains resources that are not just job-listings for people seeking remote work
