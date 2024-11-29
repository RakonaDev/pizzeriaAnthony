

export function AdminDashboard() {

  /*const[response, error] = useFetch('admin/me', 'GET', sessionStorage.getItem('token'))*/
  /*
  if(error) {
    location.href = '/admin'
  }
  useAdmin((state) => state.setCuenta(response))*/

  return (
    <div className="bg-slate-800 w-full h-screen text-white flex">
      <div className="w-full max-w-[15rem] h-screen"></div>
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}
