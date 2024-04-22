"use client";
import { usePathname } from "next/navigation";

interface LogoutProps {
  handleLogout: () => void;
}

export default function Logout({ handleLogout }: LogoutProps) {
  const pathname = usePathname();

  return (
    pathname !== "/login" && (
      <form action={handleLogout}>
        <button type="submit">Logout</button>
      </form>
    )
  );
}
