import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Button } from "./ui/button.jsx";
import { Checkbox } from "@/components/ui/checkbox";
import { queryGenerator } from "../lib/utils.js";

export default function Header() {
  const [items, setItems] = useState({
    draft: false,
    paid: false,
    pending: false,
  });
  function handleChange(key, checked) {
    setItems((prev) => ({ ...prev, [key]: checked }));
  }

  useEffect(() => {
    const result = queryGenerator(items);
    console.log(result);
  }, [items.draft, items.paid, items.pending]);

  console.log(items);

  return (
    <header>
      <div className="container">
        <div>
          <h1>Invoices</h1>
          <p>There are 7 total invoices</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col gap-1 p-1">
              {Object.entries(items).map(([key, value]) => (
                <label
                  key={key}
                  className="flex items-center gap-2 p-2 rounded hover:bg-accent hover:text-accent-foreground cursor-pointer capitalize"
                  htmlFor={key}
                >
                  <Checkbox
                    id={key}
                    checked={value}
                    onCheckedChange={(checked) => handleChange(key, checked)}
                    className="size-4"
                  />
                  <span className="select-none">{key}</span>
                </label>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
