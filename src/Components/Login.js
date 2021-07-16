export function Login ( props ){

    const submitHandler = ( event ) => {
        event.preventDefault()
        const data = new FormData( event.target )
        props.handler( data.get('email'), data.get('password') )
    }

    return (
        <form id="login" onSubmit={ submitHandler }>
            <h4>Login</h4>
            <label className="form-label" htmlFor="enmail">Email</label>
            <input className="form-control" type="email" name="email" id="email" placeholder="Email" />
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" id="password" placeholder="Password" />
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
}