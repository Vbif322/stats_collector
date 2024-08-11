"use client";

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
import { useState } from "react";
import { CustomDialog } from "./customDialog";
import { IServer } from "@/lib/types";

const servers = [
  {
    host: "SPB99",
    ip: "10.10.10.10",
    role: "app server",
    id: "29099",
    last_time_up: dayjs().format(),
    uptime: "24d 16h",
  },
  {
    host: "SPB999",
    ip: "19.19.19.19",
    role: "app server1",
    id: "29090",
    last_time_up: dayjs().format(),
    uptime: "12d 14h",
  },
];

export const ServersTable = ({ data = servers }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedServer, setSelectedServer] = useState({});

  const handleClickOnRow = (server: IServer) => {
    setSelectedServer(server);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      {openDialog && <CustomDialog closeCallback={handleCloseDialog} />}
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
            <TableRow
              key={server.host}
              onClick={() => handleClickOnRow(server)}
            >
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{server.host}</TableCell>
              <TableCell>{server.ip}</TableCell>
              <TableCell>{server.role}</TableCell>
              <TableCell>{server.id}</TableCell>
              <TableCell>{server.last_time_up}</TableCell>
              <TableCell className="text-right">{server.uptime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
