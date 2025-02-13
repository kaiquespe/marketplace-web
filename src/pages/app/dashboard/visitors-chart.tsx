import {
	Calendar04Icon,
	Loading01Icon,
	UserMultipleIcon,
} from "hugeicons-react";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import colors from "tailwindcss/colors";

interface VisitorsChartProps {
  data: { date: string; amount: number }[];
}

export function VisitorsChart({ data }: VisitorsChartProps) {
	return (
		<div className="flex flex-col gap-4 p-6 w-full">
			<div className="flex flex-row justify-between items-center">
				<div className="space-y-1">
					<h2 className="font-medium title-sm">Visitors</h2>
				</div>

				<div className="flex items-center gap-2">
					<Calendar04Icon size={16} />
					<span className="text-gray-300 label-sm">26th June - 25th July</span>
				</div>
			</div>
			<div className="border">
				 {data.length ? (
					<ResponsiveContainer width="100%" height={266}>
						<LineChart data={data} style={{ fontSize: 12 }}>
							<XAxis dataKey="date" axisLine={true} tickLine={false} dy={16} />
							<YAxis stroke="#888" axisLine={false} tickLine={false} />
							<CartesianGrid
								vertical={false}
								strokeDasharray="5 5"
								stroke="#ccc"
							/>
							<Tooltip content={CustomTooltip} />
							<Line
								type="monotone"
								dataKey="amount"
								stroke={colors.violet[500]}
								dot={false}
							/>
						</LineChart>
					</ResponsiveContainer>
				) : (
					<div className="flex justify-center items-center w-full h-[240px]">
						<Loading01Icon
							size={40}
							className="w-8 h-8 text-muted-foreground animate-spin"
						/>
					</div>
				)}
			</div>
		</div>
	);
}

import type { TooltipProps } from "recharts";
import { ViewsPerDayResponse } from "../../../api/views-per-day";

function CustomTooltip({
	payload,
	label,
	active,
}: TooltipProps<number, string>) {
	if (active) {
		return (
			<div className="flex flex-col gap-2 bg-white shadow-md p-3 rounded-lg">
				<p className="label-sm">{label}th July</p>
				<div className="flex items-center gap-2">
					<UserMultipleIcon size={16} />
					<span className="body-xs">{payload?.[0]?.value} visitors</span>
				</div>
			</div>
		);
	}

	return null;
}
