import { AppSidebar } from "@/components/appSidebar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2">
      <aside className="hidden md:block lg:block xl:block">
        <AppSidebar />
      </aside>
      <section className="p-2 w-full">{children}</section>
    </div>
  );
}
