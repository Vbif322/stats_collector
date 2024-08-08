import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";
import { ServerDialog } from "./serverDialog";

const servers = [
  {
    caption: "SPB99",
    ip: "10.10.10.10",
    role: "app server",
    id: "29099",
    date: dayjs().format(),
    uptime: "24d 16h",
    method: "WMI",
    poller: "SPB899",
  },
  {
    caption: "SPB999",
    ip: "19.19.19.19",
    role: "app server1",
    id: "29090",
    date: dayjs().format(),
    uptime: "12d 14h",
    method: "WMI",
    poller: "SPB999",
  },
];

export const ServersTable = ({ data = servers }) => {
  return (
    <Table>
      <TableCaption>A list of available servers</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">№</TableHead>
          <TableHead>Caption</TableHead>
          <TableHead>IP</TableHead>
          <TableHead>Роль</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Last time up (мск)</TableHead>
          <TableHead className="text-right">Uptime</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((server, i) => (
          <ServerDialog key={server.caption} data={server}>
            <TableRow>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{server.caption}</TableCell>
              <TableCell>{server.ip}</TableCell>
              <TableCell>{server.role}</TableCell>
              <TableCell>{server.id}</TableCell>
              <TableCell>{server.date}</TableCell>
              <TableCell className="text-right">{server.uptime}</TableCell>
            </TableRow>
          </ServerDialog>
        ))}
      </TableBody>
    </Table>
  );
};
