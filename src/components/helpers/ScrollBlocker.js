class ScrollBlocker {
  constructor($element) {
    this.el = $element;
    this.height = 0;
    this.delta = {x:0, y:0};
    this.lastEvent = false;
    this.direction = false;

    this.el.addEventListener('touchstart', this.onTouchStart);
    this.el.addEventListener('touchmove', this.onTouchMove);
  }

  destroy = () => {
    this.el.removeEventListener('touchstart', this.onTouchStart);
    this.el.removeEventListener('touchmove', this.onTouchMove);
  };

  easeInOutQuad(t, b, c, d){
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  getCursor(evt){
    if (evt.touches.length > 0){
      return {x:evt.touches[0].pageX,y:evt.touches[0].pageY};
    } else {
      return {x:evt.pageX,y:evt.pageY};
    }
  }

  onTouchStart = (evt) => {
    this.height = this.el.offsetHeight;

    /**
     * check if element scroll is at the top, or at the bottom,
     * and apply 1px offset to element so ios scrolls this element instead of document body
     * or some other element beneath
     */
    if (this.height < this.el.scrollHeight && this.el.scrollTop === 0){
      this.el.scrollTop = 1;
    } else if (this.height < this.el.scrollHeight && this.el.scrollTop === this.el.scrollHeight - this.height){
      this.el.scrollTop = this.el.scrollHeight - this.height - 1;
    }

    evt.stopPropagation();

    this.direction = false;
    this.delta.x = 0;
    this.delta.y = 0;
    this.lastEvent = this.getCursor(evt);
  };

  isAtBottom() {
    return this.el.scrollTop >= this.el.scrollHeight;
  }

  isAtTop() {
    return this.el.scrollTop < 2;
  }

  onTouchMove = (evt) => {

    if (evt.touches.length > 1){
      evt.preventDefault();
      return;
    }

    var position = this.getCursor(evt);
        this.delta.x += position.x - this.lastEvent.x;
        this.delta.y += position.y - this.lastEvent.y;

    var isAtBottom = this.el.scrollTop >= this.el.scrollHeight - this.height - 1 && this.delta.y < 0;
    var isAtTop = this.el.scrollTop < 2 && this.delta.y > 0;

    if (this.direction === false){
      if (Math.abs(this.delta.y) > Math.abs(this.delta.x)){
        this.direction = 'y';
      } else if (Math.abs(this.delta.y) <= Math.abs(this.delta.x)){
        this.direction = 'x';
      }
    }

    /**
     * if touch event is still scrolling this div
     * block the element from propagating, otherwise let it propagate to next scrolling one
     * in this case usually the draggable one, under scroller.
     */
    if ( this.direction==='y' && !isAtTop && !isAtBottom ){
      evt.stopPropagation();
    } else if (isAtTop || isAtBottom) {
      evt.preventDefault();
    }
  };
}

export default ScrollBlocker;
