import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-200  dark:from-slate-900 dark:to-slate-700">
      {children}
    </div>
  );
}

export default AuthLayout;
