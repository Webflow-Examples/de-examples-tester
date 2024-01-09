
import React from 'react';

const DataTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Display Name</th>
                    <th>Short Name</th>
                    <th>Time Zone</th>
                    <th>Created On</th>
                    <th>Last Updated</th>
                    <th>Last Published</th>
                </tr>
            </thead>
            <tbody>
                {JSON.parse(data).map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.displayName}</td>
                        <td>{item.shortName}</td>
                        <td>{item.timeZone}</td>
                        <td>{new Date(item.createdOn).toLocaleDateString()}</td>
                        <td>{new Date(item.lastUpdated).toLocaleDateString()}</td>
                        <td>{item.lastPublished ? new Date(item.lastPublished).toLocaleDateString() : 'N/A'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;