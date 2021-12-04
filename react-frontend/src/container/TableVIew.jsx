import React from "react";
import Address from "./Address";
import Company from "./Company";
import TextHighlight from "../common/TextHighlight";

function TableView({ data, schema, qLength }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col" width="500px">
            Address
          </th>
          <th scope="col">Phone</th>
          <th scope="col">website</th>
          <th scope="col">Company</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>
              <TextHighlight
                text={item.name}
                hIndex={schema[index]?.name}
                hLength={qLength}
              />
            </td>
            <td>
              <TextHighlight
                text={item.username}
                hIndex={schema[index]?.username}
                hLength={qLength}
              />
            </td>
            <td>
              <TextHighlight
                text={item.email}
                hIndex={schema[index]?.email}
                hLength={qLength}
              />
            </td>
            <td width="500px">
              <Address
                data={item.address}
                schema={schema[index]?.address}
                qLength={qLength}
              />
            </td>
            <td>
              <TextHighlight
                text={item.phone}
                hIndex={schema[index]?.phone}
                hLength={qLength}
              />
            </td>
            <td>
              <TextHighlight
                text={item.website}
                hIndex={schema[index]?.website}
                hLength={qLength}
              />
            </td>
            <td>
              <Company
                data={item.company}
                schema={schema[index]?.company}
                qLength={qLength}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableView;
