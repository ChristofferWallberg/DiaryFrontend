{diaries.map((user) => (
    <div key={user.id} className="flex flex-col items-center p-3 m-5 bg-slate-400">
    <h2>{user.username}</h2>
      <form onSubmit={(e) => handleSubmit(e, user.id)}>
        <div className="m-1">
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="title"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(user) => setTitle(user.target.value)}
            className="min-h-40 w-64 p-2 border border-gray-400"
          />
        </div>
        <div className="flex-grow m-1">
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="title"
          >
            Text:
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(user) => setText(user.target.value)}
            className="min-h-40 w-64 p-2 border border-gray-400"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    ))}