import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { getAllNotes } from "@/lib/redis";
import SidebarNoteList from "./SidebarNoteList";

export default async function Sidebar() {
  const notes = await getAllNotes();

  return (
    <>
      <section className="col sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src={Logo}
              width={22}
              height={20}
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          {/* SideSearchField */}
        </section>
        <nav>
          <SidebarNoteList notes={notes}></SidebarNoteList>
        </nav>
      </section>
    </>
  );
}
