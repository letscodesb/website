constructor(props) {
    super(props);
    this.domRef = React.createRef();

    this.state = {
      visibility: false,
    };
  }

  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        this.setState({ visibility: entry.isIntersecting })
      );
    });
    observer.observe(this.domRef.current);
  }

  render() {
    return (
      <div id="curriculum-section" className={this.state.visibility ? 'fadeable visible' : 'fadeable hidden'} ref={this.domRef}></div>
    )
  }