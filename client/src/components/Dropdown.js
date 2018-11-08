import React from 'react'
 
import ReactSingleDropdown from 'react-single-dropdown'
 
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    reason:""
  };
  }
  onDropdownSelect = (value) => {
    console.log('Selected value=', value)
    this.setState({reason:value})
  }

  
  render() {
    return <div>
      <ReactSingleDropdown 
      defaultSelected = 'Choose'
      onSelect={this.onDropdownSelect}
      noAnimation
      options={['Choose','Member Fee','Donation','Collection']}
      />
    </div>
  }
}