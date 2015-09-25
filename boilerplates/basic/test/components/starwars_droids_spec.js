const { StarwarsDroids } = MyReactComponent.Components;
const originalMethods = {};
const droids = [
  { id: 1, name: 'r2d2', avatar: 'none' },
  { id: 2, name: 'c-3po', avatar: 'none' },
];

describe('StarwarsDroids', () => {
  before(() => {
    originalMethods.componentWillMount = StarwarsDroids.prototype.componentWillMount;
    function componentWillMount() { this.state.droids = droids; }
    StarwarsDroids.prototype.componentWillMount = componentWillMount;
  });

  after(() => {
    StarwarsDroids.prototype.componentWillMount = originalMethods.componentWillMount;
  });

  context('when no props are used', () => {
    it('should list all droids with a name', () => {
      const starwarsDroidsTree = TestTree(<StarwarsDroids />);

      expect(starwarsDroidsTree.droids.length).to.equal(2);

      starwarsDroidsTree.droids.forEach((_, index) => {
        expect(starwarsDroidsTree['name_' + index].getDOMNode().innerHTML)
          .to.equal(droids[index].name);
      });
    });
  });

  context('when props.name = false', () => {
    it('should list all droids without a name', () => {
      const starwarsDroidsTree = TestTree(<StarwarsDroids name={ false } />);

      expect(starwarsDroidsTree.droids.length).to.equal(2);

      starwarsDroidsTree.droids.forEach((_, index) => {
        expect(starwarsDroidsTree['name_' + index]).to.be.undefined;
      });
    });
  });
});
