import React, { useEffect, useState } from 'react';


const List = () => {
    const [data, setData] = useState([]);
    const [header, setHeader] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/list.php')
            .then(res => res.json())
            .then(result => {
                setHeader([result.data.headers[0]])
                setData([result.data.rows])
            })
    }, [])
    // console.log(header);

    return (

        <table className="table table-bordered">
            <thead>
                {
                    header.map((data, index) =>

                        <tr>
                            {/* <th>{index + 1}</th>  */}
                            {/* <th>{data.name.title}</th>
                            <th>{data.message.message}</th>
                            <th>{data.created_at.created_at}</th> */}
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
    );
};

export default List;