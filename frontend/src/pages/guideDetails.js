import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import './pages.css';

import { creditBureauFreeze } from './guides/creditBureauFreeze';
import { twoFactorAuth } from './guides/twoFactorAuthentication';

const GuideDetail = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);

    const guideMapping= {
        [creditBureauFreeze.title]: "creditBureauFreeze",
        [twoFactorAuth.title]: "twoFactorAuthentication"
    };

    const guideFileName= guideMapping[decodedTitle];

    if (!guideFileName) {
        return <div className='guidePage'><h1>Guide not Found.</h1></div>;
    }

    const GuideComponent = lazy(() => import(`./guides/${guideFileName}`));

    return (
        <Suspense fallback={<div className='guidePage'><h1>Loading...</h1></div>}>
            <GuideComponent />
        </Suspense>
    );
};

export default GuideDetail;