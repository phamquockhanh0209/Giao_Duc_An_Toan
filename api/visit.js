import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method Not Allowed"
        });
    }

    try {
        const supabase = createClient(
            process.env.SUPABASE_URL,
            // process.env.SUPABASE_SERVICE_ROLE_KEY
        );

        const page = req.body?.page || "/";
        const userAgent = req.headers["user-agent"] || "";

        // Ghi lịch sử lượt truy cập
        const { error: visitError } = await supabase
            .from("website_visits")
            .insert({
                page: page,
                user_agent: userAgent
            });

        if (visitError) {
            throw visitError;
        }

        // Tăng tổng lượt xem
        const { data, error: statsError } = await supabase
            .rpc("increment_website_views");

        if (statsError) {
            throw statsError;
        }

        return res.status(200).json({
            success: true,
            totalViews: data
        });

    } catch (error) {
        console.error("Visit tracking error:", error);

        return res.status(500).json({
            success: false,
            message: "Không thể ghi nhận lượt truy cập"
        });
    }
}