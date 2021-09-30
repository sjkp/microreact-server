import React from "react";
import PhylocanvasGL from "@phylocanvas/phylocanvas.gl";

export default class PhylocanvasTree extends React.Component {

  static displayName = "Phylocanvas"

  canvasRef = React.createRef()

  componentDidMount() {
    this.tree = new PhylocanvasGL(
      this.canvasRef.current,
      this.props || {},
    );
  }

  componentDidUpdate() {
    this.tree.setProps(this.props);
  }

  componentWillUnmount() {
    this.tree.destroy();
  }

  render() {
    return (
      <div ref={this.canvasRef} />
    );
  }

}
