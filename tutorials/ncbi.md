# Using Microreact API with NCBI FTP Files Tutorial

This tutorial shows how to use the [Microreact API](https://microreact.org/api) to create a project which is linked to files on NCBI FTP servers.

## Exploring files on NCBI FTP servers

Metadata and tree files for different species are available on  [ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results).
This tutorial will create a Microreact project linked to metadata and tree files of [Campylobacter](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/).
The same steps can be used to create projects for other species such as [Klebsiella](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Klebsiella) or [Listeria](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Listeria).

The [Campylobacter](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/) FTP folder contains daily snapshot folders (e.g. [PDG000000003.175](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/PDG000000003.175/) for 16/03/2016), each of which contains:

* a [metadata folder](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/PDG000000003.175/Metadata/) containing the [tab-separated values](https://en.wikipedia.org/wiki/Tab-separated_values) (.tsv) [metadata file](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Metadata/PDG000000003.472.metadata.tsv), and
* a [trees folder](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/PDG000000003.175/Trees/) containing the [Newick](https://en.wikipedia.org/wiki/Newick_format) (.newick) [tree file](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Trees/PDG000000003.472.reference_target.tree.newick).

The [Campylobacter](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/) folder also contains a symlink folder called `latest` ([ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/](ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/)) which always points to the latest daily snapshot.

The tab-separated values metadata file contains many fields.
The following three fields will be used in this tutorial to create a Microreact project:

* `target_acc`: which contains an identifier for every data row corresponding to a leaf label within the Newick file.
* `collection_date`: which contains the collection date in the following format `YYYY-MM-DD`.
* `geo_loc_name`: which contains the collection country name, country code, or subdivision code (e.g. USA state codes).


## Accessing Microreact API

To send data via HTTP post requests to the Microreact API, this tutorial uses a cross-platform command-line tool called [cURL](http://curl.haxx.se/) Documentation on how to use cURL can be found on:  https://curl.haxx.se/docs/.

Detailed examples on how to use cURL with the Microreact API can be found on [Microreact API documentation page](https://microreact.org/api).


## Preparing JSON data

Microreact API requires data to be posted in JSON format. To create a Microreact project via the API,
a JSON file containing the HTTP request body should be created first.
Then the JSON file will be posted using cURL to Microreact API endpoint.

The JSON file should contain the following keys (as described on [Microreact API documentation page](https://microreact.org/api)):

* `name`: the project name (e.g. 'NCBI - Campylobacter')
* `description`: brief description of the project
* `email`: the email address of the person who is creating the project
* `data`: the URL of the metadata file:  ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Metadata/PDG000000003.472.metadata.tsv
* `tree`: the URL of the tree file:  ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Trees/PDG000000003.472.reference_target.tree.newick
* `id`: the name of the ID field in the metadata file (i.e. `target_acc`)
* `timeline_field`: the name of the field which contains time point values in the metadata file (i.e. `collection_date`)
* `timeline_format`: format string describing the format of  the timeline values contained in the field `collection_date` (i.e. `YYYY-MM-DD`). List of valid values can be found at: http://momentjs.com/docs/#/parsing/string-format.
* `timeline_grouped`: it is recommended to enable grouping of timeline points as the metadata file contains a large number of rows
* `map_countryField`: the name of the field which contains country information in the metadata file (i.e. `geo_loc_name`)


## Posting JSON to Microreact API

1. Save the following JSON project specification in a file (e.g. `~/ncbi-project-1.json`)

  ```javascript
  {
    "name": "NCBI - Campylobacter",
    "data": "ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Metadata/PDG000000003.472.metadata.tsv",
    "tree": "ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Trees/PDG000000003.472.reference_target.tree.newick",
    "id": "target_acc",
    "timeline_field": "collection_date",
    "timeline_format": "YYYY-MM-DD",
    "timeline_grouped": true,
    "map_countryField": "geo_loc_name"
  }
  ```
  The above JSON file can be downloaded from: https://microreact.org/files/ncbi-project-1.json

2. Start terminal (on Linux or Mac OS X) or command prompt (on Windows)

3. Change to the directory to which the `ncbi-project-1.json` file was saved:

  ```bash
  cd ~
  ```

4. Run the following the command:

  ```bash
  curl -i -H "Content-type: application/json; charset=UTF-8" -X POST -d @ncbi-project-1.json https://microreact.org/api/1.0/project/
  ```

5. The previous command returns a JSON response containing the project short ID (SJxsBUD6W) and URL (https://microreact.org/project/SJxsBUD6W) as following:

  ```bash
  curl -i -H "Content-type: application/json; charset=UTF-8" -X POST -d @ncbi-project-1.json https://microreact.org/api/1.0/project/
  HTTP/1.1 200 OK
  Server: nginx/1.4.6 (Ubuntu)
  Date: Mon, 21 Mar 2016 14:46:57 GMT
  Content-Type: application/json; charset=utf-8
  Content-Length: 76
  Connection: keep-alive
  {"shortId":"SJxsBUD6W","url":"https://microreact.org/project/SJxsBUD6W"}
  ```

## Creating a Microreact project linked to latest folder

  The previous project was linked to metadata and tree files in the folder `PDG000000003.175` on NCBI FTP server (ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/PDG000000003.175).
  It is possible to create a project which is linked to the special `latest` folder which always points to the latest daily snapshot.
  Since the file names inside `latest` folder change every time the folder is updated,
  the URLs given posted to Microreact API (in both `data` and `tree`) have to be changed to reflect the fact the linked file names are dynamic.

  Microreact API allows dynamic file linking by accepting a folder URL and a [regular expression](https://en.wikipedia.org/wiki/Regular_expression) instead of a fixed file URL.
  When this option is used, Microreact API will look for the first file which matches the regular expression in the specified folder.
  The folder URL and file matching regular expression should be specified as follows:
  ```
  ftp://example.com/folder/subfolder/ /regexp/
  ```
  where `regexp` is a valid regular expression that should match at least one file in the specified folder (`ftp://example.com/folder/subfolder/`).
  A free online tool (https://regex101.com/) can be used to test that the regular expression matches the desired file.

  To create another Microreact project linked to metadata and tree files in the `latest` folder,
  the following JSON project specification can be posted to Microreact API endpoint as demonstrated above:

  ```javascript
  {
    "name": "NCBI - Campylobacter",
    "data": "ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Metadata/ /^.*.metadata.tsv$/",
    "tree": "ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Trees/ /^.*.reference_target.tree.newick$/",
    "id": "target_acc",
    "timeline_field": "collection_date",
    "timeline_format": "YYYY-MM-DD",
    "timeline_grouped": true,
    "map_countryField": "geo_loc_name"
  }
  ```
  The above JSON file can be downloaded from: https://microreact.org/files/ncbi-project-2.json

## Resources

* Microreact API documentation: https://microreact.org/api/
* cURL download and documentation: https://curl.haxx.se/
* Online regular expression tester and debugger: https://regex101.com/
