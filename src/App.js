import React, { Component } from 'react'
import Stepper from './components/Stepper'
import Template1 from './components/templates/Template1'
import Template2 from './components/templates/Template2'
import Template3 from './components/templates/Template3'
class App extends Component {
  constructor() {
    super()
    //style is optional
    this.style = {
      container:{
        paddingTop: 24,          //pixel
        paddingBottom: 24,       //pixel
      },
      shape:{
        size: 80,
        borderWidth: 4,
        borderRadius: '50%',
      },
      line: {
        borderWidth: 3,
        borderColor: 'gray',
        padding: 20
      }
    }

    // only icon or text possible not both
    this.state = {
      steps : [
        {
          text: '1',
          icon: 'fa-server',
          shapeBorderColor: 'green',
          shapeBackgroundColor: 'white',
          shapeContentColor: 'green',
          enabled: true
        },
        {
          text: '2',
          icon: 'fa-server',
          shapeBorderColor: '#f4b042',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#f4b042',
          enabled: true
        },
        {
          text: '3',
          icon: ' fa-home',
          shapeBorderColor: '#4f6cc1',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#4f6cc1',
          enabled: false
        },
        {
          text: '4',
          icon: 'fa-check',
          shapeBorderColor: '#ff5b3a',
          shapeBackgroundColor: 'white',
          shapeContentColor: '#ff5b3a',
          enabled: false
        }
      ],
      currentStep: 0
    }


    // this.changeStepEnabled = this.changeStepEnabled.bind(this)
    this.changeCurrentStep = this.changeCurrentStep.bind(this)
    this.changeStepEnabled = this.changeStepEnabled.bind(this) 
    this.test = this.test.bind(this)

  }


  changeStepEnabled(stepIndex, enabled) {
    const steps = this.state.steps
    steps[stepIndex].enabled = enabled
    this.setState({steps})
  }


  changeCurrentStep(currentStep) {
    this.setState({currentStep})
  }



  renderContent() {
    switch (this.state.currentStep) {
      case 0: return (<Template1 changeStepEnabled={this.changeStepEnabled} />)
      case 1: return (<Template2 changeStepEnabled={this.changeStepEnabled} />)
      case 2: return (<Template3 changeStepEnabled={this.changeStepEnabled} />)
      case 3: return (<div>Template4</div>)

    }
  }

  test(){
    this.changeStepEnabled(2, true)
  }

  render() {

    return (
      <div>
        <Stepper
          style={this.style}
          steps={this.state.steps}
          currentStep={this.state.currentStep}
          changeCurrentStep={this.changeCurrentStep}
        />
        <button onClick={this.test}>asdasd</button>
        {this.renderContent()}
      </div>
    )
  }
}

export default App





