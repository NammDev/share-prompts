import UserProfile from '@/components/Profile/UserProfile'

async function UserProfilePage({ params }: { params: { id: string } }) {
  return <UserProfile params={params} />
}

export default UserProfilePage
