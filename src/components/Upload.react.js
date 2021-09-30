import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import "../css/upload.css";
import CookieConsent from "./Cookies.react";
import Header from "./Header.react";
import NavigationDrawer from "./NavigationDrawer.react";
import Footer from "./Footer.react";

// import DragAndDrop from './DragAndDrop.react';
// import ExplainDragAndDrop from './ExplainDragAndDrop.react';
// import ShortFileRequirements from './ShortFileRequirements.react';
// import Loading from './Loading.react';
// import SetProjectMetadata from './SetProjectMetadata.react';
// import ApiError from './ApiError.react';

// import ApiUtils from '../utils/api';
// import config from '../utils/config';
// import Data from '../utils/data';
// import Messages from '../utils/messages';

// function getInitialState() {
//   const { project } = config;
//   return {
//     projectName: project.name || '',
//     projectDescription: project.description || '',
//     dataUrl: '',
//     treeUrl: '',
//     networkUrl: '',
//     isDataProvided: project.data ? true : false,
//     isTreeProvided: project.tree ? true : false,
//     isNetworkProvided: project.network ? true : false,
//     isValidated: false,
//     isValidating: false,
//     isValid: false,
//     isMetadataProvided: false,
//     isUploading: false,
//     project: Object.assign(
//       {
//         data: null,
//         tree: null,
//         network: null,
//         metadata: {},
//         isListed: false,
//       },
//       project
//     ),
//     validationErrors: [],
//   };
// }

// class Upload extends React.Component {
//   static displayName = 'Upload';

//   static propTypes = {
//     header: PropTypes.bool,
//     explainDragAndDrop: PropTypes.bool,
//     className: PropTypes.string,
//     children: PropTypes.node,
//   };

//   static contextTypes = {
//     router: PropTypes.object,
//   };

//   static defaultProps = {
//     header: true,
//   };

//   constructor(props) {
//     super(props);
//     this.state = getInitialState();
//   }

//   componentDidMount() {
//     componentHandler.upgradeDom();
//   }

//   onBrwoseForFiles = (event) => {
//     event && event.preventDefault();
//     $('input[type="file"]').click();
//   };

//   onProvideFileUrl = (fileClass, url) => {
//     this.setState({
//       [`${fileClass.toLowerCase()}Url`]: url,
//       [`is${fileClass}Provided`]: url !== '',
//     });
//   };

//   onResetFileProvided = (fileClass) => {
//     this.setState({ [`is${fileClass}Provided`]: false });
//   };

//   resetProjectUpload = () => {
//     this.state.project.data = null;
//     this.state.project.tree = null;
//     this.setState(getInitialState());
//   };

//   resetDataProvided = () => {
//     this.setState({ isDataProvided: false });
//   };

//   confirmCreateProject = () => {
//     if (this.state.isDataProvided) {
//       this.validate();
//     }
//   };

//   handleFileInputChange = (event) => {
//     event.preventDefault();
//     if (event && event.target && event.target.files) {
//       this.handleFiles(Array.from(event.target.files));
//     }
//   };

//   handleFiles = (fileArray) => {
//     let fileIndex = 0;
//     for (const file of fileArray) {
//       this.readFile(file, () => {
//         fileIndex += 1;
//         if (fileIndex === fileArray.length) {
//           if (this.state.isDataProvided && this.state.isTreeProvided) {
//             this.validate();
//           } else {
//             this.setState({ explainDragAndDrop: true });
//           }
//         }
//       });
//     }
//   };

//   readFile = (file, callback) => {
//     const fileReader = new FileReader();

//     fileReader.onload = (event) => {
//       const filename = file.name.toLowerCase();
//       const fileContent = event.target.result;

//       if (file.type === 'text/csv' || Data.checkFileType(filename, '.csv', '.tsv')) {
//         this.state.project.data = fileContent.replace(/\r\n,+/g, '\r\n').replace(/\n,+/g, '\n').trim();
//         let dataFileName = filename;
//         if (Data.checkFileType(filename, '.csv')) {
//           dataFileName = filename.split('.csv')[0];
//         } else if (Data.checkFileType(filename, '.tsv')) {
//           dataFileName = filename.split('.tsv')[0];
//         }
//         this.setState({
//           isDataProvided: true,
//           projectName: dataFileName,
//         });
//       } else if (Data.checkFileType(filename, '.nwk', '.newick', '.tre', '.nex', '.nexus')) {
//         this.state.project.tree = fileContent.trim();
//         this.setState({ isTreeProvided: true });
//       } else if (Data.checkFileType(file.name, '.dot')) {
//         this.state.project.network = fileContent.trim();
//         this.setState({ isNetworkProvided: true });
//       } else {
//         Messages.show(
//           `Microreact cannot recognise the type of "${file.name}" file that you have added.
//           Accepted file extensions are: .csv, .tsv, .nwk, .newick, .tre ,.nex, .nexus, or .dot`
//         );
//       }

//       callback && callback(file);
//     };

//     fileReader.readAsText(file);
//   };

//   validateLocalFiles = () => {
//     let shouldValidateData = false;
//     if (this.state.dataUrl) {
//       this.state.project.data = this.state.dataUrl;
//     } else {
//       shouldValidateData = true;
//     }

//     let shouldValidateTree = false;
//     if (this.state.treeUrl) {
//       this.state.project.tree = this.state.treeUrl;
//     } else if (this.state.isTreeProvided) {
//       shouldValidateTree = true;
//     }

//     if (shouldValidateData || shouldValidateTree) {
//       const [ validationErrors, validationWarnings, fields ] = Data.validateFiles(
//         this.state.dataUrl ? '' : this.state.project.data,
//         this.state.treeUrl ? '' : this.state.project.tree
//       );

//       if (validationErrors.length > 0) {
//         return Promise.reject(validationErrors);
//       }

//       return Promise.resolve([ validationWarnings, fields ]);
//     }

//     return Promise.resolve([]);
//   };

//   getFields = ([ validationWarnings, localFields ]) => {
//     if (this.state.dataUrl) {
//       return (
//         ApiUtils.checkDataSource(this.state.dataUrl)
//           .then(remoteFields => ({ fields: remoteFields, validationWarnings }))
//           .catch((err) => {
//             throw err.message;
//           })
//       );
//     } else {
//       return ({ fields: localFields, validationWarnings });
//     }
//   };

//   validate = () => {
//     this.setState({ isValidating: true });

//     this.validateLocalFiles()
//       .then(this.getFields)
//       .then(({ fields, validationWarnings }) =>
//         this.setState({
//           isValidating: false,
//           isValidated: true,
//           isValid: true,
//           fields,
//           validationWarnings,
//         })
//       )
//       .catch(validationErrors =>
//         this.setState({
//           isValidating: false,
//           isValidated: true,
//           isValid: false,
//           validationErrors,
//         })
//       );
//   };

//   handleSetProjectMetadata = (metadata) => {
//     this.setState({
//       project: Object.assign({}, this.state.project, metadata),
//       isMetadataProvided: true,
//     }, () => this.uploadProject());
//   };

//   uploadProject = () => {
//     this.setState({ isUploading: true });
//     ApiUtils.createProject(this.state.project)
//       .then((project) => {
//         const path = `/project/${project.shortId}`;
//         this.context.router.push(path);
//       })
//       .catch((err) => {
//         this.setState({
//           isValid: false,
//           validationErrors: err.message,
//         });
//       });
//   };

//   renderMainContent = () => {
//     if (this.state.isValidated && !this.state.isValid) {
//       return (
//         <main className="mr-error-page">
//           <ApiError message={this.state.validationErrors} />
//           <button
//             className="mdl-button mdl-button--raised mdl-button--colored mr-button-large"
//             onClick={this.resetProjectUpload}
//           >
//             Try again
//           </button>
//         </main>
//       );
//     }

//     if (this.state.isValidating) {
//       return (
//         <main>
//           <Loading>
//             Validating files...
//           </Loading>
//         </main>
//       );
//     }

//     if (this.state.isValid && !this.state.isMetadataProvided) {
//       return (
//         <main>
//           <SetProjectMetadata
//             projectName={this.state.projectName}
//             projectDescription={this.state.projectDescription}
//             fields={this.state.fields}
//             warnings={this.state.validationWarnings}
//             handleCancelProject={this.resetProjectUpload}
//             handleSetProjectMetadata={this.handleSetProjectMetadata}
//           />
//         </main>
//       );
//     }

//     if (this.state.isUploading) {
//       return (
//         <main>
//           <Loading>
//             Uploading files and creating your project...
//           </Loading>
//         </main>
//       );
//     }

//     if ((this.props.explainDragAndDrop || this.state.explainDragAndDrop) && config.options.disableUploadPage) {
//       return (
//         <main className="mr-upload-content">
//           <center>
//             Upload page is disabled
//           </center>
//         </main>
//       )
//     }

//     return (
//       <main className="mr-upload-content">
//         {
//           (this.props.explainDragAndDrop || this.state.explainDragAndDrop) &&
//           <React.Fragment>
//             <ExplainDragAndDrop
//               isDataProvided={this.state.isDataProvided}
//               isTreeProvided={this.state.isTreeProvided}
//               isNetworkProvided={this.state.isNetworkProvided}
//               dataUrl={this.state.dataUrl}
//               treeUrl={this.state.treeUrl}
//               networkUrl={this.state.networkUrl}
//               onProvideFileUrl={this.onProvideFileUrl}
//               onResetFileProvided={this.onResetFileProvided}
//               onBrwoseForFiles={this.onBrwoseForFiles}
//               onCreateProject={this.confirmCreateProject}
//             />
//             <ShortFileRequirements />
//           </React.Fragment>
//         }
//         {
//           (this.props.explainDragAndDrop || !this.state.explainDragAndDrop) &&
//           this.props.children
//         }
//       </main>
//     );
//   };

//   render() {
//     return (
//       <DragAndDrop onDrop={this.handleFiles}>
//         <div
//           className={
//             clsx(
//               'mdl-layout mdl-js-layout mdl-layout--fixed-header mr-server',
//               this.props.className
//             )
//           }
//         >
//           <Header />
//           <NavigationDrawer />
//           <div className="mdl-layout__content">
//             { this.renderMainContent() }
//             <Footer />
//           </div>
//           <div id="figshare-snackbar-example" className="mdl-js-snackbar mdl-snackbar">
//             <div className="mdl-snackbar__text"></div>
//             <a
//               href="tutorials/shared-files#figshare-shared-files"
//               target="_blank"
//               className="mdl-snackbar__action"
//               type="button"
//             ></a>
//           </div>
//           <div id="message-snackbar" className="mdl-js-snackbar mdl-snackbar">
//             <div className="mdl-snackbar__text"></div>
//             <button className="mdl-snackbar__action" type="button"></button>
//           </div>
//           <input
//             type="file"
//             multiple="multiple"
//             accept=".csv,.tsv,.nwk,.newick,.tre,.nex,.nexus,.dot"
//             className="mr-file-upload"
//             onChange={this.handleFileInputChange}
//           />
//         </div>
//         <div id="mr-modal-portal"></div>
//         <CookieConsent />
//       </DragAndDrop>
//     );
//   }
// }

// export default Upload;

// eslint-disable-next-line react/display-name
export default React.memo(
  (props) => {
    return (
      <div>
        <div
          className={
            clsx(
              "mdl-layout mdl-js-layout mdl-layout--fixed-header mr-server",
              props.className
            )
          }
        >
          <Header />
          <NavigationDrawer />
          <div className="mdl-layout__content">
            <main className="mr-upload-content">
              { props.children }
            </main>
            <Footer />
          </div>
          <div id="figshare-snackbar-example" className="mdl-js-snackbar mdl-snackbar">
            <div className="mdl-snackbar__text"></div>
            <a
              href="tutorials/shared-files#figshare-shared-files"
              target="_blank"
              className="mdl-snackbar__action"
              type="button"
            ></a>
          </div>
          <div id="message-snackbar" className="mdl-js-snackbar mdl-snackbar">
            <div className="mdl-snackbar__text"></div>
            <button className="mdl-snackbar__action" type="button"></button>
          </div>
          {/* <input
            type="file"
            multiple="multiple"
            accept=".csv,.tsv,.nwk,.newick,.tre,.nex,.nexus,.dot"
            className="mr-file-upload"
            onChange={this.handleFileInputChange}
          /> */}
        </div>
        <div id="mr-modal-portal"></div>
        <CookieConsent />
      </div>
    );
  }
);
