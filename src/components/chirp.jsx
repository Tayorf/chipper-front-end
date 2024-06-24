import React from 'react';


const ChirpCard = ({ username, message, created }) => {
    return (
        <span class="card row-3">
            <div class="card-header">
                {username}
            </div>
            <div class="card-body">
                <h5 class="card-title">{message}</h5>
                <footer class="blockquote-footer">{created}</footer>
            </div>
        </span>
    )
};

export default ChirpCard;