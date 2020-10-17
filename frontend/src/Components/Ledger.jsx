import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Ledger = () => {
  const state = useSelector((state) => state);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("all");
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await Axios.get(
        `http://localhost:9000/api/getTrans/${state.user}?page=${page}&type=${type}`
      )
        .then((res) => res.data)
        .then((res) => {
          setData(res.current);
          setNext(res.next || false);
          setPrev(res.prev || false);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [page, type]);

  return (
    <div id="ledger">
        <h2>All Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Type</th>
            <th>Amount(in Rs.)</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((e) => (
              <tr key={e._id}>
                <td>{e.date}</td>
                <td>{e.title}</td>
                <td>{e.type}</td>
                <td>{e.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>

        <div id="prev-next">

      {prev && <button onClick={() => setPage(prev.page)}>Previous</button>}
      {next && <button onClick={() => setPage(next.page)}>Next</button>}
        </div>
    </div>
  );
};

export default Ledger;
