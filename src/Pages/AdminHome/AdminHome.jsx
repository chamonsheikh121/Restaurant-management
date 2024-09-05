import UseAdminStats from "../../Hooks/UseAdminStats";
import UseAuthContext from "../../Hooks/UseAuthContext";
import AdminHomeHeader from "./AdminHomeHeader";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { React, PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';





const AdminHome = () => {
    const { user } = UseAuthContext()
    const { data } = UseAdminStats();
    // console.log(data);





    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const categories = [
        {
            name: 'Dessert',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Pizza',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Salad',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Soup',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        }

    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };








    const PieData = [
        { name: 'Dessert', value: 400 },
        { name: 'Salad', value: 300 },
        { name: 'Pizza', value: 300 },
        { name: 'Soup', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    return (
        <div className="">
            <h1 className="uppercase text-3xl font-bold">Hi, welcome   ---{user ? user?.displayName : 'back'}---</h1>

            <AdminHomeHeader></AdminHomeHeader>

            <div>
                <BarChart
                    width={300}
                    height={200}
                    data={categories}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    
                    
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {categories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 50]} />
                        ))}
                    </Bar>
                </BarChart>

            </div>
            <div>

                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={PieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {PieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default AdminHome;