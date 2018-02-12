import React from 'react'
import {
    Button,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    Label,
    Menu,
    Message,
    Segment,
    Table,
} from 'semantic-ui-react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Curtains from './Curtains';
import RawCurtains from './RawCurtains';
import Dashboard from './Dashboard';

const AppHeader = () => (
    <Router>
        <div>
            <Grid>
                <Grid.Row style={{ marginLeft: '6rem', marginRight: '6rem', paddingTop: '2rem' }}>
                    <Grid.Column width={8} >
                        <Image size='small' src='img/nh-icon.jpg'></Image>
                    </Grid.Column>
                    <Grid.Column textAlign="right" verticalAlign="bottom" width={8} >
                        <p>We specialize in home decor..</p>
                    </Grid.Column>
                </Grid.Row>
                <Divider style={{ margin: '0rem' }} />
                <Grid.Row columns={7} stretched style={{ marginLeft: '6rem', marginRight: '6rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                    <Grid.Column as={Link} to='/curtains-raw' style={{}}>
                        <p>Raw Curtains Material</p>
                    </Grid.Column>
                    <Grid.Column as={Link} to='/curtains' style={{}}>
                        <p>Curtains</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>Bed Sheets</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>Floor Mats</p>
                    </Grid.Column>
                </Grid.Row>
                <Divider style={{ margin: '0rem' }} />
                {/* <Grid.Row stretched style={{ marginLeft: '6rem', marginRight: '6rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                <MenuItem />
            </Grid.Row> */}
            </Grid>
            <Route exact path="/" component={Dashboard} />
            <Route path="/curtains" component={Curtains} />
            <Route path="/curtains-raw" component={RawCurtains} />
        </div>
    </Router>

)
export default AppHeader