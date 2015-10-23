const { Droids } = MyReactComponent.components;
const mockedDroids = [
  { id: 1, name: 'r2d2', avatar: 'none' },
  { id: 2, name: 'c-3po', avatar: 'none' },
];

describe('Droids', () => {
  before(() => {
    sinon.stub(Droids.prototype, 'componentWillMount', function componentWillMount() {
      this.state.droids = mockedDroids;
    });
  });
  after(() => { Droids.prototype.componentWillMount.restore(); });

  context('when no props are used', () => {
    it('a list of droids with names should be returned', () => {
      const droids = TestUtils.renderIntoDocument(<Droids />);

      expect(Object.keys(droids.refs).length).to.equal(2);

      for (const index in droids.refs) {
        const droid = droids.refs[index];
        expect(droid.refs.name).to.exist;
      }
    });
  });

  context('when props.name = false', () => {
    it('a list of droids without names should be returned', () => {
      const droids = TestUtils.renderIntoDocument(<Droids name={ false } />);

      expect(Object.keys(droids.refs).length).to.equal(2);

      for (const index in droids.refs) {
        const droid = droids.refs[index];
        expect(droid.refs.name).to.not.exist;
      }
    });
  });
});
