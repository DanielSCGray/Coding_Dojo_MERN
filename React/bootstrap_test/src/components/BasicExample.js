import {useState} from 'react'

function BasicExample() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const firstNameVal = () => {
        if (firstName.length === 1) {
            return ('First name must be at least 2 characters')
        }
        else { return ('') }
    }
    const lastNameVal = () => {
        if (lastName.length === 1) {
            return ('Last name must be at least 2 characters')
        }
        else { return ('') }
    }
    const emailVal = () => {
        if (email.length === 1) {
            return ('Email must be at least 2 characters')
        }
        else { return ('') }
    }
    const passwordVal = () => {
        if (password.length >0 && password.length <8) {
            return ('Pasword must be at least 8 characters')
        }
        else { return ('') }
    }
    const confirmPasswordVal = () => {
        if (confirmPassword.length> 0 && password !== confirmPassword) {
            return ('Paswords must match')
        }
        else { return ('') }
    }

    return (
        <div>
            <form className="form-control bg-secondary">
                <div>
                    <label>First Name: </label>
                    <input className="form-control" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <p>{firstNameVal()}</p>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <p>{lastNameVal()}</p>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <p>{emailVal()}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p>{passwordVal()}</p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p>{confirmPasswordVal()}</p>
                </div>
            </form>

        </div>
    )
}

export default BasicExample;