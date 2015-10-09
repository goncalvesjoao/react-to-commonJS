class Prism extends React.Component {

  hightlight() { window.Prism.highlightElement(this.refs.code); }

  componentDidMount() { this.hightlight(); }

  componentDidUpdate() { this.hightlight(); }

  render() {
    return (
      <pre>
        <code ref="code" className={ this.props.className }>
          { this.props.children }
        </code>
      </pre>
    );
  }

}

module.exports = Prism;
