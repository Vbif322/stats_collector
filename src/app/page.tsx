import { MyChart, SearchInput, ServersTable } from "@/components/shared";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-slate-900 h-[78px] px-8 py-4">
        <SearchInput />
      </div>
      <div>
        <p className="m-2">Список узлов сети: 1 запись</p>
        <ServersTable />
      </div>
    </div>
  );
}
