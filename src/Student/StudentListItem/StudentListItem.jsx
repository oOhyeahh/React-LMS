import React from 'react';
import moment from 'moment';

export default function StudentListItem({ student }) {
  return (
    <tr>
      <td>{student.fullName}</td>
      <td>{student.email}</td>
      <td>{student.gender}</td>
      <td>{moment(student.dateOfBirth).format('MMM DD YYYY')}</td>
      <td>{student.credit}</td>
      <td style={{ textAlign: 'right' }}>
        <button className="ui teal tiny button">
          <i className="edit icon" />
          Details
        </button>
      </td>
    </tr>
  );
}
