import {useEffect} from "react";

export default function useCalc(url, setCalcData) {

    useEffect(() => {
        (async function fetchData() {
        const response = await fetch("http://localhost:3001/months")
        .catch(error => {
            console.error("[ERROR] Cannot fetch because", error);
            if (error.toString().includes("NetworkError")) {
                throw new Error("NETWORK_ERROR");
            } else {
                throw new Error("SYSTEM_ERROR");
            }
        });

        if (response.ok) {
            try {
                const jsonData = await response.json();
                setCalcData(jsonData);
            } catch (e) {
                console.warn("[WARN] Error while parsing content.  Likely because of empty body.", e);
                throw new Error("SYSTEM_ERROR");
            }
        }
    })();
    }, []);
}