import React, { Component } from 'react'
import { Grid, Form, Button, Image} from 'semantic-ui-react';
import styles from './registerSuccess.scss'

export default class RegisterSuccess extends Component {
  render() {
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row className='successContainer'>
          <Grid.Column className='whiteCard' mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <h1 className="whiteCardHeading">You're Registered for Reflections | Projections 2018</h1>
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='../{process.env.PUBLIC_URL + "/assets/2018logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='successPrompt verticalPadding'>
              You have succesfully registered for Reflections | Projections 2018! You should receive an email from us shortly with your <b>unique conference QR code</b>. Be sure to check your <b>spam folder</b>. 
            </Grid.Row>
            <Grid.Row className='successPrompt verticalPadding'>
            Check our website for information on the schedule of events! If you have any questions, please email us at <a href='mailto:contact@reflectionsprojections.org'>contact@reflectionsprojections.org</a>
            </Grid.Row>
            <Grid.Row className='successPrompt verticalPadding'>
               Don't forget to also register for the <a href="https://acmrp.org/symposiumregister" target="_blank"><u>ACM Symposium</u></a>, <a href="https://acmrp.typeform.com/to/MR6XmN" target="_blank"><u>MechMania</u></a> and <a href="https://puzzlebang.com" target="_blank"><u>PuzzleBang</u></a>
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <a href="/"><Button>Home</Button></a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
