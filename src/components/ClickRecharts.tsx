import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import type { Graphics } from "../types";

type PropsClickRecharts = {
    link: Graphics[]
}

export const ClickRecharts = ({link}:PropsClickRecharts) => {

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Clicks por link</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={link}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="slug" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="clicks" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
  
}
