import FirebaseAuth from '../components/FirebaseAuth.jsx'

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