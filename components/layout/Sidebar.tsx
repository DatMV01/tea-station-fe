import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-60 dark:border-gray-800 p-6 flex flex-col gap-4">
      <Link href="#">🏠 Home</Link>
      <Link href="#">⚙️ Hello</Link>
      <Link href="#">⚙️ Settings</Link>
    </aside>
  );
};

export default Sidebar;
