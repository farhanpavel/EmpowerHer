"use client";
import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel, // Import getSortedRowModel
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { url } from "@/components/Url/page";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import Link from "next/link";
import { columns } from "./_datatable/action";
import { useAppContext } from "@/components/Context/admincontext";
import { Input } from "@/components/ui/input";

export default function Page() {
  const [sorting, setSorting] = useState<SortingState>([]);
  // const [users, setUsers] = useState<User[]>([]);
  const { policeData, setpoliceData } = useAppContext();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/api/police`);
      const json = await response.json();
      if (response.ok) {
        setpoliceData(json);
      }
    };
    fetchData();
  }, []);

  const table = useReactTable({
    data: policeData,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div>
          <Input
            placeholder="Search by name"
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-[20rem] text-xs"
          />
        </div>
        <div className="flex items-center">
          <Link
            className="bg-[#FF2EBC] hover:transition-all hover:delay-200 hover:bg-pink-500 py-2 px-4 rounded-[5px] text-white text-xs "
            href="/womendashboard/entry/policecomplain/new"
          >
            Create Complain
          </Link>
        </div>
      </div>
      <div className="rounded-md border">
        <Table className="w-full ">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-left ">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-[310px] text-center text-muted-foreground border-[1px] border-gray-300"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
