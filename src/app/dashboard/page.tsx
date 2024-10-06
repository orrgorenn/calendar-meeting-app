import { authUser } from "@/lib/hooks";

export default async function DashboardPage() {
  const session = await authUser();

  return <div>DashboardPage</div>;
}
