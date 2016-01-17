import React from 'react';
import DragView from './helpers/DragView';

class DraggableView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.dragView = new DragView(this.refs.draggable, this.props.options || {});
  }

  render () {
    let classNames = this.props.className ? this.props.className + ' drag-view' : 'drag-view';
    return (<div className={classNames} ref="draggable">{this.props.children}</div>);
  }
}

export default DraggableView;
