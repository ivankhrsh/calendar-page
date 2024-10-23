import { useState } from "react";
import {
  format,
  addDays,
  startOfWeek,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ButtonGroup } from "./ui/button-group";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewType, setViewType] = useState<"month" | "week" | "day" | "agenda">(
    "month"
  );
  const [events, setEvents] = useState<{ title: string; date: Date }[]>([]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = addDays(startOfWeek(monthEnd, { weekStartsOn: 1 }), 6);

  const handleViewType = (view: "month" | "week" | "day" | "agenda") =>
    setViewType(view);
  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const handleDateClick = (day: Date) => setSelectedDate(day);
  const handleToday = () => {
    const date = new Date();
    setCurrentMonth(date);
    setSelectedDate(date);
  };

  const handleAddEvent = (title: string) => {
    if (selectedDate) {
      setEvents([...events, { title, date: selectedDate }]);
    }
  };

  const renderCells = () => {
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    // Calculate the total number of weeks displayed
    const weeksInMonth = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000)
    );

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;

        const currentWeek = Math.floor(
          (day.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000)
        );
        const isLastRow = currentWeek === weeksInMonth - 1;

        days.push(
          <Dialog>
            <DialogTrigger asChild>
              <div
                className={cn(
                  "p-16 cursor-pointer border-l border-t border-gray-200 text-center relative",
                  !isSameMonth(day, monthStart) && "text-gray-400",
                  isSameDay(day, selectedDate) && "bg-gray-500/50 text-white",
                  !isSameDay(day, selectedDate) && "hover:bg-gray-100",
                  i === 6 && "border-r",
                  isLastRow && "border-b"
                )}
                onClick={() => handleDateClick(cloneDay)}
                key={day.toString()}
              >
                <span className="absolute top-4 right-4">{formattedDate}</span>
              </div>
            </DialogTrigger>
            <DialogContent className="pt-12">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const title = e.target.title.value;
                  handleAddEvent(title);
                  e.target.reset();
                }}
              >
                <Input
                  name="title"
                  placeholder="Event Title"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <Button type="submit" className="w-full bg-blue-500 text-white">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="p-5 bg-white shadow-md text-[#4D4F5C] ">
      <div className="flex justify-between items-center">
        <h4 className="text-lg pb-4">Calendar View</h4>

        <ButtonGroup className="shadow-sm rounded-md">
          <Button
            variant="outline"
            className={
              (cn("rounded-l-sm"),
              viewType === "month"
                ? "bg-gray-200/90 text-primary hover:bg-gray-200/90"
                : "")
            }
            onClick={() => handleViewType("month")}
          >
            Month
          </Button>
          <Button
            className={
              viewType === "week"
                ? "bg-gray-200/90 text-primary hover:bg-gray-200/90"
                : ""
            }
            variant="outline"
            onClick={() => handleViewType("week")}
          >
            Week
          </Button>
          <Button
            className={
              viewType === "day"
                ? "bg-gray-200/90 text-primary hover:bg-gray-200/90"
                : ""
            }
            variant="outline"
            onClick={() => handleViewType("day")}
          >
            Day
          </Button>
          <Button
            variant="outline"
            className={
              (cn("rounded-r-sm"),
              viewType === "agenda"
                ? "bg-gray-200/90 text-primary hover:bg-gray-200/90"
                : "")
            }
            onClick={() => handleViewType("agenda")}
          >
            Agenda
          </Button>
        </ButtonGroup>
      </div>

      <div className="flex mb-4 items-center text-center">
        <ButtonGroup className="shadow-sm rounded-md">
          <Button
            onClick={handleToday}
            variant="outline"
            className="rounded-l-sm"
          >
            Today
          </Button>
          <Button variant="outline" onClick={handlePrevMonth}>
            Back
          </Button>
          <Button
            variant="outline"
            className="rounded-r-sm"
            onClick={handleNextMonth}
          >
            Next
          </Button>
        </ButtonGroup>

        <h2 className="text-xl w-full">{format(currentMonth, "MMMM yyyy")}</h2>
      </div>
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-700 bg-gray-100 p-4 mt-6">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      {renderCells()}
    </div>
  );
};

export default CalendarComponent;
