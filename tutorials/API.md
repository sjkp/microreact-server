# Microreact REST API Documentation

<p class="mr-documentation-notabene">
**Update:** Microreact REST API has been moved to HTTPS.
<br>
Calls to `http://microreact.org/api/1.0/` should be redirected to  `https://microreact.org/api/`.
</p>

This page details the API for the Microreact server describing the endpoint for creating Microreact projects programmatically.

## 1. Create a project

  Creates a new project on the server and returns the project unique ID and URL.

* **URL**

  `/api/project/`

* **Method:**

  `POST`

* **Request Headers:**

  `Content-type`: `application/json; charset=UTF-8`

*  **URL Params**

   None

* **Data Params**

  The request body must be provided in JSON format and contain the following keys:

| Key                   | Data type       | Required or Optional | Default value    | Description                                                |
|:----------------------|:----------------|:---------------------|:-----------------|:-----------------------------------------------------------|
| ```name```            | String          | Required             |                  | The name of the project. |
| ```description```     | String          | Optional             | ```''```          | Brief description of the project. |
| ```email```           | String          | Optional             | ```''```          | The email address of the project creator. Must be a valid email address. |
| ```website```         | String          | Optional             | ```''```          | The project website. Must be a valid URL. |
| ```data```            | String or Array | Required             |                  | The contents of the CSV data file, or a URL of the CSV data file. Alternately an array of JSON objects can be provided instead of CSV. A list of valid fields is given below. |
| ```tree```            | String          | Optional             |                  | The contents of the tree file which must be in valid Newick format, or a URL of the tree file. Every leaf label must correspond to an id that is specified in the CSV data. Number of labels in the tree must match number of IDs in the CSV data. Newick string can be omitted if the project does not include a tree. |
| ```id```         | String          | Optional             | ```'id'```        | The name of the CSV field which contains the row IDs (i.e. tree node labels). |
| ```map_latitude```    | String          | Optional             | ```'latitude'```  | The name of the CSV field which contains map latitude decimal values. |
| ```map_longitude```   | String          | Optional             | ```'longitude'``` | The name of the CSV field which contains map longitude decimal values. |
| ```map_countryField```| String          | Optional             | ```''```          | The name of the CSV field which contains country information in one of the following formats:  <br>     * full country name as in  https://developers.google.com/public-data/docs/canonical/countries_csv <br>    * country code in ISO 3166-1 alpha 2 (e.g. ```'GB'``` or ```'gb'``` for the United Kingdom). List of all codes can be found at https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2, <br>     * country code in ISO 3166-1 alpha 3 (e.g. ```'GBR'``` or ```'gbr'``` for the United Kingdom). List of all codes can be found at https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3, <br>    * subdivision code in ISO 3166-2 (e.g. ```'US-AK'``` or ```'us-ak'``` for Alaska). List of all codes can be found at https://en.wikipedia.org/wiki/ISO_3166-2. |
| ```map_grouped```     | Boolean         | Optional             | ```true```       | Either ```true``` to enable grouping of map markers, or ```false``` otherwise. |
| ```map_clustered```   | Boolean         | Optional             | ```false```      | Either ```true``` to enable clustering of map markers, or ```false``` otherwise. |
| ```map_style```       | String          | Optional             | ```light```      | A Mapbox style to be used as map tiles. Valid values are: ```light```, ```dark```, ```streets```, ```satellite```, ```satellite-streets```, ```basic```, ```bright```, ```outdoors```. |
| ```timeline_field```  | String          | Optional             | ```{ year:	'year', month: 'month', day: 'day' }```  | The name of the CSV field which contains time point values, or an object which contains the following three keys:  <br>       * ```year```: String. Required. The name of the CSV field which contains timeline year integer values within the range [1, 9999]. <br>       * ```month```:	String. Optional. The name of the CSV field which contains timeline month integer values within the range [1, 12].  <br>       * ```day```:	String. Optional. The name of the CSV field which contains timeline day integer values within the range [1, 31]. |
| ```timeline_format``` | String          | Optional             | ```'YYYY-MM-DD'```| Must be a valid format string describing the format of timeline values  contained within the CSV field specified by ```timeline_field```. List of valid values can be found at: http://momentjs.com/docs/#/parsing/string-format. |
| ```timeline_grouped```| Boolean         | Optional             | ```false```      | Either ```true``` to enable grouping of timeline points, or ```false``` otherwise. |

  In both cases (CSV string or JSON array) every row should contain the following valid fields:

  | Key                   | Data type       | Required or Optional | Default value | Description                                                |
  |:----------------------|:----------------|:---------------------|:--------------|:-----------------------------------------------------------|
  | ```id```              | String          | Required             |               | Must be unique and should it not contain full stops or commas. |
  | ```latitude```        | Decimal         | Optional             |               | If unknown, you can find the latitude and longitude for a certain location using this service http://www.spatialepidemiology.net/user_maps/. |
  | ```longitude```       | Decimal         | Optional             |               |  |
  | ```year```            | Integer         | Optional             |               | Range of valid values is [1, 9999]. |
  | ```month```           | Integer         | Optional             |               | Range of valid values is [1, 12]. |
  | ```day```             | Integer         | Optional             |               | Range of valid values is [1, 31]. |

### Responses

* **Success**

  * **Code:** 200 <br />
  * **Content:** a JSON object containing the following keys:
    * ```shortId```: A string containing the short unique identifier of the project.
    * ```url```: A string containing the URL of the project.

* **Error**

  * **Code:** 400 BAD REQUEST <br />
  * **Content:**  JSON object containing the following keys:
    * ```error```: A string describing the error.

### Sample

* **Call**

  ```bash
  curl -i -H "Content-type: application/json; charset=UTF-8" -X POST -d @project.json https://microreact.org/api/project/
  ```

  Where ```project.json``` is a file containing the JSON project specification, e.g.

  ```json
  {
     "name": "New project",
     "description": "New project description...",
     "email": "email@example.com",
     "website": "http://example.com",
     "data": "id,__latitude,__longitude,country,__year,__month,__day,country__color,country__shape,country__groupColor...,",

     "tree": "(LwvfR33:3.3,LVJeB53:5.3,VbrFX46:4.6,DIrBt40:4.0,RLInK79:7.9,..."
   }
  ```

* **Response**

  A valid request returns HTTP status code 200 with a JSON object containing the project short ID and URL:

  ```json
  {
    "shortId": "4JF6mqfXg",
    "url": "https://microreact.org/project/4JF6mqfXg"
  }
  ```

### Example Request Data

* **Linked files shared on Google Drive**
  ```
  {
    "name": "Google Drive files",
    "data": "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0B8VUXsoIMe56bnZVcllqWEoxWWs",
    "tree": "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=0B8VUXsoIMe56Y2FITlhGd3VoQmM"
  }
  ```

* **Linked files shared on Dropbox**
  ```
  {
    "name": "Dropbox files",
    "data": "https://www.dropbox.com/sh/v619erjdbjgmosb/AAC0Dcva0Jq6h7RfY7YJ6PO9a/data.csv?dl=1",
    "tree": "https://www.dropbox.com/sh/v619erjdbjgmosb/AAA0saLUTZ7Svxl2nbKphNXea/tree.nwk?dl=1"
  }
  ```

* **Files on NCBI FTP servers**
  ```
  {
    "name": "NCBI - Campylobacter",

    "data": "ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Metadata/ /.*.metadata.tsv/",
    "tree": "ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Campylobacter/latest_kmer/Trees/ /.*.reference_target.tree.newick/",

    "id": "target_acc",

    "timeline_field": "collection_date",
    "timeline_format": "YYYY-MM-DD",
    "timeline_grouped": true,

    "map_grouped": true,
    "map_clustered": false,
    "map_countryField": "geo_loc_name"
  }
  ```

* **Single field timeline**
  ```
  {
    "name": "Timeline from a single field",
    "data": "...",
    "tree": "...",
    "timeline": {
      "field": "date",
      "format": "YYYY-M-D"
    }
  }
  ```

* **Three fields timeline**
  ```
  {
    "name": "Timeline from a single field",
    "data": "...",
    "tree": "...",
    "timeline": {
      "year": "y",
      "month": "m",
      "day": "d"
    }
  }
  ```
