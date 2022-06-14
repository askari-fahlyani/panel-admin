import React from 'react';
import MinimizeIcon from "@mui/icons-material/Minimize";

function HeaderPage({children,icon1,icon2,icon3}) {
    return (
        <div>
            <div className="topIcons">
                <p> {children}</p>
                <div>{icon1}{icon2}{icon3}</div>
            </div>
        </div>
    );
}

export default HeaderPage;