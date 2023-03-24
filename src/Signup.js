import { Link } from "react-router-dom"

function SignUp() {
    return (
        <div className="signUp-container">
            <div className="account section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                    <div className="login-form border p-5">
                        <div className="text-center heading">
                        <h2 className="mb-2">Sign Up</h2>
                        <p className="lead">Already have an account? <a href="/login"> Login now</a></p>
                        </div>
            
                        <form action="#">
                        <div className="form-group mb-4">
                            <label for="#">Enter Email Address</label>
                            <input type="text" className="form-control" placeholder="Enter Email Address"/>
                        </div>
                        <div className="form-group mb-4">
                            <label for="#">Enter username</label>
                            <Link className="float-right" to="">Forget password?</Link>
                            <input type="text" className="form-control" placeholder="Enter Password"/> 
                        </div>
                        <div className="form-group mb-4">
                            <label for="#">Enter Password</label>
                            <input type="text" className="form-control" placeholder="Enter Password"/> 
                        </div>
                        <div className="form-group">
                            <label for="#">Confirm Password</label>
                            <input type="text" className="form-control" placeholder="Confirm Password" /> 
                        </div>
            
                        <Link to="#" className="btn btn-main mt-3 btn-block">Signup</Link>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp