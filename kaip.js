<html>
    <head>
        <title></title>
        <Link href="css/bootstrap.css" rel="stylesheet">
    </head>
    <body>
        <div id="root">

        </div>
        <script src="./js/react.development.js"></script>
        <script src="./js/react-dom.development.js"></script>
        <script src="./js/babel.js"></script>
        <script src="./js/axios.js"></script>
      <script type="text/babel">
      const rootHandle = document.getElementById('root')

      class UserList extends React.Component {
          constructor() {
              super()
              this.state = {
                  users:[],
                  selected:[]
              }
          }
          componentDidMount(){
              axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response)=>{
                    const users = response.data
                    const selectedUser = users.map((user)=>{
                        user.isChecked = false
                        return user
                    })
                    
                   
                    this.setState({users:selectedUser})
                })
          }
          handleChange = (i)=>{
              
              this.setState((prevState)=>{
                  prevState.users[i].isChecked = true
                  prevState.selected.push(prevState.users[i].name)
                  return {users:prevState.users, selected:prevState.selected}
              })

          }
        
        render(){
            return (
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h2>Listing Users - {this.state.users.length}</h2>
                    <table className="table">
                    <thead>
                        <tr>
                           
                            <th>name</th>
                            <th>email</th>
                            <th>action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {this.state.users.map((user, i)=>{
                            return(
                                <tr key={user.id}>
                                   
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><input type="checkbox" value={user.isChecked} onChange ={()=>{this.handleChange(i)}} /></td>
                                    
                                    </tr>
                            )
                        })}
                        </tbody>    
                    </table>
                    </div>

                    <div className="col-md-6">
                        <h2>Listing Users - {this.state.selected.length}</h2>
                        <ul className="list-group">
                            {this.state.selected.map((userName, i)=>{
                                return <li key={i} className="list-group-item">{userName}</li>
                            })}
                            </ul>
                            </div>
                    </div>
                    </div>


                   
                    
                    
            )
        }}

    

      ReactDOM.render(<UserList />, rootHandle)


      </script>
        
    </body>
</html>