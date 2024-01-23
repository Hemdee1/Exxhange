import { CalendarIcon } from "../assets/Icons";

export default function Calendar() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div>
      <div className="flex gap-[10px] items-center">
        <CalendarIcon />
        <p className="font-Inter text-[14px] font-medium">
          {month} {day}, {year}
        </p>
      </div>
    </div>
  );
}
