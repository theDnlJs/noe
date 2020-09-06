import FirebaseAuth from '../components/FirebaseAuth'

const Auth = () => {
  return (
    <div style={{ textAlign:'center' }}>
      <p>טופס התחברות</p>
      <div>
        <FirebaseAuth />
      </div>
    </div>
  )
}

export default Auth