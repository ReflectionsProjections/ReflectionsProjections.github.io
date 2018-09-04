/*

  ACTUAL FORM WE WILL BE USING. SEE register/registerFielsConfig.js FOR EXACT FIELDS

*/
import React, { Component } from 'react';
// Components
import RegisterNav from '../registerNav/registerNav';
import InputField from '../inputField/inputField';
import RegisterButtons from '../registerButtons/registerButtons';
import { Grid, Form, Transition, Button, Dropdown } from 'semantic-ui-react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'


import styles from './registerForm.scss'

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      visible: true
    };
  };

  componentWillMount() {
    this.setState({ data: this.props.data });
  };

  handleChange = (e, {name, type, value}) => {
    if (type=='file') {
      const files = e.target.files;
      const file = files[0];
      // Check for file and size
      if (file.type == "application/pdf" && file.size < 2000000) {
        this.setState({ data: {...this.state.data, [name]: file}});
      }
    }
    else if (type=='number') {
      this.setState({ data: {...this.state.data, [name]: Number(value) }});
    }
    else if (type=='bool') {
      this.setState({ data: {...this.state.data, [name]: value=='true' }});
    }
    else {
      this.setState({ data: {...this.state.data, [name]: value }});
    }
  };

  checkProperties = () => {
    const forms = this.props.forms;
    const data  = this.state.data;

    for (let index in forms) {
      const config = forms[index];
      if (((data[config.id] == null || (typeof data[config.id] == 'string' && data[config.id] == "")) && config.required) || !config.validate(data[config.id])) {
        return false;
      }
    }
    return true;
  };

  validateStep = () => {
    const { data, visible } = this.state;
    const nextStep          = this.props.nextStep;

    if(this.checkProperties()) {
      nextStep(data);
    }
    else {
      this.setState({ visible: !visible });
    }
  };

  render() {
    // Variables setup
    const {data, visible} = this.state;
    const step            = this.props.step;
    const forms           = this.props.forms;
    const previousStep    = this.props.previousStep ? () => this.props.previousStep(data) : null;
    const validateStep    = this.validateStep;
    const handleChange    = this.handleChange;
    const submitForm      = this.props.submitForm;
    console.log("Register form ", submitForm);
    // submitForm();
    return(
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={12} computer={16}>
            <Transition animation='shake' duration='300' visible={visible}>
              <Form size='small'>
                <Grid className='formContainer' doubling columns={2}>
                  {forms.map((config, index) =>
                    <Grid.Column width={config.width} key={index}>
                      <InputField value={data[config.id]} config={config} handleChange={handleChange}/>
                    </Grid.Column>
                  )}
                </Grid>
              </Form>
            </Transition>
          </Grid.Column>
        </Grid.Row>
        <div className='buttonContainer'>
          <Button icon size='small' labelPosition='right' floated='right' onClick={submitForm}>
            <span className="labelText opposite">SUBMIT</span>
            <FontAwesomeIcon icon={faCaretRight} size="2x"/>
          </Button>
          <h4 className="required">* = Required</h4>
        </div>

      </Grid>
    )
  }
}
