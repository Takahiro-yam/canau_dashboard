import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const ChartSection = () => {
  const revenueData = [
    { month: '1月', revenue: 152000000, profit: 22000000 },
    { month: '2月', revenue: 168000000, profit: 24500000 },
    { month: '3月', revenue: 142000000, profit: 19800000 },
    { month: '4月', revenue: 189000000, profit: 28200000 },
    { month: '5月', revenue: 205000000, profit: 31000000 },
    { month: '6月', revenue: 210000000, profit: 32000000 }
  ]

  const departmentData = [
    { quarter: 'Q1', engineering: 45, sales: 32, marketing: 18, hr: 12, finance: 8 },
    { quarter: 'Q2', engineering: 52, sales: 38, marketing: 22, hr: 14, finance: 9 },
    { quarter: 'Q3', engineering: 48, sales: 45, marketing: 25, hr: 16, finance: 11 },
    { quarter: 'Q4', engineering: 55, sales: 42, marketing: 28, hr: 18, finance: 12 }
  ]

  const marketShareData = [
    { name: '自社', value: 28, color: '#3b82f6' },
    { name: '競合A', value: 22, color: '#ef4444' },
    { name: '競合B', value: 18, color: '#f59e0b' },
    { name: '競合C', value: 15, color: '#10b981' },
    { name: 'その他', value: 17, color: '#8b5cf6' }
  ]

  return (
    <section className="charts-section">
      <div className="chart-container">
        <h3>売上高・営業利益推移（百万円）</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip 
              formatter={(value: number, name: string) => [
                `¥${(value / 1000000).toFixed(0)}M`,
                name === 'revenue' ? '売上高' : '営業利益'
              ]}
            />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3b82f6" 
              strokeWidth={3}
              name="revenue"
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="profit" 
              stroke="#10b981" 
              strokeWidth={3}
              name="profit"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3>部門別従業員数推移</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={departmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="engineering" stackId="a" fill="#3b82f6" name="エンジニアリング" />
            <Bar dataKey="sales" stackId="a" fill="#10b981" name="営業" />
            <Bar dataKey="marketing" stackId="a" fill="#f59e0b" name="マーケティング" />
            <Bar dataKey="hr" stackId="a" fill="#ef4444" name="人事" />
            <Bar dataKey="finance" stackId="a" fill="#8b5cf6" name="財務" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3>市場シェア（%）</h3>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={marketShareData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {marketShareData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default ChartSection