## SEO Directory Architecture Interview


### Overview

SEO is about structuring your site correctly so that Google indexes and ranks pages well. All of the major sites (FB, Linkedin, etc) use a sort of directory structure to make their pages accessible to Google.

Check out: https://angel.co/directory/companies/a
LinkedIn Version: https://www.linkedin.com/directory/companies-a/

### Part I: Architectural Conceptualization

Suppose you have a users with 500K rows. How would you go about implementing such a directory? The conditions for this directory are:

1. You want to minimize the number of clicks to get to any company profile
2. Fewer clicks means Google perceives higher authority for the page and ranks it higher in search.
2. Google's guidelines on SEO ask you to limit the number of links per page to 100
   a. This excludes navigational links.
3. Google's going to crawl these pages, so you need the pages to load fast.
4. New users keep getting added every day and you'll want the directory to get updated regularly.
5. Organize the directory alphabetically, with the top-level nodes being A..Z

How would you represent this data in the backend?

How would design the routing (URL structure)?

### Part 2: Implementation

We have struck a deal with a new API partner who will providing companies by name.  They only offer a single endpoint which returns a array of thousands of company names:

> [GET] https://tremendous-ap.com/stuff/companies

```response.json
{
	"companies": ["Abafaf", "Bezfaofu", "...""]
}
```

Grab this list, store it in either our Postgres or Redis database, and then server side render (using a framework of your choice) the SEO hierarchy into HTML pages (no CSS styling required).
