import React, { forwardRef } from 'react';
import { useRouter } from 'next/router';
import hoistNonReactStatics from 'hoist-non-react-statics';

const withRouterRef = (WrappedComponent) => {
    const WithRouterRef = forwardRef((props, ref) => {
        const router = useRouter();

        return <WrappedComponent ref={ ref } router={ router } { ...props } />;
    });

    WithRouterRef.displayName = `withRouterRef(${WrappedComponent.displayName || WrappedComponent.name || /* istanbul ignore next */ 'Component'})`;
    hoistNonReactStatics(WithRouterRef, WrappedComponent);

    return WithRouterRef;
};

export default withRouterRef;
