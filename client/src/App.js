import React, { Component } from 'react';
import zombieService from './services/zombieService';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { ZombiesView } from './components/zombies/zombies.view';
import { QuarantineView } from './components/quarantine/quarantine.view';

class App extends Component {

    constructor() {
        super();
        this.state = {
            zombies: [],
            quarantineCount: {
                hospital: 0,
                school: 0,
                warehouse: 0
            }
        }
    }

    componentDidMount() {
        let hospitalCount = 0;
        let schoolCount = 0;
        let warehouseCount = 0;
        Promise.resolve(zombieService.getAll())
            .then((res) => {
                this.setState({ zombies: res });
                res.forEach((zombie) => {
                    if (zombie.zombieLocation === 'Hospital') {
                        hospitalCount++;
                    } else if (zombie.zombieLocation === 'School') {
                        schoolCount++;
                    } else if (zombie.zombieLocation === 'Warehouse') {
                        warehouseCount++;
                    }
                });
            }).then(() => {
            this.handleQuarantineCount(hospitalCount, schoolCount, warehouseCount);
        })
    }

    handleQuarantineCount = (hospitalCount, schoolCount, warehouseCount) => {
        this.setState({
            quarantineCount: {
                hospital: hospitalCount,
                school: schoolCount,
                warehouse: warehouseCount
            }
        });
    };

    handleChange = (index) => (event) => {
        let zombies = this.state.zombies;
        zombies[index].zombieLocation = event.target.value;
        let id = zombies[index]._id;
        let body = zombies[index];
        let hospitalCount = 0;
        let warehouseCount = 0;
        let schoolCount = 0;
        Promise.resolve(this.setState({ zombies: zombies }))
            .then(() => {
                Promise.resolve(zombieService.findByIdAndUpdate(id, body))
                    .then(() => {
                        zombies.forEach((zombie) => {
                            if (zombie.zombieLocation === 'Hospital') {
                                hospitalCount++;
                            } else if (zombie.zombieLocation === 'School') {
                                schoolCount++;
                            } else if (zombie.zombieLocation === 'Warehouse') {
                                warehouseCount++;
                            }
                        });
                    }).then(() => {
                    this.handleQuarantineCount(hospitalCount, schoolCount, warehouseCount);
                })
            })
    };

    render() {

        const { zombies, quarantineCount } = this.state;

        return (

            <div>
                <AppBar id='AppBarz'>
                    <Toolbar>
                        <Avatar src='https://robohash.org/1?set=set2&size=180x180'>
                        </Avatar>
                        <Typography id='Typographyz' variant='h6'>
                            ZOMBIE MANAGER
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper id='Quarantinez'>
                    <QuarantineView quarantineCount={quarantineCount}/>
                </Paper>
                <Paper id='Zombiez'>
                    <ZombiesView zombies={zombies} handleChange={this.handleChange}/>
                </Paper>
            </div>
        )

    }

}

export default App;
