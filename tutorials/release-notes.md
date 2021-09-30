## Release Notes

### Version 5.93.0 (March 2019)

#### Server

- Ignore rows that are not included in a tree or network.

### Version 5.91.11 (February 2019)

#### Tree

- Restore viewport without depending on prior actions

### Version 5.91.10 (January 2019)

#### Viewer

- Fix saved views that show a subtree

#### Tree

- Reproduce saved views of subtrees more accurately

#### Website

- Subset project metadata based on IDs in tree

### Version 5.91.7 (November 2018)

#### Website

- Enable Facebook login

### Version 5.91.4 (November 2018)

#### Tree

- Fix ordering of metadata blocks
- Fix filtering in a subtree

#### Viewer

- Tidy controls styling

#### Website

- Temporarily disable Facebook login

### Version 5.91.2 (October 2018)

#### Viewer

- Fix query string in download URLs

### Version 5.91.1 (October 2018)

#### Website

- Fix link to API documentation in navigation drawer

### Version 5.91.0 (October 2018)

#### Viewer

- Prevent chart from resizing when taking a screenshot

### Version 5.89.2 (October 2018)

#### Viewer

- Fix hidden colour columns with no matching data column

### Version 5.89.1 (October 2018)

- Release of "The New Microreact" 🚀

### Version 5.53.0 (May 2018)

#### Legend

- Legend moved to sidebar
- Legend now includes a section for each column used as metadata blocks

#### Map

- Performance increase through new canvas-based marker layer
- Redesigned pie chart detail view
- Resizable markers through marker size silder in map controls
- Custom tile layers

#### Network

- Dragging nodes
- Support for `pos` attribute in dot format
- Support for edge properties: weight, colour, line styles
- Adjustable node and label size
- Labels can be hidden by setting size to zero

#### Table

- Fixed header
- Display density

#### Timeline

- New implementation based on [Chart.js](https://www.chartjs.org/)
- No imposed limit on number of datapoints (timeline grouping has been depricated)
- Resize points
- New windowing slider below main view
- Adjustable playback speed

#### Tree

- Performance increase through Phylocanvas 3
- Re-rooting
- Toggle switches in context menu
- Horizontal zoom (`ctrl` key + mouse scroll, or `cmd` key + mouse scroll on Mac)
- Vertical zoom (`alt` key + mouse scroll)
- New zoom controls
- Pie charts on internal nodes (via toggle switch in context menu)
- Internal edges can be coloured (via toggle switch in context menu)
- Leaf labels can be coloured (via toggle switch in context menu)
- Fixed node and label sizes
- Slider for metadata block length (avilable when metadata blocks are visible)
- Metadata block columns moved to a new sidebar section
- Collapsed nodes are excluded when exporting a tree as Newick format
- Subtrees can be rotated (via context menu)

#### Viewer

- Filters moved to sidebar
- History panel in sidebar, saves complete project state
- Share current project state
- Support for nexus files
- Heatmap colour for numeric variables (`__continuous` or `__numeric`)
- Persistent state when turning panels on and off
- Add transparent colour filter
- Separate the Shapes and Colours filters
- Expand the number of shapes, supported shapes are:
  - `none`, `dot`, `circle`, `square`, `triangle`, `star`, `hexastar`, `heptastar`, `octastar`, `pentagon`, `hexagon`, `heptagon`, and `octagon`,
  - [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to render the country's flag (e.g. `gb`), or
  - An emoji as an unicode symbol (e.g. `🔶` )
  - An emoji as a hexadecimal code point (e.g. `\uD83D\uDE00` )

#### Website

- Redesigned showcase
- Communities section
- Updated instructions page to include [project options which can be set via URL query string keys](instructions#sharing-projects)
