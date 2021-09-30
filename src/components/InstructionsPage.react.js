import '../css/documentation.css';
import sharingProjectsMd from 'html-loader!markdown-loader!../../tutorials/sharing-projects.md';

import React from 'react';
import { Link } from "react-router";

import HelpTabs from './HelpTabs.react';
import ExplainCsvFormat from './ExplainCsvFormat.react';
import ExplainNwkFormat from './ExplainNwkFormat.react';
import Upload from './Upload.react';
import Markdown from './Markdown.react.js';

const InstructionsPage = () => (
  <Upload>
    <HelpTabs />
    <div className="mr-documentation">
      <h3>Creating projects</h3>
      <p>
        Microreact allows you to upload, visualise and explore any combination of clustering (trees), geographic (map) and temporal (timeline) data.
        Other metadata variables are displayed in a table. You can specify colours and/or shapes to display on the map, tree and/or timeline.
        A permanent URL is produced for you to share your Microreact.
      </p>
      <h4>
        Define
      </h4>
      <p>
        Two data files can be uploaded to create a Microreact:
      </p>
      <ol>
        <li>
          A <strong>data</strong> file in <strong>comma-separated value (csv)</strong> or <strong>tab-separated value (tsv)</strong> format, containing your data and properties for your Microreact (<strong>required</strong>).
        </li>
        <li>
            A <strong>tree</strong> file
            in <strong>Newick (nwk)</strong> format,
            specifying your tree (optional).
        </li>
      </ol>
      <ExplainCsvFormat />
      <ExplainNwkFormat />
      <p>
        You can view <Link to="project/Ny8H4gsH">the demo project here</Link>.
      </p>
      <p>
        Or download the files and create it yourself: <a href="files/demo.csv">Download CSV</a> <a href="files/demo.nwk">Download NWK</a>
      </p>

      <Markdown className="mr-documentation" html={sharingProjectsMd} />

      <h3>Editing projects</h3>
      <p>
        Microreact enables users to change projects and manage access through user accounts.
        The management interface is available by clicking on the hamburger icon at the top left of the Microreact homepage,
        or on the Microreact logo at the top left of a project’s webpage.
      </p>
      <p>
        Users can log in using their Google, Twitter or Facebook accounts,
        and a list of all the projects created while logged in will be available to manage,
        allowing project name/description to be amended, data files (Newick and CSV) to be updated and
        access control defined.
      </p>
      <p>
        Projects can be designated as ‘private', ‘public', or ‘public and listed' (meaning that permission is given to highlight projects on the microreact.org homepage). Users can also delete projects created while logged in, and access basic project statistics such as date created, last modified, last accessed and number of visits. Furthermore, if a project is set as public and listed the user can specify a unique custom project ID (e.g. myfavouriteproject), which replaces the random project ID set by default and is appended to the end of the permanent Microreact URL (e.g. https://microreact.org/project/myfavouriteproject).
      </p>
      <p>
        Basic Statistics about a particular Microreact are available:  Date created, last modified and last accessed. ‘View count’ the number of times the Microreact has been visited.
      </p>
      <p>
        The ‘Danger zone’ contains a dustbin icon that can be clicked to delete a Microreact – the user will be prompted for final confirmation before full delete.
        Changing the Project ID:  If a Microreact is ‘public and listed’ the user may click the ‘change’ button at the top left and specify a custom ID which will be used in the Microreact URL as a convenient link to the project.
      </p>
    </div>
  </Upload>
);

InstructionsPage.displayName = 'InstructionsPage';

export default InstructionsPage;
