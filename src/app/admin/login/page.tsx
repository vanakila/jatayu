"use client";

import { useActionState } from "react";
import Image from "next/image";
import { loginAction } from "./actions";

export default function AdminLoginPage() {
  const [error, formAction, isPending] = useActionState(
    async (_prevState: string | undefined, formData: FormData) => loginAction(formData),
    undefined,
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-sm rounded-lg border border-yellow-900/40 bg-zinc-950 p-8">
        <div className="flex flex-col items-center gap-2">
          <Image src="/logo.png" alt="Logo Jatayu Pomosda" width={64} height={64} />
          <h1 className="text-lg font-bold text-yellow-400">Admin Jatayu Pomosda</h1>
        </div>

        <form action={formAction} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border border-gray-700 bg-zinc-900 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 w-full rounded-md border border-gray-700 bg-zinc-900 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-md bg-yellow-500 py-2 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-60"
          >
            {isPending ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
