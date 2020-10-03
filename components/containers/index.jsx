import Holder from './holder'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchContainersAsync } from '../../redux/actions/container'

const Index = props => {

    useEffect(() => {
        props.fetchContainer()
    }, [])

    return (
        <div>
            {props.cons.map(el => <Holder name={el.name} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cons: state.container.cons
    }
}

const mapDispatchToProps = dispatch => {

    return {
        fetchContainer: () => { dispatch(fetchContainersAsync()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)