# andrewwnewhouse.com
===================

Static site for the andrewwnewhouse.com website.

## Requirements

- [json ruby gem](http://rubygems.org/gems/json) for JSON conversion plugin
- [liquid](http://rubygems.org/gems/liquid) (must be v2.5 or greater)

## Local Development

1. Install dependencies `bundle install`
2. Run Jekyll server and pass in a blank baseurl to preview in development mode `jekyll serve -w`.
3. View the generated site by going to [http://localhost:4000/](http://localhost:4000/)

### HTML Compression

This site enables HTML Compression for optimizing performance.  If it is desired to not compress pages while doing development, developers can simply remove the `layout: compress` from the default template in the _layouts folder.

## Site Structure

| Directory | Description |
| ------------- |:------------- |
| _data | Directory contains yml files that contain content that is not within individual pages or posts. |
| _includes | Contains several partials that are common to several generated pages. |
| _layouts | Contains the templates that are used to generate the commonality of the pages (default is the main one that all the pages use. |
| _pages | Contains all non-project post pages. |
| _posts | Contains all of the individual project entries. |
| _sass | Contains the SASS files for the project
| assets | contains the css, js, images and other assets for the site |
| downloads | Contains files that can be downloaded from the generated site |
| fonts | Contains the customized font libraries for the project. |

## Code Standards

This section highlights the coding standards to be used for this project to ensure consistency across the codebase for current and future development

### Filename conventions

- Should be all lowercase and words are concatenated with a hypen

### Variable naming conventions

- All yml frontmatter keys should be lowercase and words concatenated with a hyphen

### Liquid

- All liquid variables are following an underscore pattern so they can be easier to differentiate from yml frontmatter variables
- All liquid tags, objects, and filtesr will have spaces in front of and following whatever is contained within braces
 
