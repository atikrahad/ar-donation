import Nav from "../Navber/Nav";
import { PieChart, Pie, Cell,  } from "recharts";
import { getStored } from "../../utilitis/utlitis";

const Statistics = () => {
  const getdataStored = getStored();
  const calculate = (getdataStored.length / 12) * 100;
  const modulas = 100 - calculate;

  const data1 = [
    {
      name: "Your Donation",
      value: calculate,
      color: "red",
    },
    {
      name: "Total Donation ",
      value: modulas,
      color: "#FF444A",
    },
  ];

  const COLORS = ["#00C49F", "#FF444A"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div>
      <Nav></Nav>

      <div className="flex flex-col items-center justify-center">
        <PieChart className="outline-none" width={200} height={300}>
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            
            fill="#8884d8"
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          
        </PieChart>
        <div className="flex md:flex-row flex-col items-center gap-3">
           <div className="flex items-center gap-3">
           <span className="font-medium">Your Donation</span><div className="bg-[#00C49F] mr-4 w-10 h-1"></div>
           </div>
           <div className="flex items-center gap-3">
           <span className="font-medium">Total Donation</span> <div className="bg-[#FF444A] w-10 h-1"></div>
           </div>
            
        </div>
      </div>
    </div>
  );
};

export default Statistics;
