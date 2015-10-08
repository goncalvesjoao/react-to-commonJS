const Prism = React.createClass({

  hightlight() { window.Prism.highlightElement(this.refs.code.getDOMNode()); },
  componentDidMount() { this.hightlight(); },
  componentDidUpdate() { this.hightlight(); },

  render() {
    return (
      <pre>
        <code ref="code" className={ this.props.className }>
          { this.props.children }
        </code>
      </pre>
    );
  },

});

module.exports = Prism;
