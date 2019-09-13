import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export class QuarantineView extends Component {

    render() {

        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className='TableCellz'>Location</TableCell>
                            <TableCell className='TableCellz'>Zombie Population</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key='H'>
                            <TableCell>Hospital</TableCell>
                            <TableCell>{this.props.quarantineCount.hospital}</TableCell>
                        </TableRow>
                        <TableRow key='S'>
                            <TableCell>School</TableCell>
                            <TableCell>{this.props.quarantineCount.school}</TableCell>
                        </TableRow>
                        <TableRow key='W'>
                            <TableCell>Warehouse</TableCell>
                            <TableCell>{this.props.quarantineCount.warehouse}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )

    }

}