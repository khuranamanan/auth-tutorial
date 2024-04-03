import { KeyIcon } from "@/assets/icons";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-blue-200 to-cyan-200  dark:from-slate-900 dark:to-slate-700">
      <div className="space-y-6 text-center">
        <div className="flex justify-center items-center gap-2">
          <KeyIcon className="h-12 w-12" />
          <h1 className="text-6xl font-semibold drop-shadow-md">Auth</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          A simple authentication app built with Next.js, Tailwind CSS, and
          Auth.js.
        </p>
        <div>
          <LoginButton>
            <Button variant="default" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
