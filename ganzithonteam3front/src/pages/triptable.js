import React from "react";



const Triptable = ({ data }) => {

    return (

        <table border="1">
            <thead>
                <tr>
                    <th>시간</th>
                    <th>장소</th>
                    <th>메모</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.time}</td>
                        <td>{row.place}</td>
                        <td>{row.memo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Triptable;