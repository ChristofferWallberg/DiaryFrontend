import GetUsers from "./GetUsers";

function GetDiaries() {
  const users = GetUsers();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col h-screen">
        {users.map((user) => (
          <div key={user.id} className="flex border border-black m-10 p-10">
            <h1 className="text-lg font-bold">Username: {user.username}</h1>
            <h2 className="text-lg font-bold">Diary entries:</h2>
            {user.diary.diaryEntries.map((entry) => (
              <div
                key={entry.id}
                className="flex border border-black m-10 p-10 justify-between"
              >
                <h3 className="text-lg font-bold">Title: {entry.title}</h3>
                <p className="text-base">Text: {entry.text}</p>
                <p className="text-base">
                  Timestamp:{entry.localDateTimeStamp}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetDiaries;
