import { useMemo } from "react";
import { format } from "date-fns";

import { defBookingTimes } from "../components/utils/data";

const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const useAvailableTimes = (date?: Date) => {
  const formatedDate = date ? format(date, "MM/dd/yyyy") : "";
  const { availableTimes } = useMemo(() => {
    /* Create new Map to get available times */
    const availableTimes = new Map<string, Set<string>>();
    if (formatedDate) {
      /* Add start and end random values */
      const randomStart = getRandomIntInclusive(0, 23);
      const randomEnd = getRandomIntInclusive(randomStart, 23);
      /* Pick some random def times */
      let randomTimes = [""];
      randomTimes = randomTimes.concat(
        defBookingTimes.slice(randomStart, randomEnd)
      );
      /* Check if exist record for specific date */
      const dateBookingTimes = availableTimes.get(formatedDate);
      /* Apply modifications to data */
      if (dateBookingTimes?.size) {
        randomTimes.forEach((time) => dateBookingTimes.add(time));
      } else availableTimes.set(formatedDate, new Set(randomTimes));
    }

    return { availableTimes };
  }, [formatedDate]);
  return { availableTimes };
};

const useListTimes = (
  availableTimes: Map<string, Set<string>>,
  pickedDate: string
) => {
  const timeList = useMemo(() => {
    const list = [] as string[];
    availableTimes.get(pickedDate)?.forEach((time) => {
      list.push(time);
    });
    return list;
  }, [availableTimes, pickedDate]);
  return timeList;
};

export { useAvailableTimes, useListTimes };
