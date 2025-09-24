import { useEffect, useState } from "react";
import { useBasketStore } from "../../store/basketStore";

export default function ReverseTimer() {
    const MAX_TIME_FOR_TIMER = 30;

    const basket = useBasketStore((state) => state.basket);
    const clearBasket = useBasketStore((state) => state.clearBasket);

    const [time, setTime] = useState(MAX_TIME_FOR_TIMER);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;

        if (basket.length > 0) 
        {
        setTime(MAX_TIME_FOR_TIMER); 
        interval = setInterval(() => {
            setTime((prev) => {
                if (prev > 1) 
                {
                    return prev - 1;
                } 
                else 
                {
                    clearBasket(); 
                    return MAX_TIME_FOR_TIMER;     
                }
            });
        }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
            setTime(MAX_TIME_FOR_TIMER); 
        };
    }, [basket.length, clearBasket]);

    if (basket.length === 0) return null;

    return (
        <div
        style={{
            position: "absolute",
            top: "150px",
            left: "150px",
            width: "18%",
            fontSize: "18px",
            fontWeight: "600",
            fontFamily: "Nunito",
        }}
        >
        Time until the trash is emptied: {time}
        </div>
    );
}
