### Sharing projects

  This section lists project options which can be set via URL query string keys. 
  For example, add ```?tt=cr``` to the end of a project link to set tree type to circular: 
  https://microreact.org/project/Ny8H4gsH?tt=cr. Multiple options can be combined using ampersand character (```&```). For example, add ```?tt=cr&tl=0``` to the end of a project link to set tree type to circular and hide tree labels. 


#### Filter URL Options

| Option                | Description           | Default value | Accepted values                         |
|:----------------------|:----------------------|:--------------|:----------------------------------------|
| ```fb```              | Metadata block columns| ``` ```    | Sets the initial columns displayed as metadata blocks on the tree. Multiple column names can be combined using comma (```,```) character |
| ```fc```              | Colour column         | ``` ```    | Sets the initial column used to colour nodes |
| ```fl```              | Label column          | ``` ```    | Sets the initial column used for labels |
| ```fs```              | Shape column          | ``` ```    | Sets the initial column used for shapes |


#### Map URL Options

| Option                | Description                  | Default value | Accepted values                         |
|:----------------------|:-----------------------------|:--------------|:----------------------------------------|
| ```mc```              | Map controls                 | ```0```       | ```1``` to show map controls, or ```0``` to hide them |
| ```mmns```            | Map min node size            | ```4```       | Sets the minimal map node size    |
| ```mns```             | Map node size                | ```14```      | Sets the map node size in pixels      |
| ```mxns```            | Map max node size            | ```160```     | Sets the maximal metadata node size    |
| ```mo```              | Map centre geographical point| ```0,0```     | Sets the initial geographic centre of the map. Must be a valid geographical point with a certain latitude and longitude separated with a comma. |
| ```mz```              | Map zoom level               | ```1```       | Sets the initial map zoom level. |
| ```ms```              | Map Mapbox tile style        | ```light```   | Sets the initial Mapbox tile style as follows: <br> ```light```: Light style <br> ```dark```: Dark style <br> ```streets```: Streets <br> ```satellite```: Satellite <br> ```'```saellite-streets': 'Satellite Streets <br> ```basic```: Basic <br> ```bright```: Bright <br> ```outdoors```: Outdoors |


#### Layout URL Options

| Option                | Description           | Default value | Accepted values                         |
|:----------------------|:----------------------|:--------------|:----------------------------------------|
| ```ud```              | Details pane view     | ```t``` (the default value is set to ```d``` when project does not include a timeline)      | Sets the initial view in the details pane as follows: <br> ```d```: Data table <br> ```t```: Timeline |
| ```uhs```             | Horizontal pane size  | ```50```      | Sets the initial size of the horizontal panes, e.g. ```40``` sets the size of the main pane to 40% of the window height and the details pane to 60%. |
| ```ui```              | Shape column          | ```null```    | Sets the initial column used for shapes |
| ```us```              | Side pane view     | ``` ``` | Sets the initial view in the side pane as follows: <br> ```b```: Blocks <br> ```c```: Colour columns <br> ```e```: Network edge styles <br> ```h```: Project history <br> ```l```: Label columns <br> ```d```: Legend <br> ```p```: Pattern columns <br> ```s```: Shape columns |
| ```uvs```             | Vertical pane size    | ```68```      | Sets the initial size of the vertical panes, e.g. ```40``` sets the size of the map pane to 40% of the window width and tree pane to 60%. See option ```ui``` above to change the order of the panes. |


#### Data Table URL Options

| Option                | Description          | Default value | Accepted values                         |
|:----------------------|:---------------------|:--------------|:----------------------------------------|
| ```dm```              | Display density mode | ```comf```    | Sets the initial display density: <br>      


#### Timeline URL Options

| Option                | Description          | Default value | Accepted values                         |
|:----------------------|:---------------------|:--------------|:----------------------------------------|
| ```lc```              | Timeline controls    | ```0```       | ```1``` to show timeline controls, or ```0``` to hide them |
| ```lmns```            | Timeline min node size   | ```1```       | Sets the minimal timeline node size    |
| ```lns```             | Timeline node size       | ```14```      | Sets the timeline node size in pixels      |
| ```lu```              | Time grouping unit       | ```year```    | Sets the unit used to group timeline data as follows: <br> ```y```: Year <br> ```q```: Quarter <br> ```m```: Month <br> ```w```: Week <br> ```d```: Day <br> |
| ```lxns```            | Timeline max node size   | ```160```     | Sets the maximal timeline node size    |
| ```ls```            | Timeline play speed   | ```1```       | Sets the interval (in seconds) at which the timeline is played    |


#### Tree URL Options

| Option                | Description          | Default value | Accepted values                         |
|:----------------------|:---------------------|:--------------|:----------------------------------------|
| ```tal```             | Align tree labels    | ```0```       | ```1``` to align tree labels, or otherwise ```0```|
| ```tbh```             | Show block headers   | ```0```       | ```1``` to show metadata block headers, or ```0``` to hide them|
| ```tbl```             | Tree block length    | ```6```       | Sets the metadata block length in pixels|
| ```tbn```             | Tree branch length   | ```0```       | ```1``` to show tree branch lengths, or ```0``` to hide them |
| ```tc```              | Tree controls        | ```0```       | ```1``` to show tree controls, or ```0``` to hide them |
| ```tl```              | Tree labels          | ```0```       | ```1``` to show tree labels, or ```0``` to hide them |
| ```tmbl```            | Tree min block length| ```1```       | Sets the minimal metadata block length |
| ```tmns```            | Tree min node size   | ```1```       | Sets the minimal tree node size    |
| ```tmts```            | Tree min text size   | ```1```       | Sets the minimal font size in pixels   |
| ```tns```             | Tree node size       | ```14```      | Sets the tree node size in pixels      |
| ```tt```              | Tree type            | ```rc```      | Sets the initial tree type as follows: <br>      ```rc```: Rectangular tree <br>      ```cr```: Circular tree <br>      ```rd```: Radial tree <br>      ```dg```: Diagonal tree <br>      ```hr```: Hierarchical tree |
| ```tts```             | Tree text size       | ```8```       | Sets the tree font size in pixels      |
| ```txbl```            | Tree max block length| ```160```     | Sets the maximal metadata block length |
| ```txns```            | Tree max node size   | ```160```     | Sets the maximal metadata node size    |
| ```txts```            | Tree max text size   | ```64```      | Sets the maximal font size in pixels   |
