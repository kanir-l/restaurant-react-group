import { ChangeEvent, useState } from "react";

interface ITimeSlotsProps {
    timeSlots(time: number): void;
}

function TimeSlots(props: ITimeSlotsProps) {

    const [time, setTime] = useState(0);

    const saveTime = (e: ChangeEvent<HTMLInputElement>) => {
        let time = parseInt(e.target.value);
        setTime(time);
        props.timeSlots(time);
    }

    return (
        <div>
            <form action="">
            <h4>Available times</h4>
            <input type="radio" id="time1" name="time" value="18.00" onChange={saveTime}></input>
            <label htmlFor="time1">18:00</label>

            <input type="radio" id="time2" name="time" value="21.00" onChange={saveTime}></input>
            <label htmlFor="{time2}">21:00</label>
            </form>
            <p style={{visibility: "hidden"}}>{time}</p>
            
            <div className = "sorry-box">
                <h3>WE’re Sorry!</h3>
                <p>We don’t have any tables available on that date.</p><br />
                <p>Please choose another date.</p>
            </div>
        </div>
    );
}

export default TimeSlots;