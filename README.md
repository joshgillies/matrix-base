# Matrix Base

An opinionated base configuraton for sites in Squiz Matrix.

## Usage

Simply use the "[Import Assets from XML Tool]" to import the provided matrix-base.xml

The resulting base site structure follows:

  - Root [Folder]
    - Config [Folder]
      - Designs [Site]
      - Media [Site]
      - Users [Site]
      - Web Services [Site]
      - Metadata [Folder]
      - Components [Folder]
      - Layouts [Folder]
    - Site [Site]
      - Home [Page]
      - 404 [page]

## Motivation

Developing sites in Squiz Matrix is challenging at the best of times.

By consolidating as much as possible Matrix Base aims to provide a solid starting
point for new sites being developed in Squiz Matrix.

### Features

  - Pre-configured site with Index and 404 pages
  - Independent sites for Designs, Media, Users and Web Services
  - Dedicated folders for Components, Layouts and Metadata

### Goals

  - Eliminate as much shared state between Matrix sites as possible
  - Prove that current development best practices can be applied to Squiz Matrix

## License

MIT

[Import Assets from XML Tool]: http://manuals.matrix.squizsuite.net/tools/chapters/import-assets-from-xml-tool
