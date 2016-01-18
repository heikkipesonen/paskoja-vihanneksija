class Draggable {
  constructor (element) {
    this.element = element;

    this.state = {
      $dirty: false
    };

    this.options = {
      bounds: {
        x: 0,
        y: 0,
        maxx: 0,
        maxy: 0,
        axisx: true,
        axisy: true,
        tension: 0.3
      }
    }
  }

  destroy() {
    window.cancelAnimationFrame(this.update);
  }

  update = () => {
    if (this.state.$dirty) {

    }
    window.requestAnimationFrame(this.update);
  }
}
