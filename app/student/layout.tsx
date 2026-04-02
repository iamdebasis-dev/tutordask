import Navbar from "../navbar/page";


export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  );
}