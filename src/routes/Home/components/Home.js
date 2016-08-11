import React from 'react'
import ConsumptionTable from './ConsumptionTable'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchLogAsync();
    setTimeout(() => console.log(this.props.home),1000)
  }

  render() {
    return (
      <div>
        <ConsumptionTable log={this.props.home.log}/>
      </div>
    )
  }
}

export default Home
