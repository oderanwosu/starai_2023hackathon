// import React from "react";
// import Image from 'next/image';
// import Logo from "../../../public/starAI-logo.svg"

// export default function Header() {
//     return (
//         <React.Fragment>
//             <nav>
//                 <div>
//                     <Image
//                     priority
//                     src={Logo}
//                     alt="Follow us on Twitter"
//                     />
//                     <ul>
//                         <li color="White">star.AI </li>
//                     </ul>
//                 </div>
                
//             </nav>
//         </React.Fragment>
//     );
// }

import React from "react";
import Image from 'next/image';
import Logo from "../../../public/starAI-logo.svg"

export default function Header() {
    return (
        <React.Fragment>
            <nav style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
                    <Image
                        priority
                        src={Logo}
                        alt="starAI logo"
                    />
                    <span style={{ color: 'white', marginLeft: '10px', fontSize: '46px' }}>star.AI</span>
                </div>
            </nav>
        </React.Fragment>
    );
}
