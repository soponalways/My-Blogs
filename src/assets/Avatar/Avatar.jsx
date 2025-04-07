import React from 'react';

const Avatar = ({ author_profile, is_Active }) => {
    return (
        <div className={`avatar ${is_Active ? "avatar-online" : "avatar-offline"}`}>
            <div className="w-20 rounded-full">
                <img src={author_profile} />
            </div>
        </div>
    );
};

export default Avatar;