import { connect } from 'react-redux'
import {saveVideoToStorage} from '../actions'
import Result from '../components/Result'

const mapStateToProps = (state, ownProps) => {
  return {
    result: ownProps.result
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(saveVideoToStorage(ownProps.result.id))
    }
  }
}

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)

export default ResultContainer
