import React, { useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";
import Request from "../Request";
import { Summary } from "../api-types";
import { AxiosResponse } from "axios";

export default function TotalDaysSection() {
    const [summary, setSummary] = useState<Summary | null>(null);

    useEffect(() => {
        Request.get("/summary").then((response: AxiosResponse<Summary>) =>
            setSummary(response.data)
        );
    }, []);
    console.log(summary)

    return (
        <>
            <Divider />

            <Typography padding={2} variant="body1">
                Kể từ khi dịch bùng phát từ đầu 2020 đến nay, Việt Nam đã ghi nhận <span style={{ color: "#ff0000" }}>{summary === null ? "Đang tải..." : `${summary.Global.TotalConfirmed}`}</span> ca nhiễm, <span style={{ color: "#008000" }}>{summary === null ? "Đang tải..." : `${summary.Global.TotalRecovered}`}</span> người khỏi bệnh và <span style={{ color: "#ff0000" }}>{summary === null ? "Đang tải..." : `${summary.Global.TotalDeaths}`}</span> ca tử vong.
            </Typography>

            <Typography padding={2} variant="body1">
                7 ngày qua, tổng nhiễm trên cả nước giảm 738.421 (↓41%) so với cùng kỳ, tổng bệnh nhân tử vong giảm 70 (↓15%), số người khỏi bệnh tăng 1.599.378 (↑147%).
            </Typography>

            <Divider />
        </>
    );
}
