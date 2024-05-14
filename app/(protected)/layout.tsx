import Navbar from "./_components/navbar";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10 justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200  dark:from-slate-900 dark:to-slate-700 p-4">
      <Navbar />
      {children}
    </div>
  );
}

export default ProtectedLayout;
