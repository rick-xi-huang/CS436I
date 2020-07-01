import React from 'react';

export default function MessageCard({id, name, message, time}) {
    return (<div>
            <p> ID: {id}   <br/>
                Posted by: {name} <br/>
                Message: {message} <br/>
                Time:  {new Date(time).toLocaleDateString()} {new Date(time).toLocaleTimeString()}
            </p>
        </div>
    )

}
