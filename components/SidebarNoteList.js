import SidebarNoteItem from "./SidebarNoteItem";
function SidebarNoteList({ notes }) {
  const arr = Object.entries(notes);

  if (arr.length === 0) {
    return <div className="notes-empty"> {"No notes created yet!"}</div>;
  }
  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        // const { title, updateTime } = JSON.parse(note);

        return (
          <li key={noteId}>
            <SidebarNoteItem note={JSON.parse(note)}></SidebarNoteItem>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarNoteList;
