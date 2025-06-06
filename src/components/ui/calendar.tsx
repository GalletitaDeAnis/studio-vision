// 📁 src/components/ui/calendar.tsx

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export interface CalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  mode?: "single"; // si solo usas "single", ponlo así
}

export function Calendar({ selected, onSelect, mode = "single" }: CalendarProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 text-white">
      <DayPicker
        mode={mode}
        selected={selected}
        onSelect={onSelect}
        classNames={{
          caption: "text-center font-bold text-lg mb-2",
          head_cell: "text-slate-300",
          day_selected: "bg-blue-600 text-white",
          day_today: "border border-blue-400",
        }}
      />
    </div>
  );
}
