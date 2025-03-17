import { getAllNotes } from "@/lib/redis";
import SidebarNoteItem from "./SidebarNoteItem";
const SidebarNoteList = async () => {
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  await sleep(5000);
  const notes = await getAllNotes();
  const arr = Object.entries(notes);

  if (arr.length === 0) {
    return <div className="notes-empty"> {"No notes created yet!"}</div>;
  }
  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        return (
          <li key={noteId}>
            <SidebarNoteItem
              noteId={noteId}
              note={JSON.parse(note)}
            ></SidebarNoteItem>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarNoteList;
