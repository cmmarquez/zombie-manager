import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export class ZombiesView extends Component {

    render() {

        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className='TableCellz'>Zombies</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <br/>
                <Grid container spacing={4}>
                    {
                        this.props.zombies.map((zombie, index) => (
                            <Grid item key={zombie._id} xs={12} lg={2}>
                                <Card>
                                    <CardContent>
                                        <Avatar src={zombie.image}>
                                        </Avatar>
                                        <Typography id='Card-Typographyz'>
                                            Zombie ID: {zombie._id.substring(zombie._id.length - 10, zombie._id.length)}
                                        </Typography>
                                        <TextField
                                            onChange={this.props.handleChange(index)}
                                            select
                                            value={zombie.zombieLocation}>
                                            <MenuItem key='H' value='Hospital'>Hospital</MenuItem>
                                            <MenuItem key='S' value='School'>School</MenuItem>
                                            <MenuItem key='W' value='Warehouse'>Warehouse</MenuItem>
                                        </TextField>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        );

    }

}