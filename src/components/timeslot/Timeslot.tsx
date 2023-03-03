import { TimeSlotContainer, TimeSlotHeader, TimeSlotHeaderDay, TimeSlotHeaderDate, TimeSlotContent, TimeSlot } from "./TimeSlotStyles";
import Button from "../ui/button/Button";

import { IOpeningHours } from "../../index.d";
import { useEffect, useState } from "react";

interface TimeSlotProps {
    dateStart: Date
    dateNotAvailable: []
    openingHours?: IOpeningHours[]
    onClick: (year: string, month: string, date: string, time: string) => void
}

interface IDaySlot {
    day: string
    dateNumber: string
    month: string
    year: string
    timeslot?: string[]
}

export const Timeslot = ({ dateStart, dateNotAvailable, openingHours, onClick }: TimeSlotProps) => {
    const [daySlotsFormatted, setDaySlotsFormatted] = useState<IDaySlot[]>([]);

    const convertTime = (time: string) => {
        const hours = Number(time.split('h')[0]);
        const minutes = Number(time.split('h')[1]);

        return hours * 60 + minutes;
    }

    const convertTimeBack = (time: number) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;

        return `${hours}h${minutes}`;
    }

    useEffect(() => {
        const daySlots: IDaySlot[] = [];
        const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

        for (let i = 0; i < 7; i++) {
            const date = new Date(dateStart);
            date.setDate(date.getDate() + i);
            const day = date.toLocaleDateString('fr-FR', { weekday: 'long' });
            const dateNumber = date.toLocaleDateString('fr-FR', { day: 'numeric' });
            const month = date.toLocaleDateString('fr-FR', { month: 'long' });
            const year = date.toLocaleDateString('fr-FR', { year: 'numeric' });

            const openningHoursOfDay = openingHours?.filter((openingHour: IOpeningHours) => Number(openingHour.day) === days.indexOf(day));
            const timeslot: string[] = [];

            console.log(openningHoursOfDay)

            if (openningHoursOfDay) {
                const timeSlotDay = [];
                const start = convertTime(openningHoursOfDay[0].open);
                const end = convertTime(openningHoursOfDay[0].close);
                const duration = 30;

                for (let i = start; i < end; i += duration) {
                    timeSlotDay.push(i);
                }

                timeSlotDay.forEach((timeSlot: any) => {
                    let hours = convertTimeBack(timeSlot).split('h')[0];
                    let minutes = convertTimeBack(timeSlot).split('h')[1];

                    hours = hours.length === 1 ? hours = `0${hours}` : hours;
                    minutes = minutes === '0' ? minutes = '00' : minutes;

                    const dateFormated = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                    dateNotAvailable.forEach((date: any) => {
                        if (date.date === dateFormated && date.time === `${hours}h${minutes}`) return 
                        else timeslot.push(`${hours}:${minutes}`)
                    });
                });
            }

            daySlots.push({
                day,
                dateNumber,
                month,
                year,
                timeslot
            });
        }

        setDaySlotsFormatted(daySlots);
    }, [dateStart, openingHours, dateNotAvailable]);

    return (
        <TimeSlotContainer>
            {daySlotsFormatted.map((datetime: IDaySlot, index: number) => (
                <TimeSlot key={index}>
                    <TimeSlotHeader>
                        <TimeSlotHeaderDay>{datetime.day}</TimeSlotHeaderDay>
                        <TimeSlotHeaderDate>{datetime.dateNumber} {datetime.month}</TimeSlotHeaderDate>
                    </TimeSlotHeader>

                    <TimeSlotContent>
                        {datetime.timeslot?.map((time: string, index: number) => (
                            <Button onClick={() => onClick(datetime.year, datetime.month, datetime.dateNumber, time)} width="100%" margin="5px 0" rounded key={index}>{time}</Button>
                        ))}
                    </TimeSlotContent>
                </TimeSlot>
            ))}
        </TimeSlotContainer>
    );
};

export default Timeslot;
