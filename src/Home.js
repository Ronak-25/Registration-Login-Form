import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    useEffect(() => {
        let a = localStorage.getItem('Name')
        setName(a)
    }, [name])

    const removeData = () => {
        localStorage.clear()
        window.alert('All Data are Removed')
        navigate('/')
    }

    return (
        <React.Fragment>
            <div>
                <form>
                    <h1 className='h1'>Home</h1>
                    <h3 className='h1'>Hello, {name} </h3>
                    <div className='buttons'>
                        <button onClick={() => navigate('/ChangePassword')}>Change Password</button>&nbsp;
                        <button type='submit' onClick={removeData}>Remove All Data</button>
                    </div>

                </form>
            </div>
        </React.Fragment>
    );
}
export default Home;