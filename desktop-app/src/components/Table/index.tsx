import React from 'react';

interface TableProps {
  data: object[];
}

type TableOptions = {
  data: object[];
};

export default function Table(props: TableProps | TableOptions) {
  console.log(props);

  return (
    <table className="table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Kind</th>
          <th>File Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>photon.css</td>
          <td>CSS</td>
          <td>28K</td>
        </tr>
        <tr>
          <td>photon.css</td>
          <td>CSS</td>
          <td>28K</td>
        </tr>
        <tr>
          <td>photon.css</td>
          <td>CSS</td>
          <td>28K</td>
        </tr>
        ...
        <tr>
          <td>photon.css</td>
          <td>CSS</td>
          <td>28K</td>
        </tr>
      </tbody>
    </table>
  );
}
