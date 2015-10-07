const { Droids } = MyReactComponent.Components;
const droids = [
  { id: 1, name: 'r2d2', avatar: 'none' },
  { id: 2, name: 'c-3po', avatar: 'none' },
];

describe('Droids', () => {
  before(() => {
    sinon.stub(Droids.prototype, 'componentWillMount', function componentWillMount() {
      this.state.droids = droids;
    });
  });
  after(() => { Droids.prototype.componentWillMount.restore(); });

  context('when no props are used', () => {
    it('a list of droids with names should be returned', () => {
      const droidsTree = TestTree(<Droids />);

      expect(droidsTree.droids.length).to.equal(2);

      droidsTree.droids.forEach((droid) => {
        expect(droid.name).to.exist;
      });
    });
  });

  context('when props.name = false', () => {
    it('a list of droids without names should be returned', () => {
      const droidsTree = TestTree(<Droids name={ false } />);

      expect(droidsTree.droids.length).to.equal(2);

      droidsTree.droids.forEach((droid) => {
        expect(droid.name).to.not.exist;
      });
    });
  });
});
