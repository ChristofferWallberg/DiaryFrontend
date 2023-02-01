import React, { useEffect, useState } from "react";

function GetDiaries() {

    const [diaries, setDiaries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/Users')
            .then(response => response.json())
            .then(data => setDiaries(data));
    }, []);


    return (
        <div className="grow">
            {diaries.map((user) => (
                <div className="float-left border-4 border-solid rounded-b-lg p-3 m-5" key={user.id}>
                    <h3>{user.username}'s Diary</h3>
                    {user.diary.diaryEntries.map((entry) => (
                        <div className="">
                            <h5>Title: {entry.title}:</h5>
                            <p>Text: {entry.text}</p>
                            <p>Timestamp: {entry.localDateTimeStamp.toString()}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default GetDiaries;