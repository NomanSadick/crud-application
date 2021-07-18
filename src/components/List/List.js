import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';


const List = () => {
    const [data, setData] = useState([]);
    const [header, setHeader] = useState([]);
    const [search, setSearch] = useState([""]);
    const [searchData, setSearchData] = useState([])

    console.log(searchData);

    useEffect(() => {
        fetch('http://localhost/api/list.php')
            .then(res => res.json())
            .then(result => {
                setData(result.data)
                console.log(data);
                setHeader([result.data.headers[0]])
                setData([result.data.rows])
            })
    }, [])
    console.log(data);
    console.log(search);
    const BarStyling = { width: "10rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    const handleChange = (e) => {
        setSearch(e.target.value);

    };

    const filteredData = data[0]?.filter((dt => dt.name == search));

    console.log(filteredData);
    return (

        <div>
            <Navbar></Navbar>
            <table className="table table-bordered">
                <thead>
                    <h1>Table List</h1>
                    <div className="">
                        <input
                            style={BarStyling}

                            key="random1"
                            value={search}
                            placeholder={"Search"}
                            onChange={handleChange}


                        />
                    </div>
                    {
                        header.map((data, index) =>

                            <tr>
                                <th>{data.id.title}</th>
                                <th>{data.name.title}</th>
                                <th>{data.message.title}</th>
                                <th>{data.created_at.title}</th>


                            </tr>
                        )
                    }

                </thead>
                <tbody>

                    {
                        data[0]?.map((data, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.message}</td>
                                <td>{data.created_at}</td>

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default List;