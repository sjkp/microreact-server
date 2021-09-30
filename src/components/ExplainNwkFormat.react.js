import React from 'react';
// import { createTree, types } from 'phylocanvas';

import Phylocanvas from './Phylocanvas.react';

const exampleNewickString = '(Bovine:0.69395,(Gibbon:0.36079,(Orangutan:0.33636,(Gorilla:0.17147,(Chimp:0.19268,Human:0.11927):0.08386):0.06124):0.15057):0.54939,Mouse:1.21460);';

const ExplainNwkFormat = () => (
  <div>
    <h4>
      Newick format tree (nwk) file
    </h4>
    <p>
      Newick notation is a way of representing bifurcating relationships between data as a tree with edge lengths
      using parentheses and commas. Tree leaves (tips) are represented by their names.
      Many programs utilize Newick as an output format and further information can be found
      here: <a href="http://en.wikipedia.org/wiki/Newick_format" target="_blank">en.wikipedia.org/wiki/Newick_format</a>
    </p>
    <p>
      If a tree file is also uploaded, Microreact links the leaf names on the nwk file to the
      identifiers on the id column of the csv file.
      Thus, the identifiers <strong>MUST</strong> be exactly the same on both the csv and the nwk files.
    </p>
    <h4>
      Example nwk string
    </h4>
    <p>
      The following Newick string describes the phylogenetic relationships between a group of well known mammalian species:
    </p>
    <p>
      <code>{exampleNewickString}</code>
    </p>
    <p>
      When visualised, it renders the following tree:
    </p>

    <Phylocanvas
      source={exampleNewickString}
      size={{ width: 800, height: 400 }}
      showLabels
      showLeafLabels
    />
  </div>
);

export default ExplainNwkFormat;
