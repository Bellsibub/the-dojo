import { useSnapshotDB } from "hooks/useSnapshotDB"

const Dashboard = () => {
  const { documents, error } = useSnapshotDB('projects')
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard