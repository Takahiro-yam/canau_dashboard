import type { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  trend: 'up' | 'down'
}

const MetricCard = ({ title, value, change, icon: Icon, trend }: MetricCardProps) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-title">{title}</span>
        <Icon className="metric-icon" size={24} />
      </div>
      <div className="metric-value">{value}</div>
      <div className={`metric-change ${trend}`}>
        {change}
      </div>
    </div>
  )
}

export default MetricCard