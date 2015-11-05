import Droid from '../../src/components/Droids/Droid';
import Droids from '../../src/components/Droids';
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
      const $droids = $(<Droids />).render();

      expect($droids.find(Droid).length).to.equal(2);

      $droids.find(Droid).each((node, index, collection) => {
        expect($(node).find('[name="droid-name"]').text()).to.not.equal('');
      })
    });
  });

  context('when props.name = false', () => {
    it('a list of droids without names should be returned', () => {
      const $droids = $(<Droids name={ false } />).render();

      expect($droids.find(Droid).length).to.equal(2);

      $droids.find(Droid).each((node, index, collection) => {
        expect($(node).find('[name="droid-name"]').text()).to.equal('');
      })
    });
  });
});
