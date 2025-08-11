import { useState } from 'react'
import { TrendingUp, DollarSign, Target, Briefcase, Users, Building, TrendingDown } from 'lucide-react'
import './App.css'
import MetricCard from './components/MetricCard'
import ChartSection from './components/ChartSection'

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState('今月')

  const metrics = [
    {
      title: '売上高',
      value: '¥2.1億',
      change: '+18.5%',
      icon: DollarSign,
      trend: 'up' as const
    },
    {
      title: '営業利益',
      value: '¥3,200万',
      change: '+22.1%',
      icon: TrendingUp,
      trend: 'up' as const
    },
    {
      title: '営業利益率',
      value: '15.2%',
      change: '+2.3pt',
      icon: Target,
      trend: 'up' as const
    },
    {
      title: '従業員数',
      value: '128名',
      change: '+12名',
      icon: Users,
      trend: 'up' as const
    },
    {
      title: '新規契約件数',
      value: '47件',
      change: '+28.2%',
      icon: Briefcase,
      trend: 'up' as const
    },
    {
      title: '顧客満足度',
      value: '4.7/5.0',
      change: '+0.2pt',
      icon: Building,
      trend: 'up' as const
    },
    {
      title: '離職率',
      value: '2.1%',
      change: '-1.5pt',
      icon: TrendingDown,
      trend: 'up' as const
    },
    {
      title: 'EBITDA',
      value: '¥4,800万',
      change: '+31.4%',
      icon: TrendingUp,
      trend: 'up' as const
    }
  ]

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>経営ダッシュボード</h1>
        <div className="period-selector">
          {['今日', '今週', '今月', '四半期', '今年'].map((period) => (
            <button
              key={period}
              className={`period-btn ${selectedPeriod === period ? 'active' : ''}`}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </header>

      <main className="dashboard-main">
        <section className="metrics-grid">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </section>

        <ChartSection />
      </main>
    </div>
  )
}

export default App
