import Counter from '../components/Counter'
import * as actions from '../actions'
import { connect } from "react-redux";
import { getRandomColor } from "../utils";

// store 안의 state 값을 props로 연결
const mapStateToProps = (state) => ({
	counters: state.counters
})

/* 
	액션 생성자를 사용하여 액션을 생성.
	해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결
*/
const mapDispatchToProps = (dispatch) => ({
	onIncrement: (index) => dispatch(actions.increment(index)),
	onDecrement: (index) => dispatch(actions.decrement(index)),
	onSetColor: (index) => {
		const color = getRandomColor()
		dispatch(actions.setColor(color))
	}
})

/* 
	Counter 컴포넌트의 Container 컴포넌트
	Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할
*/
const CounterConatainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterConatainer
