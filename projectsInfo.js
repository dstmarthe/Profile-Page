'use strict';
import styled from 'styled-components';

const boverText = styled.div`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#projInfo');
ReactDOM.render(e(LikeButton), domContainer);