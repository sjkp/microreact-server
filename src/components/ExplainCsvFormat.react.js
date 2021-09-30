import React from 'react';

const shapeImageStyle = {
  width: '13px',
};

const ExplainCsvFormat = () => (
  <div>
    <h4>
      Data file
    </h4>
    <p>
      This contains multiple columns/rows of data,
      with data variables as columns and entries as rows.
      There is no upper limit to the number of data variables (columns) or entries (rows) that you can define.
    </p>
    <h4>
      Required column
    </h4>
    <p>
    Your data file (<code>csv</code> or <code>tsv</code>) file must must contain the following column:
    </p>
    <table className="mdl-data-table">
      <tbody>
        <tr>
          <td>
            <code>id</code>
          </td>
          <td>
              An identifier for your data row.
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      The IDs in your data file must be unique and exclude full stops and commas.
    </p>

    <h4>
      Optional columns
    </h4>

    <p>
    In addition, your data file (<code>csv</code> or <code>tsv</code>) can contain the following columns:
    </p>

    <table className="mdl-data-table">
      <tbody>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>latitude</code>
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            Decimal latitude (WGS84).
          </td>
        </tr>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>longitude</code>
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            Decimal longitude (WGS84).
          </td>
        </tr>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>year</code>
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            Parsed as number (i.e., 2016 and 16 are not the same year).
          </td>
        </tr>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>month</code>
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            Parsed as number (i.e, 03 and 3 are both parsed as March).
          </td>
        </tr>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>day</code>
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            Parsed as number.
          </td>
        </tr>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>ColumnName__colour</code>
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            Assign a specific colour to a data attribute.
          </td>
        </tr>
        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>ColumnName__shape</code>
          </td>
          <td className="mdl-data-table__cell--non-numeric">
            Assign a specific shape to a data attribute.
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      If you need to geocode data you can use the following tool: <a href="http://www.spatialepidemiology.net/user_maps" target="_blank">www.spatialepidemiology.net/user_maps</a>
    </p>

    <p>
      Data without colour/shape definitions are displayed as text only on the tree leaves and within a table.
    </p>

    <h4>
      Example - Defining colour
    </h4>

    <p>
      If you had a column named <code>Country</code>
      you would add a column called <code>Country__colour</code> (or <code>Country__color</code>) containing colour values.
      Colours are defined using standard HEX colour codes
      or <a href="https://developer.mozilla.org/en/docs/Web/CSS/color_value#Color_keywords"> valid HTML5 colour names</a>.
      A colour wheel allowing you to pick colours can be found here: <a href="http://www.colorpicker.com" target="_blank">http://www.colorpicker.com/</a>.
    </p>

    <p>
      Alternatively, the column <code>Country</code> can be renamed to <code>Country__autocolour</code>
      (or <code>Country__autocolor</code>) to assign random colours to unique values of the column <code>Country</code>.
    </p>

    <h4>
      Example - Defining shape
    </h4>

    <p>
      If you had a column named <code>Country</code> you would add a column called <code>Country__shape</code>.
    </p>

    <p>
    Shapes are defined using one of the following values:
    </p>

    <table className="mdl-data-table mdl-typography--table-striped">
      <tbody>

        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>circle</code>
          </td>
          <td>
              <img src="images/instructions/shape_circle.png" style={shapeImageStyle} />
          </td>
        </tr>

        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>square</code>
          </td>
          <td>
              <img src="images/instructions/shape_square.png" style={shapeImageStyle} />
          </td>
        </tr>

        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>star</code>
          </td>
          <td>
              <img src="images/instructions/shape_star.png" style={shapeImageStyle} />
          </td>
        </tr>

        <tr>
          <td className="mdl-data-table__cell--non-numeric">
            <code>triangle</code>
          </td>
          <td>
              <img src="images/instructions/shape_triangle.png" style={shapeImageStyle} />
          </td>
        </tr>

      </tbody>
    </table>

    <h4>
      Example csv file
    </h4>

    <p>
      For an example dataset of mammalian species,
      we will define a <code>latitude</code> and
      <code>longitude</code> for each species,
      along with a couple of other metadata columns:
      country of sample and pedalism (whether two or four legged).
      We will also define a <code>__colour</code> and a <code>__shape</code> for each different country.
    </p>

    <table className="mdl-data-table mdl-typography--table-striped">
        <thead>
            <tr>
                <th className="mdl-data-table__cell--non-numeric">id</th>
                <th className="mdl-data-table__cell--non-numeric">latitude</th>
                <th className="mdl-data-table__cell--non-numeric">longitude</th>
                <th className="mdl-data-table__cell--non-numeric">Country</th>
                <th className="mdl-data-table__cell--non-numeric">Country__colour</th>
                <th className="mdl-data-table__cell--non-numeric">Country__shape</th>
                <th className="mdl-data-table__cell--non-numeric">Pedalism</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Bovine</td>
                <td className="mdl-data-table__cell--non-numeric">46.227638</td>
                <td className="mdl-data-table__cell--non-numeric">2.213749</td>
                <td className="mdl-data-table__cell--non-numeric">France</td>
                <td className="mdl-data-table__cell--non-numeric">Red</td>
                <td className="mdl-data-table__cell--non-numeric">square</td>
                <td className="mdl-data-table__cell--non-numeric">Four</td>
            </tr>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Gibbon</td>
                <td className="mdl-data-table__cell--non-numeric">15.870032</td>
                <td className="mdl-data-table__cell--non-numeric">100.992541</td>
                <td className="mdl-data-table__cell--non-numeric">Thailand</td>
                <td className="mdl-data-table__cell--non-numeric">Green</td>
                <td className="mdl-data-table__cell--non-numeric">circle</td>
                <td className="mdl-data-table__cell--non-numeric">Two</td>
            </tr>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Orangutan</td>
                <td className="mdl-data-table__cell--non-numeric">-0.589724</td>
                <td className="mdl-data-table__cell--non-numeric">101.3431058</td>
                <td className="mdl-data-table__cell--non-numeric">Sumatra</td>
                <td className="mdl-data-table__cell--non-numeric">Blue</td>
                <td className="mdl-data-table__cell--non-numeric">circle</td>
                <td className="mdl-data-table__cell--non-numeric">Two</td>
            </tr>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Gorilla</td>
                <td className="mdl-data-table__cell--non-numeric">1.373333</td>
                <td className="mdl-data-table__cell--non-numeric">32.290275</td>
                <td className="mdl-data-table__cell--non-numeric">Uganda</td>
                <td className="mdl-data-table__cell--non-numeric">#CC33FF</td>
                <td className="mdl-data-table__cell--non-numeric">circle</td>
                <td className="mdl-data-table__cell--non-numeric">Two</td>
            </tr>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Chimp</td>
                <td className="mdl-data-table__cell--non-numeric">-0.228021</td>
                <td className="mdl-data-table__cell--non-numeric">15.827659</td>
                <td className="mdl-data-table__cell--non-numeric">Congo</td>
                <td className="mdl-data-table__cell--non-numeric">Orange</td>
                <td className="mdl-data-table__cell--non-numeric">circle</td>
                <td className="mdl-data-table__cell--non-numeric">Two</td>
            </tr>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Human</td>
                <td className="mdl-data-table__cell--non-numeric">55.378051</td>
                <td className="mdl-data-table__cell--non-numeric">-3.435973</td>
                <td className="mdl-data-table__cell--non-numeric">UK</td>
                <td className="mdl-data-table__cell--non-numeric">#CCFF33</td>
                <td className="mdl-data-table__cell--non-numeric">circle</td>
                <td className="mdl-data-table__cell--non-numeric">Two</td>
            </tr>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Mouse</td>
                <td className="mdl-data-table__cell--non-numeric">40.463667</td>
                <td className="mdl-data-table__cell--non-numeric">-3.74922</td>
                <td className="mdl-data-table__cell--non-numeric">Spain</td>
                <td className="mdl-data-table__cell--non-numeric">#00FFFF</td>
                <td className="mdl-data-table__cell--non-numeric">square</td>
                <td className="mdl-data-table__cell--non-numeric">Four</td>
            </tr>
        </tbody>
    </table>
  </div>
);

ExplainCsvFormat.displayName = 'ExplainCsvFormat';

export default ExplainCsvFormat;
