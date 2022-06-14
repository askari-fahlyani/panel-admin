import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id,
    title,
    executive,
    start,

) {
    return { id, title, executive, start };
}

const rows = [
    createData(10147, 'درخواست تغییر در ذخیره سازی', 'آتوسا انصاریان', '1401/3/5' ),
    createData(10148, 'نصب سرور های مورد نیاز درسایت DR', 'مدیر سیستم', '1401/3/6'),
    createData(10149, 'درخواست تغییر در ذخیره سازی', 'محمد عسکری', '1401/3/7'),
    createData(10150, 'نصب سرور های مورد نیاز درسایت DR', 'رضا شریفی', '1401/3/8'),
    createData(10151, 'درخواست تغییر در ذخیره سازی', 'نازنین عباسی', '1401/3/9'),
    createData(10151, 'نصب سرور های مورد نیاز درسایت DR', 'نادر فرامرزی', '1401/3/10'),
    createData(10151, 'درخواست تغییر در ذخیره سازی', 'نیلوفر زند وکیلی', '1401/3/11'),
    createData(10151, 'درخواست تغییر در ذخیره سازی', 'نیلوفر زند وکیلی', '1401/3/11'),
];

export default function DenseTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>شناسه</TableCell>
                        <TableCell align="right">عنوان فعالیت</TableCell>
                        <TableCell align="right">مجری</TableCell>
                        <TableCell align="right">شروع</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.executive}</TableCell>
                            <TableCell align="right">{row.start}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
