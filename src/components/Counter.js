import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';



const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
	return (
		<div
			className="Counter"
			onClick={onIncrement}
			onContextMenu={ // 우클릭을 하여 메뉴가 열리는 이벤트
				(e) => {
					e.preventDefault(); // 이벤트 실행 방지
					onDecrement();
				}
			}
			onDoubleClick={onSetColor}
			style={{ backgroundColor: color }}>
			{number}
		</div>
	);
};

Counter.propTypes = {
	number: PropTypes.number,
	color: PropTypes.string,
	onIncrement: PropTypes.func,
	onDecrement: PropTypes.func,
	onSetColor: PropTypes.func
};

Counter.defaultProps = {
	number: 0,
	color: 'black',
	onIncrement: () => console.warn('onIncrement not defined'),
	onDecrement: () => console.warn('onDecrement not defined'),
	onSetColor: () => console.warn('onSetColor not defined'),
}

export default Counter;

